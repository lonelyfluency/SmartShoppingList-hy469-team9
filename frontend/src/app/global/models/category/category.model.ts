export interface Product {
  Name: string;
  NameId: number;
  ClassName: string;
  Price: number;
  ClassId: number;
  ImagePath: string;
  ProductDescriptionPath: string;
}

export interface SubCategory {
  name: string;
  products: Product[];
}

export interface MainCategory {
  name: string;
  subcategories: SubCategory[];
}
