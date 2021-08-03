import axios from "axios";

const heroAPI = axios.create({
  baseURL: `https://superheroapi.com/api.php/${process.env.REACT_APP_HEROES_PUBLIC_KEY}`
});

export const fetchCharacter = async (id) => {
  const results = await heroAPI.get(`/${id}`, {});
  return results.data;
};

export const searchCharacters = async (name) => {
  const results = await heroAPI.get(`/search/${name}`, {});
  return results.data;
};
