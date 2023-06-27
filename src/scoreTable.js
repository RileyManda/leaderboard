import scores from './data.js';

const populateScoreTable = () => {
  const scoreTable = document.getElementById('score-table');

  scores.forEach((score) => {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.textContent = `Name: ${score}`;
    row.appendChild(cell);
    scoreTable.appendChild(row);
  });
};

export default populateScoreTable;
