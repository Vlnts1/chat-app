import axios from 'axios';
import { Joke } from '../types/Types';

export const getRandomJoke = async (): Promise<string> => {
  const response = await axios.get<Joke>('https://api.chucknorris.io/jokes/random');
  return response.data.value;
};
