import './styles.css';
import populateScoreTable from './scoreTable.js';
import { submitScore } from './addScore.js';

document.addEventListener('DOMContentLoaded', () => {
  populateScoreTable();
  submitScore();
});
