// import the gql tagged template function
//tagged templates are advanced use of template literals
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        friendCount: Int
        thoughts: [Thought]
        friends: [User]
    }    
    type Query {
        me: User
        users: [User]
        user(username: String!): User
        thoughts(username: String): [Thought]
        thought(_id: ID!): Thought
    }
    type Thought {
        _id: ID
        thoughtText: String
        createdAt: String
        username: String
        reactionCount: Int
        reactions: [Reaction]
        }    
    type Reaction {
        _id: ID
        reactionBody: String
        createdAt: String
        username: String
    }
    type Query {
        thoughts(username: String): [Thought]
        }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
    }
    type Auth {
        token: ID!
        user: User
      }
`;

// export the typeDefs
module.exports = typeDefs;