export async function getTeams() {
  try {
    const response = await fetch(`http://localhost:3000/teamItems`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Couldn't fetch team items");
  }
}

export async function getTestimonials() {
  try {
    const response = await fetch(`http://localhost:3000/testimonialItems`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Couldn't fetch team items");
  }
}

export async function getWhyVault() {
  try {
    const response = await fetch(`http://localhost:3000/whyVault`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Couldn't fetch team items");
  }
}

export async function getFeatureItems() {
  try {
    const response = await fetch(`http://localhost:3000/featureItems`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Couldn't fetch team items");
  }
}
