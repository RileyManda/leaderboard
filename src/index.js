import './styles.css';
import submitScore from './modules/addScore.js';
import populateScoreTable from './modules/populateScoreTable.js';
import refreshTable from './modules/refresh.js';

document.addEventListener('DOMContentLoaded', () => {
  submitScore();
  populateScoreTable();

  const refreshButton = document.querySelector('.refresh-button');
  refreshButton.addEventListener('click', () => {
    refreshTable();
  });
});