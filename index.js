// Function to save health data to local storage
const saveHealthData = (weight, heartRate, steps) => {
    const healthData = { weight, heartRate, steps };
    localStorage.setItem('healthData', JSON.stringify(healthData));
  };
  
  // Function to load and display health data from local storage
  const loadHealthData = () => {
    const storedData = localStorage.getItem('healthData');
    if (storedData) {
      const { weight, heartRate, steps } = JSON.parse(storedData);
      const results = `
        <h2 class="text-xl font-semibold mb-4">Health Data</h2>
        <p class="text-gray-300">Weight: ${weight} kg</p>
        <p class="text-gray-300">Heart Rate: ${heartRate} bpm</p>
        <p class="text-gray-300">Steps Walked: ${steps}</p>
      `;
      document.getElementById('results').innerHTML = results;
    }
  };
  
  // Event listener for form submission
  document.getElementById('healthForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const weight = document.getElementById('weight').value;
    const heartRate = document.getElementById('heartRate').value;
    const steps = document.getElementById('steps').value;
  
    saveHealthData(weight, heartRate, steps);
  
    const results = `
      <h2 class="text-xl font-semibold mb-4">Health Data</h2>
      <p class="text-gray-300">Weight: ${weight} kg</p>
      <p class="text-gray-300">Heart Rate: ${heartRate} bpm</p>
      <p class="text-gray-300">Steps Walked: ${steps}</p>
    `;
  
    document.getElementById('results').innerHTML = results;
  });
  
  // Load health data when the page is loaded
  window.addEventListener('load', loadHealthData);
  