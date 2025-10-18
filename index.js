const express = require('express');
const axios = require('axios'); 
const cors = require('cors');

const app = express();
app.use(cors()); 

app.get('/me', async (req, res) => {
  try {
    
    const catResponse = await axios.get('https://catfact.ninja/fact', { timeout: 5000 });
    const catFact = catResponse.data.fact;

    
    const response = {
      status: 'success',
      user: {
        email: 'wazirolamide22@gmail.com',
        name: 'Olamide Wazir Akinwande',
        stack: 'Node.js/Express'
      },
      timestamp: new Date().toISOString(), 
      fact: catFact
    };

    
    res.status(200).json(response);

  } catch (error) {
    console.error('Error fetching cat fact:', error.message);

    // If something fails
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch cat fact. Please try again later.'
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
