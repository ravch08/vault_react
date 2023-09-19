import supabase from "./supabase";

export async function getWhyItems() {
  let { data: whyItems, error } = await supabase.from("whyItems").select("*");

  if (error) {
    console.error(error);
    throw new Error("Could not load Why Items!");
  }

  return whyItems;
}
