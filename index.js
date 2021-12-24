const express = require('express/');
const routes = require("./routes/routes");
const {connect} = require('./config/database');
const { GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const port = 8000;

// establish connection with database
connect();

// const UserType = new GraphQLObjectType({
//   name: "User",
//   fields: () => ({
//     id: { type: GraphQLInt },
//     firstName: { type: GraphQLString },
//     lastName: { type: GraphQLString },
//     email: { type: GraphQLString },
//     password: { type: GraphQLString },

//   })
// })

// const RootQuery = new GraphQLObjectType({
//   name: "RootQueryType",
//   fields: {
//     getAllUsers: {
//       type: new GraphQLList(UserType),
//       args: { id: {type: GraphQLInt } },
//       resolve(parent, args) {
//         return 
//       }
//     }
//   }
// })
// const Mutation = "mutation";

// const schema = new GraphQLSchema({ query: RootQuery, mutation: Mutation })

// use external routes file
app.use("/", routes);


// app.use("/graphql", graphqlHTTP({
//   schema,
//   graphiql: true
// }))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});