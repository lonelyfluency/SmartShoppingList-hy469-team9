export class CartItemModel {
    public _id!: string; // MongoDB generated ID
    public NameID!: number;
    public Name!: string;
    public Price!: number;
    public Amount!: number;
    public ImagePath!: string;
    public selected?: boolean;
  
    constructor(model?: any) {
      Object.assign(this, model);
    }
  }
  