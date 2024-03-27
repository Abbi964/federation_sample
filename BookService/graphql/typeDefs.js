const typeDefs = `#graphql
    type Book {
        id : ID!
        name : String!
        price : Float!
        description : String!
        quantity : Int!
        authorId : ID!
    }
    type Reader {
        id : ID!
        name : String!
        email : String!
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