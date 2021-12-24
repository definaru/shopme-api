import { HttpException, Controller, Get, HttpStatus, Render, UseFilters } from '@nestjs/common'
import { HttpExceptionFilter } from './filter/http-exception.filter'

@Controller()
export class IndexController {

    @Get()
    @Render('index')
    root() {
        return { 
            warning: 'Пожалуйста',
            header: 'Перейдите в документацию "ShopMe"',
            message: 'Здесь ловить нечего!' 
        }
    }

    @Get('/*')
    @UseFilters(new HttpExceptionFilter())
    @Render('error')
    error() {
        return {
            data: new Date().toISOString(),
            status: HttpStatus.NOT_FOUND,
            error: 'Нет такой страницы'
        }
    }

}