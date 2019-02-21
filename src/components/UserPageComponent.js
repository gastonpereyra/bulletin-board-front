// Modulos
import React from 'react';
import { Query } from 'react-apollo';
// Queries
import { USER_ID } from '../queries/users';
// Imagen por Default
const imageDefault = "/assets/images/user.gif"
const imageError = "/assets/images/error.gif"
const imageLoading = "/assets/images/preloader.gif"

const UserPage = ({match}) => {
    const userId= parseInt(match.params.id);
    return (
        <section className="hero is-fullheight-with-navbar">
            <div className="video-overlay has-background-black">
            </div>
            <div className="hero-body text-overlay">
                <div className="container has-text-centered ">
                    <Query query={USER_ID} variables={{userId}}>
                        { ({loading, error, data}) => {
                            const language = navigator.language || navigator.browserLanguage;
                            const options = {
                                year: 'numeric', month: 'numeric', day: 'numeric',
                                hour: 'numeric', minute: 'numeric', second: 'numeric',
                                hour12: false
                              };

                            let image= (data && data.User) ? data.User.image : imageDefault, 
                            name= (data && data.User) ? data.User.userName : "" , 
                            email= (data && data.User) ? data.User.email :"...", 
                            createdAt= (data && data.User) ? new Intl.DateTimeFormat(language,options).format(data.User.createdAt) : "...", 
                            updatedAt= (data && data.User) ? new Intl.DateTimeFormat(language,options).format(data.User.updatedAt) : "...", 
                            lastLoginAt= (data && data.User) ? new Intl.DateTimeFormat(language,options).format(data.User.lastLoginAt ) : "...", 
                            posts=(data && data.User) ? data.User.postsCount : 0, 
                            comments= (data && data.User) ? data.User.commentsCount : 0,
                            id=match.params.id;

                            if (loading) {
                                image= imageLoading;
                                name= "Cargando";
                            } 
                            if (error) {
                                image= imageError;
                                name= "Error"
                                email= error.message
                                createdAt= new Intl.DateTimeFormat().format(Date.now());
                            }
                            return (
                                <div className="tile is-ancestor">
                                    <div className="tile is-vertical is-2"></div>
                                    <div className="tile is-vertical is-8">
                                        <div className="tile">
                                            <div className="tile is-parent is-vertical">
                                                <article className="tile is-child notification is-primary">
                                                    <p className="title">Info de User</p>
                                                    <p className="subtitle">{email}</p>
                                                    <p className="subtitle">{createdAt}</p>
                                                    <p className="subtitle">{updatedAt}</p>
                                                    <p className="subtitle">{lastLoginAt}</p>
                                                </article>
                                                <article className="tile is-child notification is-warning">
                                                    <p className="title">Info del Tablon</p>
                                                    <p className="subtitle">{posts}</p>
                                                    <p className="subtitle">{comments}</p>
                                                </article>
                                            </div>
                                            <div className="tile is-parent">
                                                <article className="tile is-child notification is-info">
                                                    <p className="title">{name}</p>
                                                    <p className="subtitle">{id}</p>
                                                    <figure className="image is-360x360">
                                                        <img className="is-rounded" src={image}/>
                                                    </figure>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tile is-vertical is-2"></div>
                                </div>
                            )
                        }}
                    </Query>
                </div>
            </div>
        </section>

    )
}

export default UserPage;