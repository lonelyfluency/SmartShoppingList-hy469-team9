import { Document, Schema, Model, model } from 'mongoose';
import { DefaultSchemaOptions } from '../../../models/shared';

export interface IInventoryItem extends Document {
  NameID: number;
  Name: string;
  Price: number;
  Amount: number;
  ImagePath: string;
  selected: boolean;
}

const inventoryItemSchema = new Schema(
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

export const InventoryModel: Model<IInventoryItem> = model<IInventoryItem>('InventoryItem', inventoryItemSchema, 'Inventory');
