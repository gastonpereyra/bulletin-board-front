// Modulos
import React from 'react';

const HomePage = (props) => {
    return(
        <>
        <section className="hero is-fullheight-with-navbar is-black is-large">
            <div className="video-overlay"></div>
            <video autoPlay loop muted>
                <source src="assets/video/cover.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="hero-body text-overlay">
                <div className="container has-text-centered">    
                    <h1 className="title is-1">
                        Bulletin Board
                    </h1>
                    <h2 className="subtitle is-3">
                        Ingresa -> Deja un Mensaje -> Comenta Otro
                    </h2>
                </div>
            </div>
        </section>
        <section className="section">
        </section>
        <section className="section">
        </section>
        <section className="section">
        </section>
        <section className="section">
        </section>
        <section className="section">
            <div className="columns">
                <div className="column is-one-third">
                    <h3>Usuarios</h3>
                    <div class="box">
                        <article class="media">
                            <div class="media-left">
                            <figure class="image is-64x64">
                                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image"/>
                            </figure>
                            </div>
                            <div class="media-content">
                            <div class="content">
                                <p>
                                <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                                <br/>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                </p>
                            </div>
                            <nav class="level is-mobile">
                                <div class="level-left">
                                <a class="level-item" aria-label="reply">
                                    <span class="icon is-small">
                                    <i class="fas fa-reply" aria-hidden="true"></i>
                                    </span>
                                </a>
                                <a class="level-item" aria-label="retweet">
                                    <span class="icon is-small">
                                    <i class="fas fa-retweet" aria-hidden="true"></i>
                                    </span>
                                </a>
                                <a class="level-item" aria-label="like">
                                    <span class="icon is-small">
                                    <i class="fas fa-heart" aria-hidden="true"></i>
                                    </span>
                                </a>
                                </div>
                            </nav>
                            </div>
                        </article>
                        </div>
                </div>
                <div className="column is-one-third">
                    <h3>Mensajes</h3>
                    <article class="message">
                        <div class="message-header">
                            <p>Mensaje</p>
                            <button class="delete" aria-label="delete"></button>
                        </div>
                        <div class="message-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                        </div>
                    </article>
                </div>
                <div className="column is-one-third">
                    <h3>Etiquetas</h3>
                    <div class="field is-grouped is-grouped-multiline">
                        <div class="control">
                            <div class="tags has-addons">
                            <a class="tag is-link">Technology</a>
                            <a class="tag is-delete"></a>
                            </div>
                        </div>

                        <div class="control">
                            <div class="tags has-addons">
                            <a class="tag is-link">CSS</a>
                            <a class="tag is-delete"></a>
                            </div>
                        </div>

                        <div class="control">
                            <div class="tags has-addons">
                            <a class="tag is-link">Flexbox</a>
                            <a class="tag is-delete"></a>
                            </div>
                        </div>

                        <div class="control">
                            <div class="tags has-addons">
                            <a class="tag is-link">Web Design</a>
                            <a class="tag is-delete"></a>
                            </div>
                        </div>

                        <div class="control">
                            <div class="tags has-addons">
                            <a class="tag is-link">Open Source</a>
                            <a class="tag is-delete"></a>
                            </div>
                        </div>

                        <div class="control">
                            <div class="tags has-addons">
                            <a class="tag is-link">Community</a>
                            <a class="tag is-delete"></a>
                            </div>
                        </div>

                        <div class="control">
                            <div class="tags has-addons">
                            <a class="tag is-link">Documentation</a>
                            <a class="tag is-delete"></a>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </section>
        </>
    )
};

export default HomePage;