import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
    UseGuards,
} from '@nestjs/common';
import { FindAllParameters, TaskDto } from './task.dto';
import { TaskService } from './task.service';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Post()
    create(@Body() task: TaskDto) {
        this.taskService.create(task);
    }

    @Get('/:id')
    findById(@Param('id') id: string): TaskDto {
        return this.taskService.findByid(id);
    }

    @Get()
    async findAll(@Query() params: FindAllParameters): Promise<TaskDto[]> {
        return await this.taskService.findAll(params);
    }

    @Put()
    update(@Body() task: TaskDto) {
        console.log(task);
        this.taskService.update(task);
    }

    @Delete('/:id')
    remove(@Param('id') id: string) {
        return this.taskService.remove(id);
    }
}
