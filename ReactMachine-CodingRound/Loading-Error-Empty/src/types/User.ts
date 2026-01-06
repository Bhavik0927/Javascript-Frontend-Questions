export type User = {
  id: number;
  title: string;
  description: string;
  category: string;
};

export type ProductResponse = {
  products: User[];
  total: number;
  skip: number;
  limit: number;
};