import supabase from "./supabase";

export async function getFeatures() {
  let { data: featureItems, error } = await supabase
    .from("featureItems")
    .select("*");

  if (error) {
    console.error(error);
    throw new Error("Could not load Feature Items!");
  }

  return featureItems;
}
