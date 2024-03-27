import 'dotenv/config'

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer} from "@apollo/server/standalone";
import typeDefs from './graphql/typeDefs.js';
import resolvers from './graphql/resolver.js';
import sequelize from './util/database.js';

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

sequelize.sync()
    .then(()=>{
        console.log('Connected to DB')
    })

const {url} = await startStandaloneServer(server, {
    listen : {port : 4001}
})

console.log(`Server is listening on ${url}`)