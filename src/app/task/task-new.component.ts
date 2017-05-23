import {Component} from "@angular/core";
import {Task} from "./task";
import {TaskService} from "./task.service";
import {Observable} from "rxjs";
import { IMyOptions, IMyDateModel } from 'mydatepicker';
import { FlashMessagesService } from 'angular2-flash-messages';
import {MyDatePickerModule} from "mydatepicker";
@Component({
  selector: 'task-new',
  templateUrl: 'task-new.component.html',
  styleUrls: ['task.component.css']
})
export class TaskNewComponent {
  task = new Task;
  submitted: boolean = false;
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

  constructor(private taskService: TaskService,
              private _flashMessagesService: FlashMessagesService) {
  }
  onDateChanged(event: IMyDateModel) {}

  createTask(task: Task) {
    this.submitted = true;
    this._flashMessagesService.show('Task succesfully created', { cssClass: 'alert-success', timeout: 5000 });
    this.taskService.createTask(task).subscribe(data => {return true},

      error => {
        console.log("Error creating task");
        return Observable.throw(error);
      });
  }
}
