export const getScores = () => fetch(
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lWMo5174rgz1dWg1Q9yt/scores',
)
  .then((response) => response.json())
  .then((data) => data.result)
  .catch((error) => {
    console.error('Error:', error);
  });
export default getScores;