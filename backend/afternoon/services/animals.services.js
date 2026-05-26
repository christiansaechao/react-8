import { supabase } from "../utils/client.js";

// object relational mapper (ORM)
// database
// drizzle, sequilize, prisma

// supabase (database + ORM + s3 bucket images + authentication)
// 3 active project

export const dbGetAnimal = async () => {
  const { data, error } = await supabase.from("animals").select();

  return { data, error };
};

export const dbGetSpecificAnimal = async (id) => {
  const { data, error } = await supabase.from("animals").select().eq("id", id);
  return { data, error };
};

export const dbCreateAnimals = async (body) => {
  const { data, error } = await supabase
    .from("animals")
    .insert({ type: body.type, name: body.name })
    .select();

  return { data, error };
};

export const dbUpdateSpecificAnimal = async (id, body) => {
  const { data, error } = await supabase
    .from("animals")
    .update({ type: body.type, name: body.name })
    .eq("id", id)
    .select();
  return { data, error };
};

export const dbDeleteAnimal = async (id) => {
  const { error } = await supabase
  .from("animals")
  .delete()
  .eq("id", id);
  
  return error;
}