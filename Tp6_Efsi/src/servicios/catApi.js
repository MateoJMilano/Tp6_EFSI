import axios from "axios";

const URL =
  "https://api.thecatapi.com/v1/images/search?limit=10";

export const getCats = async () => {
  try {
    const response = await axios.get(URL);

    return response.data;
  } catch (error) {
    console.log(
      "Error obteniendo imágenes",
      error
    );

    return [];
  }
};