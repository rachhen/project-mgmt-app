require("dotenv").config();
const cors = require("cors");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const connectDB = require("./config/db");

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: require("./schema/schema"),
    graphiql: process.env.NODE_ENV !== "production",
  })
);

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}/graphql`);
});
