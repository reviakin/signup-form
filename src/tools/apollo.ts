import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const typeDefs = gql`
  enum Gender {
    MALE
    FEMALE
  }

  input SignupInput {
    name: String!
    email: String!
    password: String!
    country: String!
    gender: Gender!
  }
`;

const client = new ApolloClient({
  cache: new InMemoryCache(),
  connectToDevTools: true,
  typeDefs,
  uri: "http://homework.nextbil.com/graphql",
});

export { client as apolloClient };
