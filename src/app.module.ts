import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserController } from './user.controller'
import { IndexController } from './index.controller'
import { AppService } from './user.service'

@Module({
    imports: [
        // TypeOrmModule.forRoot({
        //     type: 'postgres',
        //     host: 'localhost',
        //     port: 5432,
        //     username: 'postgres',
        //     password: 'wshyFFh67hAc',
        //     database: 'postgres',
        //     logging: true,
        //     synchronize: true,
        // })
    ],
    controllers: [UserController, IndexController],
    providers: [AppService],
})
export class AppModule {}