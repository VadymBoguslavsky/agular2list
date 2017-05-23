import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import { Location }                       from '@angular/common';

import {Observable} from "rxjs";
import {Task} from "./task";
import {TaskService} from "./task.service";
import { FilterByFieldPipe }    from './filter-by-field';
import { SortByFieldPipe }      from './sort-by-field';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task.component.css'],
  providers: [FilterByFieldPipe, SortByFieldPipe],
})
export class TaskListComponent implements   OnInit {
  tasks: Task[] = [];
  activeTasks: Task[];
  completedTasks: Task[];
  selectedTasks: Array<number> = [];

  constructor(private taskService: TaskService,
              private router: Router,
              private filterByField: FilterByFieldPipe,
              private sortByField: SortByFieldPipe,
              private _flashMessagesService: FlashMessagesService,
              private route: ActivatedRoute,
              private location: Location,) {
  }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getTasks());
  }

  getTasks() {
    this.taskService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
        this.refreshPipes(tasks);
      });
  }

  isExists(obj): boolean {
    if (obj && obj !== undefined && obj.length) {
      return true;
    }
    return false;
  }


  updateCheckedOptions(task, $event) {
    let tasks = this.selectedTasks;
    if ($event.target.checked) {
      tasks.push(task.id);
      task.marked = true;
    } else {
      tasks.forEach((t, index) => {
        if (t === task.id) {
          tasks.splice(index, 1);
          task.marked = false;
          return;
        }
      });
    }
  }


  checkAll() {
    this.selectedTasks = [];
    this.tasks.forEach((task, i) => {
      this.selectedTasks.push(task.id);
      task.marked = true;
    });
  }

  uncheckAll() {
    this.selectedTasks = [];
    this.tasks.forEach((task, i) => {
      if (task.marked === true) {
        task.marked = false
      }
    });
  }

  batchDestroy(ids: Array<number>) {
    if (confirm('Are you sure?')) {
      this.taskService.batchDestroy(ids)
        .then(res => {
          let ids = res.json();
          console.log(ids)
          if (!ids) return false;
          for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i]['marked'] === true) {
              this.tasks.splice(i, 1);
              i--;
            }
          }
          this.refreshPipes(this.tasks);
          this.selectedTasks = [];
          this._flashMessagesService.show('You have succesfully deleted tasks', {
            cssClass: 'alert-success',
            timeout: 5000
          });

        });
    }
  }

  refreshTasks(tasks: Task[]) {
    this.taskService.tasks.next(tasks);
    this.refreshPipes(tasks);
  }

  update(task: Task) {

    this.taskService.update(task)
      .subscribe(data => {
          console.log(data)
        },
        error => {
          return Observable.throw(error);
        });
    this._flashMessagesService.show('You have succesfully updated tasks', {cssClass: 'alert-success', timeout: 5000});

  }

  refreshPipes(tasks: Task[]) {
    this.activeTasks = this.filterByField.transform(tasks, 'completed', false);
    this.completedTasks = this.filterByField.transform(tasks, 'completed', true);
  }

  goToShow(task: Task): void {
    let taskLink = ['/admin/tasks', task.id];
    this.router.navigate(taskLink);
    }
}
