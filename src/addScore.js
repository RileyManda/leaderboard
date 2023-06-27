export const submitScore = () => {
  const scoreForm = document.getElementById('scoreForm');
  scoreForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const userNameInput = document.getElementById('userNameInput');
    const scoreInput = document.getElementById('scoreInput');

    const user = userNameInput.value;
    const score = parseInt(scoreInput.value, 10);

    const data = {
      user,
      score,
    };
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lWMo5174rgz1dWg1Q9yt/scores',
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
};
export default submitScore;