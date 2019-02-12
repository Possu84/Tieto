import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import { gql } from 'graphql-tag';

const restLink = new RestLink({ uri: "https://swapi.co/api/" });

// Other necessary imports...

// Create a RestLink for the REST API
// If you are using multiple link types, restLink should go before httpLink,
// as httpLink will swallow any calls that should be routed through rest!
const restLink = new RestLink({
  uri: 'https://swapi.co/api/',
});

// Configure the ApolloClient with the default cache and RestLink
const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

// A simple query to retrieve data about the first person
const query = gql`
  query luke {
    person @rest(type: "Person", path: "people/1/") {
      name
    }
  }
`;

// Invoke the query and log the person's name
client.query({ query }).then(response => {
  console.log(response.data.name);
});


export default graphql(Query, {
    props: ({ data }) => {
      if (data.loading) {
        return {
          loading: data.loading,
        };
      }
  
      if (data.error) {
        return {
          error: data.error,
        };
      }
      return {
        person: data.person,
        loading: false,
      };
    },
  })(Person);