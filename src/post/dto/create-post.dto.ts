import { InputType, ID, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostDTO {
  @Field(() => ID, { description: 'user id of whom owns the post' })
  userId: string;

  @Field()
  imageUrl: string;

  @Field()
  text: string;
}
