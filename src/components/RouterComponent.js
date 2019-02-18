// Modulos
import React from 'react';

// Router
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

const Router = (props) => {
    const HomePage = () => {
        return(
            <div>
                Hola
            </div>
        )
    };
    return (
        <div className="App">
        {
            // <HeaderTemplate />
        }
        <Switch>
            <Route path="/" component={HomePage} />
            <Redirect to="/" />
        </Switch>
        {
            // <Footer />
         }
      </div>
    );
};

export default withRouter(Router);