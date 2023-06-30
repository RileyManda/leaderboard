import { dbApi } from './dbConfig.js';

const submitScore = () => {
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
      dbApi,
      requestOptions,
    )
      .then((response) => response.json())
      .then(() => {
        userNameInput.value = '';
        scoreInput.value = '';
      });
  });
};
export default submitScore;