import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

//establish new link to GraphQL server at its /graphql endpt with createHttpLink()
const httpLink = createHttpLink({
  uri: '/graphql',
});
//use ApolloClient() constructor to instatiate apollo client instance and create connection to API endpoint
const client = new ApolloClient({
  link: httpLink,
  //instantiate new cache object
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='flex-column justify-flex-start min-100-vh'>
        <Header />
        <div className='container'>
          <Home />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
