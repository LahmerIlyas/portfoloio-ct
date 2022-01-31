import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from '../src/app.module';
import * as fs from 'fs';

async function generateSwaggerSchemaFile() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Toptal Calories Tracker App')
    .setDescription('The Toptal Calories Tracker App API description')
    .setVersion('1.0')
    .addTag('calories-tracker')
    .addBearerAuth()
    .build();
    const document = SwaggerModule.createDocument(app, config);
    fs.writeFileSync("./swagger-spec.json", JSON.stringify(document));

}
generateSwaggerSchemaFile();
