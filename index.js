const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.listen(3000, () => {
  console.log('Server started on port 3000!');
})
