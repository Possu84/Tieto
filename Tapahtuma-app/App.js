import React from 'react';
import EventList from './EventList';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { RestLink } from 'apollo-link-rest';

const restLink = new RestLink({
  uri: 'https://swapi.co/api/',
});

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});



class App extends React.Component {
  render() {
    return <EventList />;
  }
}

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default ApolloApp;
