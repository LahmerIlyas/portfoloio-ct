import orval from 'orval';

async function generateSwaggerSchemaFile() {
  /*const connection = await mockDatabaseConnection();
  const moduleFixture = await Test.createTestingModule({
    imports: [UsersModule, FoodEntriesModule],
  })
    .overrideProvider(getRepositoryToken(UserEntity))
    .useValue(connection.getRepository(UserEntity))
    .overrideProvider(getRepositoryToken(DailyCalories))
    .useValue(connection.getRepository(DailyCalories))
    .overrideProvider(getRepositoryToken(MonthlySpending))
    .useValue(connection.getRepository(MonthlySpending))
    .overrideProvider(getRepositoryToken(FoodEntryEntity))
    .useValue(connection.getRepository(FoodEntryEntity))
    .compile();
  const app = moduleFixture.createNestApplication();

  const config = new DocumentBuilder()
    .setTitle('portfolio Calories Tracker App')
    .setDescription('The portfolio Calories Tracker App API description')
    .setVersion('1.0')
    .addTag('calories-tracker')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  fs.writeFileSync('./swagger-spec.json', JSON.stringify(document));
*/
  orval('./orval.mobile.config.js');
}
generateSwaggerSchemaFile();
