import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type PostDocument = Document<Post>

@Schema()
export class Post {
    @Prop({ type: Types.ObjectId, ref: "User", required: true })
    userId: Types.ObjectId;

    @Prop()
    imageUrl: string;

    @Prop()
    text: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
