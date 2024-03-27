import 'dotenv/config'

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer} from "@apollo/server/standalone";
import typeDefs from './graphql/typeDefs.js';
import resolvers from './graphql/resolvers.js';
import sequelize from './util/database.js';
import Book from './model/book.js';
import Reader from './model/Reader.js';
import BookReader from './model/bookReader.js';

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

// defining relations
Book.belongsToMany(Reader,{through : BookReader, foreignKey : "bookId"})
Reader.belongsToMany(Book,{through : BookReader, foreignKey : "readerId"})

sequelize.sync()
    .then(()=>{
        console.log('Connected to DB')
    })

const {url} = await startStandaloneServer(server, {
    listen : {port : 4002}
})

console.log(`Server is listening on ${url}`)