import { dbApi } from './dbConfig.js';

export const getScores = () => fetch(
  dbApi,
)
  .then((response) => response.json())
  .then((data) => data.result);
export default getScores;