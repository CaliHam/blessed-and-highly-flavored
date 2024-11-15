export interface Cake {
  id: number;
  name: string;
  category_id: number;
  image_url: string;
  description: string | null;
}

export interface Category {
  id: number;
  name: string;
  parent_id: number|null;
}