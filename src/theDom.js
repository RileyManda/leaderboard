// Create container element
const createContainer = () => {
  const container = document.createElement('div');
  container.classList.add('container');
  return container;
};

// Create first flex item
const createFlexItem1 = () => {
  const flexItem1 = document.createElement('div');
  flexItem1.classList.add('flex-items');
  return flexItem1;
};

// Create leaderboard element
const createLeaderboard = () => {
  const leaderboard = document.createElement('div');
  leaderboard.classList.add('leaderboard');
  return leaderboard;
};

// Create leaderboard title element
const createLeaderboardTitle = () => {
  const leaderboardTitle = document.createElement('div');
  leaderboardTitle.classList.add('leaderboard-title');
  return leaderboardTitle;
};

// Create h1 element for leaderboard title
const createH1 = () => {
  const h1 = document.createElement('h1');
  h1.textContent = 'Leaderboard!';
  return h1;
};

// Create recent scores element
const createRecentScores = () => {
  const recentScores = document.createElement('div');
  recentScores.classList.add('recent-scores');
  return recentScores;
};

// Create h3 element for recent scores title
const createH3 = () => {
  const h3 = document.createElement('h3');
  h3.textContent = 'Recent scores';
  return h3;
};

// Create refresh button element
const createRefreshButton = () => {
  const refreshButton = document.createElement('button');
  refreshButton.classList.add('refresh-button');
  refreshButton.textContent = 'Refresh';
  return refreshButton;
};

// Create score table element
export const createScoreTable = () => {
  const scoreTable = document.createElement('div');
  scoreTable.classList.add('score-table');
  return scoreTable;
};

// Create table element
export const createTable = () => {
  const table = document.createElement('table');
  return table;
};

// Create table row and cell
const createScoreRow = (score) => {
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  td.textContent = `Name: ${score}`;
  tr.appendChild(td);
  return tr;
};

// Create second flex item
const createFlexItem2 = () => {
  const flexItem2 = document.createElement('div');
  flexItem2.classList.add('flex-items');
  return flexItem2;
};

// Create form container element
const createFormContainer = () => {
  const formContainer = document.createElement('div');
  formContainer.classList.add('form-container');
  return formContainer;
};

// Create score form element
const createScoreForm = () => {
  const scoreForm = document.createElement('div');
  scoreForm.classList.add('score-form');
  return scoreForm;
};

// Create form title element
const createFormTitle = () => {
  const formTitle = document.createElement('div');
  formTitle.classList.add('form-title');
  return formTitle;
};

// Create h3 element for form title
const createH3Form = () => {
  const h3Form = document.createElement('h3');
  h3Form.textContent = 'Add your score';
  return h3Form;
};

// Create form element
const createForm = () => {
  const form = document.createElement('form');
  form.action = 'post';
  form.method = 'submit';
  form.classList.add('form-fields');
  return form;
};

// Create form input element
const createFormInput = () => {
  const formInput = document.createElement('div');
  formInput.classList.add('form-input');
  return formInput;
};

// Create input element for name
const createInputName = () => {
  const inputName = document.createElement('input');
  inputName.type = 'text';
  inputName.placeholder = 'Your name';
  return inputName;
};

// Create input element for score
const createInputScore = () => {
  const inputScore = document.createElement('input');
  inputScore.type = 'text';
  inputScore.placeholder = 'Your score';
  return inputScore;
};

// Main function to build the DOM structure
export const buildDOM = () => {
  const container = createContainer();
  const flexItem1 = createFlexItem1();
  const leaderboard = createLeaderboard();
  const leaderboardTitle = createLeaderboardTitle();
  const h1 = createH1();
  const recentScores = createRecentScores();
  const h3 = createH3();
  const refreshButton = createRefreshButton();
  const scoreTable = createScoreTable();
  const table = createTable();

  //  display data from score array
  const scores = [100, 20, 50, 78, 125, 77, 42];

  scores.forEach((score) => {
    const scoreRow = createScoreRow(score);
    table.appendChild(scoreRow);
  });

  scoreTable.appendChild(table);
  leaderboardTitle.appendChild(h1);
  recentScores.appendChild(h3);
  recentScores.appendChild(refreshButton);
  leaderboard.appendChild(leaderboardTitle);
  leaderboard.appendChild(recentScores);
  leaderboard.appendChild(scoreTable);
  flexItem1.appendChild(leaderboard);
  container.appendChild(flexItem1);

  const flexItem2 = createFlexItem2();
  const formContainer = createFormContainer();
  const scoreForm = createScoreForm();
  const formTitle = createFormTitle();
  const h3Form = createH3Form();
  const form = createForm();
  const formInput = createFormInput();
  const inputName = createInputName();
  const inputScore = createInputScore();

  formInput.appendChild(inputName);
  formInput.appendChild(document.createElement('br'));
  formInput.appendChild(document.createElement('br'));
  formInput.appendChild(inputScore);
  formInput.appendChild(document.createElement('br'));
  formInput.appendChild(document.createElement('br'));
  form.appendChild(formInput);
  formTitle.appendChild(h3Form);
  scoreForm.appendChild(formTitle);
  scoreForm.appendChild(form);
  formContainer.appendChild(scoreForm);
  flexItem2.appendChild(formContainer);
  container.appendChild(flexItem2);

  // Append the container to the document body
  document.body.appendChild(container);
};

// Call the main function to build the DOM structure
// buildDOM();
