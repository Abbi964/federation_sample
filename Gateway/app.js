import {ApolloServer} from '@apollo/server'
import {startStandaloneServer} from '@apollo/server/standalone'
import {ApolloGateway} from '@apollo/gateway'
import {ApolloServerPluginSubscriptionCallback} from '@apollo/server/plugin/subscriptionCallback';

const gateway = new ApolloGateway({
    serviceList : [
        {name : 'Author', url : 'http://localhost:4001'},
        {name : 'Book', url : 'http://localhost:4002'}
    ]
})

const server = new ApolloServer({
    gateway,
    Subscriptions : false
})

const {url} = startStandaloneServer(server,{
    listen : {port : 4003}
})

console.log(`Server is listening on ${url}`)
