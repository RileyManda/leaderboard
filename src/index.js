import './styles.css';
import submitScore from './addScore.js';
import populateScoreTable from './populateScoreTable.js';
import refreshTable from './refresh.js';

document.addEventListener('DOMContentLoaded', () => {
  submitScore();
  populateScoreTable();

  const refreshButton = document.querySelector('.refresh-button');
  refreshButton.addEventListener('click', () => {
    refreshTable();
  });
});