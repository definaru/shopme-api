import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { join } from 'path'
import { AppModule } from './app.module'
import { HttpExceptionFilter } from './filter/http-exception.filter';


async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });

    app.useStaticAssets(join(__dirname, '..', 'public'));
    app.setBaseViewsDir(join(__dirname, '..', 'views'));
    app.useGlobalFilters(new HttpExceptionFilter());
    app.setViewEngine('hbs');
    await app.listen(3000);
}
bootstrap();