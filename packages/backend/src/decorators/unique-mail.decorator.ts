import { UserEntity } from '@toptal-calories-counter/database';
import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function UniqueEmail() {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'uniqueEmail',
      target: object.constructor,
      propertyName: propertyName,
      options: {
        message: 'Email is already in use',
      },
      validator: {
          async validate(value: any, args: ValidationArguments) {
            const user = await UserEntity.findOne({ where: { email: value } });
            return user === undefined;
        },
      },
    });
  };
}