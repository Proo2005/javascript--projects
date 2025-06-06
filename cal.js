document.addEventListener('DOMContentLoaded', () => {
  let buttons = document.querySelectorAll('.button');
  let display = document.querySelector('.display');
  let expression = '';

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      let value = button.textContent;

      // Handle special buttons
      if (value === 'CE') {
        expression = '';
      } else if (value === '←' || value === '⌫') {
        expression = expression.slice(0, -1);
      } else if (value === '=') {
        try {
          expression = eval(expression).toString();
        } catch {
          expression = 'Error';
        }
      } else {
        expression += value;
      }

      display.value = expression;
      console.log('Current:', expression);
    });
  });
});
