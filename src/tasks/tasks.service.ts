import { Injectable } from '@nestjs/common';
import { Task } from './models/task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }
}
