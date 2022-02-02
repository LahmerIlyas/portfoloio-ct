import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { winstonConfig } from './core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: winstonConfig,
  });

  const config = new DocumentBuilder()
    .setTitle('Toptal Calories Tracker App')
    .setDescription('The Toptal Calories Tracker App API description')
    .setVersion('1.0')
    .addTag('calories-tracker')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger-ui', app, document);
  app.enableCors();
  app.use((req, res, next) => {
    setTimeout(next, Math.floor(Math.random() * 2000 + 100));
  });
  await app.listen(3000);
}
bootstrap();
