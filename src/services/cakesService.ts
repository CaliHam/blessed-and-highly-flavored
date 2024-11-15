import { Category, Cake } from "../types/cakeTypes";
import { supabase } from '../../supabaseClient';

// Fetch all categories
export const fetchCategories = async (): Promise<Category[]> => {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name');

  if (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }

  return data || [];
};

// Fetch all cakes
export const fetchCakes = async (): Promise<Cake[]> => {
  const { data, error } = await supabase
    .from('cakes')
    .select('*');

  if (error) {
    console.error('Error fetching cakes:', error);
    throw error;
  }

  return data || [];
};

// Fetch cakes by category
export const fetchCakesByCategory = async (categoryId: number): Promise<Cake[]> => {
  const { data, error } = await supabase
    .from('cakes')
    .select('*')
    .eq('category_id', categoryId);

  if (error) {
    console.error(`Error fetching cakes for category ${categoryId}:`, error);
    throw error;
  }

  return data || [];
};
