import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  name: string;

  @Prop()
  age: string;

  @Prop()
  address: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updateCreatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
