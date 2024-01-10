export class InventoryItemModel {
    public _id!: string; // MongoDB generated ID
    public NameID!: number;
    public Name!: string;
    public Price!: number;
    public Amount!: number;
    public ImagePath!: string;
    public selected?: boolean;
    public expire!: number;
  
    constructor(model?: any) {
      Object.assign(this, model);
    }
  }
  