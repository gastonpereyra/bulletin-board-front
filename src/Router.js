// Modulos
import React from 'react';

// Router
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

// Componentes
import FooterTemplate from './pages/TemplateFooter';
import HeaderTemplate from './pages/TemplateHeader';

// Paginas
// - Inicio
import HomePage from './pages/PageHome';
// - Autor / User
import UsersPage from './pages/PageUsers';
import UserPage from './pages/PageUser';
import UserPostsPage from './pages/PageUserPosts';
import UserCommentsPage from './pages/PageUserComments';
// - Mensaje / Posts
import PostPage from './pages/PagePost';
import PostsPage from './pages/PagePosts';
// - Comentarios / Comements
import CommentPage from './pages/PageComment';
// - Etiquetas / Tags
import TagPage from './pages/PageTag';
import TagsPage from './pages/PageTags';
// - Auth / Login
import LoginPage from './pages/PageAuthLogin';
import SignInPage from './pages/PageAuthSignIn';
import UpdatePage from './pages/PageAuthUpdate';



const Router = (props) => {

    return (
        <>
            <HeaderTemplate />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/user" component={UsersPage} />
                <Route exact path="/user/:id" component={UserPage} />
                <Route exact path="/user/:id/posts" component={UserPostsPage} />
                <Route exact path="/user/:id/comments" component={UserCommentsPage} />
                <Route exact path="/post" component={PostsPage} />
                <Route exact path="/post/:id" component={PostPage} />
                <Route exact path="/tag" component={TagsPage} />
                <Route exact path="/tag/:id" component={TagPage} />
                <Route exact path="/comment/:id" component={CommentPage} />
                <Route exact path="/auth/login" component={LoginPage} />
                <Route exact path="/auth/signin" component={SignInPage} />
                <Route exact path="/auth/:id" component={UpdatePage} />
                <Redirect to="/" />
            </Switch>
            <FooterTemplate />
        </>
    );
};

export default withRouter(Router);