// React stuff
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// Apollo stuff
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// Modulo de App
import App from './App';

// CSS
import './index.css';


// Configuración de Apollo
const httpLink = createHttpLink({
  uri: 'https://bullentin-board-ql.glitch.me/'
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  })

// Conecto Apollo con los Componentes de React
const AppConApollo = () => (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
  
  // Conectar la App
  ReactDOM.render(<AppConApollo/>, document.getElementById('root'));
  serviceWorker.unregister();
