import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { UserEntity } from '@toptal-calories-counter/database';
import { UsersService } from './users.service';

@Crud({
    query: {
        alwaysPaginate: true
    },
  model: {
    type: UserEntity,
    },
    routes: {
        exclude: ['createManyBase']
    },
})
@Controller('users')
export class UsersController implements CrudController<UserEntity> {
    constructor(public service: UsersService) { }
}