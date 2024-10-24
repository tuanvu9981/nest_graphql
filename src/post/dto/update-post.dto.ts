import { CreatePostDTO } from './create-post.dto';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePostDTO extends PartialType(CreatePostDTO) {}
