const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const cors = require('cors');  // Add CORS support
const { typeDefs, resolvers } = require('./schema');
const mongoose = require('mongoose');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const app = express();

// Enable CORS
app.use(cors({
  origin: '*'  // Allow all origins or specify your frontend URL here
}));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

async function startServer() {
  await server.start();
  server.applyMiddleware({ app, path: '/api/graphql' });
}

startServer();

module.exports = app;
