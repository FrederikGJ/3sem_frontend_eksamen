const BASE_URL = "http://localhost:7070/api/v1";

const handleHttpErrors = (res) => {
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export const getAllJewelry = async () => {
  const response = await fetch(`${BASE_URL}/jewelry`);
  const data = await handleHttpErrors(response);
  return data;
};

export const getNecklaces = async () => {
  const response = await fetch(`${BASE_URL}/jewelry/necklaces`);
  const data = await handleHttpErrors(response);
  return data;
};
