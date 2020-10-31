import {
  ApolloClient,
  createHttpLink,
  gql,
  InMemoryCache,
} from "@apollo/client";

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
  link: createHttpLink({ uri: "http://homework.nextbil.com/graphql" }),
  cache: new InMemoryCache(),
  connectToDevTools: true,
  typeDefs,
});

export { client as apolloClient };
