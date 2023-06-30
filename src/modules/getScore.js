import { endPoint } from '../config/dbConfig.js';

export const getScores = () => fetch(
  endPoint,
)
  .then((response) => response.json())
  .then((data) => data.result);
export default getScores;