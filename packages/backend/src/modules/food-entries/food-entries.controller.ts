import { JwtAuthGuard } from './../../guards/jwt.auth-guard';
import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudAuth, CrudController, CrudRequest, Override, ParsedBody, ParsedRequest } from '@nestjsx/crud';
import { FoodEntryEntity, UserEntity } from '@toptal-calories-counter/database';
import { FoodEntriesService } from './food-entries.service';
import { ApiBearerAuth } from '@nestjs/swagger';

@Crud({
  model: {
    type: FoodEntryEntity,
    },
    query: {
        alwaysPaginate: true,
    },
    routes: {
        only: ['createOneBase', 'getManyBase']
    }
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
  constructor(public service: FoodEntriesService) { }
  
  @Override()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  createOne(@ParsedRequest() req: CrudRequest, @ParsedBody() dto: any) {
    return this.service.createOne(req, dto);
  }

  @Override()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  getMany(@ParsedRequest() req: CrudRequest) {
    return this.service.getMany(req);
  }
}