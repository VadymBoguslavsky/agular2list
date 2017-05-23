import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {Task} from "./task";
import { Subject }               from 'rxjs/Subject';

@Injectable()
export class TaskService {
  public tasks: Subject<Task[]>;
  headers: Headers;
  options: RequestOptions;
  private tasksUrl = 'https://vadimapi.herokuapp.com/api/tasks';

  constructor(private http: Http) {
    this.headers = new Headers({'Content-Type': 'application/json'});
    this.options = new RequestOptions({headers: this.headers});
  }

  getTasks(): Observable<Task[]> {
    const url = `${this.tasksUrl}?access_token=${localStorage.getItem('token')}`;
    return this.http.get(url)
      .map((response: Response) => <Task[]>response.json())
  }

  getTask(id: number) {
    const url = `${this.tasksUrl}/${id}?access_token=${localStorage.getItem('token')}`;
    return this.http.get(url)
  }

  createTask(task: Task): Observable<Task> {
    task['due_date'] = task['due_date']['formatted'];
    console.log(task.due_date)
    const url = `${this.tasksUrl}?access_token=${localStorage.getItem('token')}`;
    return this.http.post(url, JSON.stringify(task),
      this.options).map((res: Response) => res.json());
  }

  update(task: Task): Observable<Task> {
    if (task['due_date']) {
      task['due_date'] = task['due_date']['formatted'];
    }
    const url = `${this.tasksUrl}/${task.id}?access_token=${localStorage.getItem('token')}`;
    return this.http.put(url, JSON.stringify(task),
      this.options).map((res: Response) => res.json());
  }

  updateTask(task: Task): Observable<Task>{
    const url = `${this.tasksUrl}/${task.id}?access_token=${localStorage.getItem('token')}`;
    return this.http.put(url, JSON.stringify(task),
      this.options).map((res: Response) => res.json())
      .catch(this.handleError);
  }

  deleteTask(id: number): Observable<Task>{
    const url = `${this.tasksUrl}/${id}?access_token=${localStorage.getItem('token')}`;
    return this.http.delete(url, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  batchDestroy(ids: Array<number>) {
    let body = JSON.stringify({tasks: ids});
    console.log(body)
    const url = `${this.tasksUrl}/batch_destroy?access_token=${localStorage.getItem('token')}`;
    return this.http.delete(url, { body: body, headers: this.headers })
      .toPromise()
  }

  private extractData(res: Response){
    let body = res.json();
    return body || {};
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
