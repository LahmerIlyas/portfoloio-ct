 module.exports = {
   backend: {
     input: './swagger-spec.json',
     output: {
       mode: 'tags-split',
       target: '../client/petstore.ts',
       schemas: '../client/model',
       client: 'react-query',
       mock: true,
     },
    },
 };