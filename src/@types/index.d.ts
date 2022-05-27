export interface IItem {
  id: string;
  name: string;
  description: string;
  variants: [IVariant];
  imageUrls: [
    {
      url: string;
    }
  ];
}

export interface IVariant {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface IErrorMessage {
  error: string;
}
