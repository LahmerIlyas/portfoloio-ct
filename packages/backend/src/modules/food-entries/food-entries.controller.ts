import { JwtAuthGuard } from './../../guards/jwt.auth-guard';
import { Controller, UseGuards } from '@nestjs/common';
import {
  Crud,
  CrudAuth,
  CrudController,
  CrudRequest,
  Override,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';
import { FoodEntryEntity, UserEntity } from '@toptal-calories-counter/database';
import { FoodEntriesService } from './food-entries.service';
import { ApiBearerAuth, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { CreateFoodEntryDto } from './dto/create-food-entry.dto';
import {
  FoodEntrySerializer,
  GetManyFoodEntriesSerializer,
} from './serializer/food-entry.serializer';

@Crud({
  model: {
    type: FoodEntryEntity,
  },
  query: {
    alwaysPaginate: true,
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
  constructor(public service: FoodEntriesService) {}

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
}
