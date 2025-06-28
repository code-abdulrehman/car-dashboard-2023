const ctx = document.getElementById('totaSales');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: '#Sales',
      data: [4003, 939, 2193, 1542, 7082, 103,3252, 2139, 1823, 3012, 2782, 6203],
      backgroundColor: [
        '#626262dc',
        '#000000ff',
        '#787878ff',
        '#000000a1', 
        '#000000ff',
        '#787878ff',
        '#000000a1', 
        '#000000ff',
        '#787878ff', 
        '#000000a1', 
        '#000000ff',
        '#787878ff',
        '#000000a1'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const ctx1 = document.getElementById('party');

new Chart(ctx1, {
  type: 'doughnut',
  data: {
    
    datasets: [{
      label: '',
      data: [4003, 3039, 2193,],
      backgroundColor: [
        '#000000ff',
        '#6c6c6cff',
        '#abababff'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
});