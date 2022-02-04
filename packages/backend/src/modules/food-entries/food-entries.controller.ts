import { GetManyMonthlySpendingSerializer } from './serializer/monthly-spending.serializer';
import { GetManyDailyCalorieSerializer } from './serializer/daily-calorie.serializer';
import { SerializerInterceptor } from './../../interceptors/serializer.interceptor';
import { JwtAuthGuard } from './../../guards/jwt.auth-guard';
import {
  Controller,
  Get,
  Inject,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  Crud,
  CrudAuth,
  CrudController,
  CrudRequest,
  CrudRequestInterceptor,
  Override,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';
import { FoodEntryEntity, UserEntity } from '@toptal-calories-counter/database';
import { FoodEntriesService } from './food-entries.service';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
} from '@nestjs/swagger';
import { CreateFoodEntryDto } from './dto/create-food-entry.dto';
import {
  FoodEntrySerializer,
  GetManyFoodEntriesSerializer,
} from './serializer/food-entry.serializer';
import { DailyCaloriesService } from './daily-calories.service';
import { MonthlySpendingService } from './monthly-spending.service';

@Crud({
  model: {
    type: FoodEntryEntity,
  },
  query: {
    alwaysPaginate: true,
    limit: 10,
  },
  dto: {
    create: CreateFoodEntryDto,
  },
  serialize: {
    getMany: GetManyFoodEntriesSerializer,
    create: FoodEntrySerializer,
    get: FoodEntrySerializer,
  },
  routes: {
    only: ['createOneBase', 'getManyBase'],
  },
})
@CrudAuth({
  property: 'user',
  filter: (user: UserEntity) => ({
    user_id: user.id,
  }),
  persist: (user: UserEntity) => ({
    user_id: user.id,
  }),
})
@Controller('food-entries')
export class FoodEntriesController implements CrudController<FoodEntryEntity> {
  @Inject(FoodEntriesService)
  public service: FoodEntriesService;

  @Inject(DailyCaloriesService)
  public dailyCaloriesService: DailyCaloriesService;

  @Inject(MonthlySpendingService)
  public monthlySpendingService: MonthlySpendingService;

  @Override()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ operationId: 'createFoodEntry' })
  createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: CreateFoodEntryDto,
  ) {
    return this.service.createOne(req, dto);
  }

  @Override()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ operationId: 'getFoodEntries' })
  getMany(@ParsedRequest() req: CrudRequest) {
    return this.service.getMany(req);
  }

  @Override()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ operationId: 'getMonthlySpending' })
  @UseInterceptors(CrudRequestInterceptor)
  @UsePipes(new ValidationPipe({ transform: true }))
  @UseInterceptors(new SerializerInterceptor(GetManyMonthlySpendingSerializer))
  @Get('monthly-spending')
  @ApiOkResponse({
    description: 'Get user profile.',
    type: GetManyMonthlySpendingSerializer,
  })
  @ApiQuery({ name: 'page', type: 'number', required: false })
  @ApiQuery({ name: 'sort', type: 'string', isArray: true, required: false })
  @ApiQuery({ name: 'filter', type: 'string', isArray: true, required: false })
  async getMonthlySpending(@ParsedRequest() req: CrudRequest) {
    return await this.monthlySpendingService.getMany(req);
  }

  @Override()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ operationId: 'getDailyCalories' })
  @UseInterceptors(CrudRequestInterceptor)
  @UsePipes(new ValidationPipe({ transform: true }))
  @Get('daily-calories')
  @UseInterceptors(new SerializerInterceptor(GetManyDailyCalorieSerializer))
  @ApiOkResponse({
    description: 'Get user profile.',
    type: GetManyDailyCalorieSerializer,
  })
  @ApiQuery({ name: 'page', type: 'number', required: false })
  @ApiQuery({ name: 'sort', type: 'string', isArray: true, required: false })
  @ApiQuery({ name: 'filter', type: 'string', isArray: true, required: false })
  async getDailyCalories(@ParsedRequest() req: CrudRequest) {
    return this.dailyCaloriesService.getMany(req);
  }
}
