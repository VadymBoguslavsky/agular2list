import {Component, OnInit, Input} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Http} from "@angular/http";
import {Task} from "./task";
import {TaskService} from "./task.service";
import { IMyOptions, IMyDateModel } from 'mydatepicker';

import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'task-show',
  templateUrl: 'task-show.component.html',
})
export class TaskShowComponent implements OnInit {

  id: number;
  routeId: any;
  errorMessage: any;
  returnUrl: string;
  editBtnClicked: boolean = false;
  private _date: Date = new Date();
  private datePickerOptions: IMyOptions = {
    inline: true,
    width: "100%",
    dateFormat: 'dd-mm-yyyy',
    disableUntil: {
      day: this._date.getDate() - 1,
      month: this._date.getMonth() + 1,
      year: this._date.getFullYear()
    }
  };
  constructor(
    private http: Http,
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {}
  onDateChanged(event: IMyDateModel) {}
  @Input() task: Task;

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/tasks';
    this.routeId = this.route.params.subscribe(
      params => {
        this.id = +params['id'];
      }
    );
    let postRequest = this.route.params
      .flatMap((params: Params) =>
        this.taskService.getTask(+params['id']));
    postRequest.subscribe(response => {
      this.task = response.json();
    });
  }

  update(task: Task) {
    console.log(task);
    if (task['due_date']) {
      task['due_date'] = task['due_date']['formatted'];
    }
    this.editBtnClicked = true;
    this.taskService.updateTask(task)
      .subscribe(data => {
        return true;
      }, error => {
        console.log('Error editing Task');
        return Observable.throw(error);
      })
  }

  delete(task: Task) {
    this.taskService.deleteTask(this.task.id)
      .subscribe(data => {
          this.router.navigate(['/']);
        },
        error => this.errorMessage = error);
  }

  onUpdateClicked() {
    this.router.navigate([this.returnUrl]);
    this.editBtnClicked = false;
    //window.location.reload();
  }

}
