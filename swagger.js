import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

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
        },
    ],
    components: {           
      schemas: {            
        FamilyMember: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            birthdate: { type: 'string', format: 'date' },
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

export { swaggerUi, specs };
