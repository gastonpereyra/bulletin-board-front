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
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Configuración de Apollo
const client = new ApolloClient({
  uri: 'https://bullentin-board-ql.glitch.me/graphql/'
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
