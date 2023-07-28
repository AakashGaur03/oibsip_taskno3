function Result() {
    const degreesInput = document.getElementById('input');
    const selectedOption = document.querySelector('select').value;
    const inputValue = parseInt(degreesInput.value);
  
  
    let result;
    if (selectedOption === 'Cel') {
      result = (inputValue * 9/5) + 32; // Convert Celsius to Fahrenheit
    } else {
      result = (inputValue - 32) * 5/9; // Convert Fahrenheit to Celsius
    }
  
    document.getElementById('output').textContent = result.toFixed(2);
  }
  
  function go()
  {
    Result()
  }