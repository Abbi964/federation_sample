const {gql} = require('apollo-server')

const typeDef = gql`
    type Author {
        id : ID!
        name : String!
        about : String!
    }
    type Query {
        authors : [Author]
        author(id : ID!) : Author
    }
    type Mutation {
        addAuthor(author : addAuthorInput) : Author
        deleteAuthor(id : ID!) : Author
    }
    input addAuthorInput{
        name : String!
        about : String!
    }

`