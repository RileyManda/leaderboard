export const getScores = () => fetch(
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dumG1PB40BpIOBdmh4JI/scores',
)
  .then((response) => response.json())
  .then((data) => data.result);
export default getScores;