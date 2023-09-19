import supabase from "./supabase";

export async function getTestimonials() {
  let { data: testimonialItems, error } = await supabase
    .from("testimonialItems")
    .select("*");

  if (error) {
    console.error(error);
    throw new Error("Could not load testimonial items.");
  }

  return testimonialItems;
}
