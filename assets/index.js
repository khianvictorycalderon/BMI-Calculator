document.addEventListener('DOMContentLoaded', () => {
  const calculateBtn = document.getElementById('calculateBtn');
  const result = document.getElementById('result');

  calculateBtn.addEventListener('click', () => {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (!height || !weight || height <= 0 || weight <= 0) {
      result.textContent = 'Please enter valid height and weight.';
      result.style.color = '#dc2626'; // red color
      return;
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters ** 2);
    const roundedBMI = bmi.toFixed(1);

    let category = '';

    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi < 24.9) {
      category = 'Normal weight';
    } else if (bmi < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }

    result.innerHTML = `Your BMI is <strong>${roundedBMI}</strong> (${category})`;
    result.style.color = '#0f172a';
  });
});
