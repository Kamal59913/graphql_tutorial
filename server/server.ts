import express, { Application } from 'express'
import { ApolloServer } from 'apollo-server-express';
import { schema } from './schema';
import { config } from 'dotenv';
import initiateMongoServer from './db';
config()

const app: Application = express()

initiateMongoServer()

app.use(express.json());

const PORT = process.env.PORT || 5656;

const server:any = new ApolloServer({
    schema,
})

server.start().then(() => {
    server.applyMiddleware({ app, path: '/graphql' });
    app.listen(PORT, () => {
        console.log(`The server is running at http://localhost:${PORT}/graphql`)
    })
})