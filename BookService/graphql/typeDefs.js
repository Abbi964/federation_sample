import gql from 'graphql-tag'

const typeDefs = gql`
    extend schema 
        @link(url: "https://specs.apollo.dev/federation/v2.5",
        import: ["@key"])

    type Book @key(fields : "autherId"){
        id : ID!
        name : String!
        price : Float!
        description : String!
        quantity : Int!
        authorId : ID!
        readers : [Reader]!
        # author : Author! 
    }
    type Reader @key(fields : "id") {
        id : ID!
        name : String!
        email : String!
        books : [Book]!
    }
    type Query {
        books : [Book]
        book(id : ID!) : Book
        readers : [Reader]
        reader(id : ID!) : Reader
    }
    type Mutation {
        addBook(book : addBookInput!) : Book
        deleteBook(id : ID!) : String!
        addReader(reader : addReaderInput!) : Reader
        deleteReader(id : ID!) : String!
        readBook(readerId : ID!,bookId : ID!) : Book
    }
    input addBookInput{
        name : String!
        price : Float!
        description : String!
        authorId : ID!
    }
    input addReaderInput{
        name : String!
        email : String!
    }
`

export default typeDefs;