import { Document, Schema, Model, model } from 'mongoose';
import { DefaultSchemaOptions } from '../../../models/shared';

export interface ICartItem extends Document {
  productId: string;
  productName: string;
  productPrice: number;
  quantity: number;
  productImgUrl: string;
  selected: boolean;
}

const cartItemSchema = new Schema(
  {
    productId: { type: String, required: true },
    productName: { type: Number, required: true },
    productPrice: { type: String, required: true },
    quantity: { type: Number, required: true },
    productImgUrl: { type: String, required: true },
    selected: {type: Boolean, required: true}
  },
  { ...DefaultSchemaOptions }
);

export const CartModel: Model<ICartItem> = model<ICartItem>('CartItem', cartItemSchema, 'Cart');
