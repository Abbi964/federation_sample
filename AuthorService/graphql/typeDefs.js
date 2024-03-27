import gql from 'graphql-tag'

const typeDefs = gql`
    extend schema 
        @link(url: "https://specs.apollo.dev/federation/v2.5",
        import: ["@key"])

    type Author @key(fields : "id") {
        id : ID!
        name : String!
        email : String!
        about : String!
        # books : [Book]!
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