import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserDTO {
  @Field()
  fullname: string;

  @Field()
  avatarUrl: string;
}
