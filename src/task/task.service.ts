import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TaskDto } from './task.dto';

@Injectable()
export class TaskService {
    private tasks: TaskDto[] = [];
    create(task: TaskDto) {
        this.tasks.push(task);
        console.log(this.tasks);
    }

    findByid(id: string): TaskDto {
        const fundTask = this.tasks.filter((t) => t.id === id);
        if (fundTask.length) {
            return fundTask[0];
        }

        throw new HttpException(
            `Task with id ${id} not found`,
            HttpStatus.NOT_FOUND,
        );
    }

    update(task: TaskDto) {
        const taskIndex = this.tasks.findIndex((t) => t.id === task.id);

        if (taskIndex >= 0) {
            this.tasks[taskIndex] = task;
            return;
        }

        throw new HttpException(
            `Task with id ${task.id} not found`,
            HttpStatus.BAD_REQUEST,
        );
    }

    remove(id: string) {
        const taskIndex = this.tasks.findIndex((t) => t.id === id);

        if (taskIndex >= 0) {
            this.tasks.splice(taskIndex, 1);
            return;
        }

        throw new HttpException(
            `Task with id ${id} not found`,
            HttpStatus.BAD_REQUEST,
        );
    }
}
