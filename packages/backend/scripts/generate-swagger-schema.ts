import { FoodEntriesModule } from './../src/modules/food-entries/food-entries.module';
import { UsersModule } from './../src/modules/users/users.module';
import { mockDatabaseConnection } from './../src/core/mockDatabaseConnection';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Test } from '@nestjs/testing';
import * as fs from 'fs';
import { FoodEntryEntity, UserEntity } from '@toptal-calories-counter/database';
import { getRepositoryToken } from '@nestjs/typeorm';
import orval from 'orval';

async function generateSwaggerSchemaFile() {
  const connection = await mockDatabaseConnection();
  const moduleFixture = await Test.createTestingModule({
    imports: [
      UsersModule,
      FoodEntriesModule,
    ],
  })
  .overrideProvider(getRepositoryToken(UserEntity))
  .useValue(connection.getRepository(UserEntity))
  .overrideProvider(getRepositoryToken(FoodEntryEntity))
  .useValue(connection.getRepository(FoodEntryEntity))
  .compile();
  const app = moduleFixture.createNestApplication();

  const config = new DocumentBuilder()
    .setTitle('Toptal Calories Tracker App')
    .setDescription('The Toptal Calories Tracker App API description')
    .setVersion('1.0')
    .addTag('calories-tracker')
    .addBearerAuth()
    .build();
    const document = SwaggerModule.createDocument(app, config);
  fs.writeFileSync("./swagger-spec.json", JSON.stringify(document));
  
  orval('./orval.mobile.config.js');

}
generateSwaggerSchemaFile();
