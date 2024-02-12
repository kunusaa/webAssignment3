// historyHandler.js
async function fetchHistory() {
  try {
    const response = await fetch('/history'); // Assuming your backend server is running on the same host

    if (!response.ok) {
      throw new Error('Error fetching history');
    }

    const historyData = await response.json();
    return historyData;
  } catch (error) {
    console.error('Error fetching history:', error);
    return null;
  }
}

// Function to render history data on the webpage
async function renderHistory() {
  const historyContainer = document.getElementById('history-content');

  // Fetch history data
  const historyData = await fetchHistory();

  // If history data is fetched successfully, render it
  if (historyData) {
    historyData.forEach(historyItem => {
      const historyItemElement = document.createElement('div');
      historyItemElement.textContent = historyItem.query; // Assuming each history item has a "query" property
      historyItemElement.classList.add('history-item'); // Add the "history-item" class
      historyContainer.appendChild(historyItemElement);
    });
  } else {
    // Handle error case
    historyContainer.textContent = 'Failed to fetch history data.';
  }
}

// Call the renderHistory function when the script is loaded
document.addEventListener('DOMContentLoaded', renderHistory);
