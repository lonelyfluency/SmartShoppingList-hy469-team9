import { Document, Schema, Model, model } from 'mongoose';
import { DefaultSchemaOptions } from '../../../models/shared';

export interface ICartItem extends Document {
  NameID: number;
  Name: string;
  Price: number;
  Amount: number;
  ImagePath: string;
  selected: boolean;
}

const cartItemSchema = new Schema(
  {
    NameID: { type: Number, required: true },
    Name: { type: String, required: true },
    Price: { type: String, required: true },
    Amount: { type: Number, required: true },
    ImagePath: { type: String, required: true },
    selected: {type: Boolean, required: true}
  },
  { ...DefaultSchemaOptions }
);

export const CartModel: Model<ICartItem> = model<ICartItem>('CartItem', cartItemSchema, 'Cart');
