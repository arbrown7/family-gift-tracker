const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Family Gift Tracker API',
      version: '1.0.0',
      description: 'API for managing family gift ideas',
    },
    servers: [
      {
        url: 'https://family-gift-tracker.onrender.com',
        //url: 'http://localhost:3000', //comment this out before committing
      },
    ],
    components: {           
      schemas: {            
        FamilyMember: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            birthday: { type: 'string', format: 'date' },
            anniversary: { type: 'string', format: 'date' },
            relation: { type: 'string' },
            interests: {
              type: 'array',
              items: { type: 'string' }
            },
            birthdayGiftIdeas: {
              type: 'array',
              items: { type: 'string' }
            },
            christmasGiftIdeas: {
              type: 'array',
              items: { type: 'string' }
            },
            anniversaryGiftIdeas: {
              type: 'array',
              items: { type: 'string' }
            },
            shirtSize: { type: 'string' },
            pantSize: { type: 'string' },
            shoeSize: { type: 'string' }
          },
        },
      },
    },
  },
  apis: ['./routes/*.js'], // files where Swagger comments are
};

const specs = swaggerJsDoc(options);

module.exports = { swaggerUi, specs };
