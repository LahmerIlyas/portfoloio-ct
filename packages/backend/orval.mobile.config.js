 module.exports = {
   backend: {
     input: './swagger-spec.json',
     output: {
       mode: 'tags-split',
       target: '../../app/src/api/generated/calories-tracker.ts',
       schemas: '../../app/src/api/generated/model',
       client: 'react-query',
       mock: true,
     },
    },
 };