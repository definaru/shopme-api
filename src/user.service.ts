import { Injectable } from '@nestjs/common'
import { users } from './users'

@Injectable()
export class AppService {
    getUsers(): any {
        return { users };
    }
}
