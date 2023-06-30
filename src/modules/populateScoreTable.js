import { getScores } from './getScore.js';

const populateScoreTable = () => {
  getScores().then((scores) => {
    const scoreTable = document.getElementById('score-table');

    if (Array.isArray(scores)) {
      scores.forEach((score) => {
        const row = document.createElement('tr');
        const userCell = document.createElement('td');
        const scoreCell = document.createElement('td');

        userCell.textContent = score.user;
        scoreCell.textContent = score.score;

        row.appendChild(userCell);
        row.appendChild(scoreCell);

        scoreTable.appendChild(row);
      });
    }
  });
};

export default populateScoreTable;
