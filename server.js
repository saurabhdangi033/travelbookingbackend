// const express = require('express');
// const { ApolloServer } = require('apollo-server-express');
// const mongoose = require('mongoose');
// const typeDefs = require('./schema/bookingSchema');
// const resolvers = require('./resolvers/bookingResolvers');
// require('dotenv').config();

// const startServer = async () => {
//   const app = express();

//   const server = new ApolloServer({ typeDefs, resolvers });
//   await server.start();
//   server.applyMiddleware({ app });

//   // MongoDB connection
//   mongoose.connect('mongodb+srv://saurabhdangi01:test123@cluster0.bsole.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   app.listen({ port: 4000 }, () =>
//     console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
//   );
// };

// startServer();


const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const cors = require('cors');  // Add CORS support
const { typeDefs, resolvers } = require('./schema');
const mongoose = require('mongoose');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const app = express();

// Enable CORS
app.use(cors({
  origin: "https://travelbooking-wtvp.vercel.app"  // Allow all origins or specify your frontend URL here
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
