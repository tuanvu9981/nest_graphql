import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = Document<User>

@Schema()
export class User {
    @Prop({ required: true })
    fullname: string;

    @Prop()
    avatarUrl: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
