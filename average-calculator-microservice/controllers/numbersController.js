const axios = require("axios");

const API_URLS = {
  p: "http://20.244.56.144/evaluation-service/primes",
  f: "http://20.244.56.144/evaluation-service/fibo",
  e: "http://20.244.56.144/evaluation-service/even",
  r: "http://20.244.56.144/evaluation-service/rand",
};

const WINDOW_SIZE = 10;
let numberWindow = []; 

exports.getNumbers = async (req, res) => {
  try {
    const numberId = req.params.numberid;

   
    if (!API_URLS[numberId]) {
      return res.status(400).json({ error: "Invalid number ID" });
    }

    console.log(`Fetching numbers from: ${API_URLS[numberId]}`);

    
    const response = await axios.get(API_URLS[numberId], {
      headers: { Authorization: `Bearer ${req.token}` }, 
      timeout: 1000, 
    });

    
    console.log("API Response:", response.data);

    if (!response.data.numbers || !Array.isArray(response.data.numbers)) {
      return res.status(500).json({ error: "Invalid response from external API" });
    }

 
    const windowPrevState = [...numberWindow];

   
    response.data.numbers.forEach(num => {
      if (!numberWindow.includes(num)) {
        numberWindow.push(num);
      }
    });

  
    if (numberWindow.length > WINDOW_SIZE) {
      numberWindow = numberWindow.slice(numberWindow.length - WINDOW_SIZE);
    }

    const avg = numberWindow.length
      ? (numberWindow.reduce((sum, num) => sum + num, 0) / numberWindow.length).toFixed(2)
      : 0;


    res.json({
      windowPrevState,
      windowCurrState: numberWindow,
      numbers: response.data.numbers,
      avg: parseFloat(avg), 
    });

  } catch (error) {
    console.error("Error fetching numbers:", error.message);

    if (error.response) {
      console.error("API Error Response:", error.response.data);
      return res.status(error.response.status).json({ error: error.response.data });
    } else if (error.code === "ECONNABORTED") {
      return res.status(500).json({ error: "Request timed out" });
    } else {
      return res.status(500).json({ error: "Failed to fetch numbers" });
    }
  }
};
