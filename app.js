// Select elements
const clickButton = document.getElementById('click-button');
const hoverBox = document.getElementById('hover-box');
const form = document.getElementById('sample-form');
const textInput = document.getElementById('text-input');

// Counters
let clickCount = 0;
let hoverCount = 0;
let formCount = 0;
let keypressCount = 0;

// Update UI
const updateCounts = () => {
  document.getElementById('click-count').innerText = clickCount;
  document.getElementById('hover-count').innerText = hoverCount;
  document.getElementById('form-count').innerText = formCount;
  document.getElementById('keypress-count').innerText = keypressCount;
};

// Event Listeners
clickButton.addEventListener('click', () => {
  clickCount++;
  updateCounts();
});

hoverBox.addEventListener('mouseover', () => {
  hoverCount++;
  updateCounts();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formCount++;
  updateCounts();
});

textInput.addEventListener('keypress', () => {
  keypressCount++;
  updateCounts();
});

// Chart.js Visualization
const ctx = document.getElementById('chart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Clicks', 'Hovers', 'Form Submissions', 'Keypresses'],
    datasets: [{
      label: 'Event Counts',
      data: [clickCount, hoverCount, formCount, keypressCount],
      backgroundColor: ['#0078d7', '#ffcc00', '#00cc88', '#cc00ff']
    }]
  }
});

// Update chart dynamically
setInterval(() => {
  chart.data.datasets[0].data = [clickCount, hoverCount, formCount, keypressCount];
  chart.update();
}, 1000);
