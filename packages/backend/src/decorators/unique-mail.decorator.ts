import { UserEntity } from '@portfolio-calories-counter/database';
import { registerDecorator, ValidationArguments } from 'class-validator';

export function UniqueEmail() {
  return function (object: unknown, propertyName: string) {
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
