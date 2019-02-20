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
        <div className="video-overlay"></div>
        <video autoPlay loop muted>
            <source src="assets/video/cover.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <section className="hero is-fullheight is-dark is-large">
            <HeaderTemplate />
            <Switch>
                <Route path="/" component={HomePage} />
                <Redirect to="/" />
            </Switch>
            <FooterTemplate />
        </section>
    </>
    );
};

export default withRouter(Router);