import { users } from './users'
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common'
import { AppService } from './user.service'


@Controller('user')
export class UserController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getUsers(): any {
        return this.appService.getUsers();
    }

    @Get(':id')
    getById(@Param('id', ParseIntPipe) id: number) {
        return users.find(user => user.id === id);
    }
}
