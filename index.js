const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

var restaurants = [
  { id: 0, name: 'Woodshill' },
  { id: 1, name: 'Fiorellas' },
];

app.listen(3000, () => {
  console.log('Server started on port 3000!');
});
