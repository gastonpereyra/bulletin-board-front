// React
import React, { Component } from 'react';
// Router
import { BrowserRouter } from 'react-router-dom'; // Para configurar el Router

// Componente
import Router from './components/RouterComponent';

// Style
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/app.scss';

// Apollo stuff
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// Configuración de Apollo
const httpLink = createHttpLink({
  uri: 'https://bullentin-board-ql.glitch.me/graphql/'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

class App extends Component {

  render() {
    
    return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
    );
  }
}

export default App;
