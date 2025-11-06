const btnEl = document.querySelector('#btn');

btnEl.addEventListener('click', (e) => {
  e.preventDefault();

  const inputValue = document.querySelector('#text').value;
  const delay = parseInt(inputValue.split(' - ')[1]); 

  const output = document.querySelector('#output');

  if (isNaN(delay)) {
    output.textContent = 'Invalid input!';
    return;
  }

  setTimeout(() => {
    const p = document.createElement('p');
    p.textContent = `Test - ${delay}`;
    output.appendChild(p);
  }, delay * 1000);
});