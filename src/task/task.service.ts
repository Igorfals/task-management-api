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
}
