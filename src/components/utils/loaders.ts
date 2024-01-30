import { queryClient } from "../../App";
import { getFeatureItems, getTeams, getTestimonials, getWhyVault } from "./api";

export async function teamLoader() {
  return queryClient.fetchQuery({
    queryKey: ["teams"],
    queryFn: getTeams,
  });
}
export async function testimonialsLoader() {
  return queryClient.fetchQuery({
    queryKey: ["testimonials"],
    queryFn: getTestimonials,
  });
}
export async function whyVaultLoader() {
  return queryClient.fetchQuery({
    queryKey: ["whyVault"],
    queryFn: getWhyVault,
  });
}
export async function featureLoader() {
  return queryClient.fetchQuery({
    queryKey: ["featureItems"],
    queryFn: getFeatureItems,
  });
}
