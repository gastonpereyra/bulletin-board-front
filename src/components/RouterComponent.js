// Modulos
import React from 'react';

// Router
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

// Componentes

import HomePage from './HomeComponent';
import FooterTemplate from './FooterComponent';
import HeaderTemplate from './HeaderComponent';

const Router = (props) => {

    return (
        <>
            <HeaderTemplate />
            <Switch>
                <Route path="/" component={HomePage} />
                <Redirect to="/" />
            </Switch>
            <FooterTemplate />
        </>
    );
};

export default withRouter(Router);