import './styles.css';
import { submitScore } from './addScore.js';
import populateScoreTable from './populateScoreTable.js';

document.addEventListener('DOMContentLoaded', () => {
  submitScore();
  populateScoreTable();
});
