export type ProductWithRelations = {
  id: number;
  name: string;
  pictureURL: string;
  description: string;
  price: number;
  category: string;
  ratings: { value: number }[];
};