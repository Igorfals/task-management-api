import { Injectable } from '@nestjs/common';
import { UserDto } from './users.dto';
import { v4 as uuid } from 'uuid';
import { hashSync as bcryptHasSync } from 'bcrypt';

@Injectable()
export class UsersService {
    private readonly users: UserDto[] = [];

    create(newUser: UserDto) {
        newUser.id = uuid();
        newUser.password = bcryptHasSync(newUser.password, 10);
        this.users.push(newUser);
    }

    finDByUsername(username: string): UserDto | null {
        return this.users.find((user) => user.username === username);
    }
}
