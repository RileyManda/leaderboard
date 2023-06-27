export const getScores = () => fetch(
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/5DOHI6Jz0kZNClOyq4yg/scores',
)
  .then((response) => response.json())
  .then((data) => data.result);
export default getScores;