// import the gql tagged template function
//tagged templates are advanced use of template literals
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type Query {
        helloWorld: String
    }
`;

// export the typeDefs
module.exports = typeDefs;