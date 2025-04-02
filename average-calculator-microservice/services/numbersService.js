const axios = require("axios");
const { API_ENDPOINTS, WINDOW_SIZE } = require("../utils/constants");

// Store numbers globally
let numberWindow = [];

// Function to fetch numbers from API
exports.fetchAndUpdateNumbers = async (numberId, token) => {
  const prevState = [...numberWindow];

  try {
    const response = await axios.get(API_ENDPOINTS[numberId], {
      timeout: 500,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const newNumbers = response.data.numbers || [];

    // Store unique numbers while maintaining window size
    newNumbers.forEach((num) => {
      if (!numberWindow.includes(num)) {
        numberWindow.push(num);
        if (numberWindow.length > WINDOW_SIZE) numberWindow.shift();
      }
    });

    const average = numberWindow.length > 0 ? numberWindow.reduce((sum, num) => sum + num, 0) / numberWindow.length : 0;

    return { prevState, newNumbers, updatedWindow: numberWindow, average };
  } catch (error) {
    console.error("❌ API Error:", error.response?.data || error.message);
    return { prevState, newNumbers: [], updatedWindow: numberWindow, average: 0 };
  }
};
