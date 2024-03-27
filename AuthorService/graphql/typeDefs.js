const typeDefs = `#graphql
    type Author {
        id : ID!
        name : String!
        email : String!
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
        email : String!
        about : String!
    }

`

export default typeDefs;