import { getScores } from './getScore.js';
import populateScoreTable from './populateScoreTable.js';

export const clearScoreTable = () => {
  const scoreTable = document.getElementById('score-table');
  while (scoreTable.firstChild) {
    scoreTable.firstChild.remove();
  }
};

const refreshTable = () => {
  getScores()
    .then((data) => {
      const scores = data.result;
      clearScoreTable();
      populateScoreTable(scores);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

export default refreshTable;
