// Modulos
import React from 'react';
// Componentes
import UserMedia from './UserMediaComponent';
import PinPost from './PostComponent';
import { TagsList } from './TagsComponent';

const listTag = [
    { name: "Java", postCount: 210},
    { name: "Javascript", postCount: 220},
    { name: "Ruby", postCount: 12},
    { name: "Python", postCount: 42},
    { name: "TypeScript", postCount: 52},
    { name: "Pearl", postCount: 0},
    { name: "Jam", postCount: 1},
    { name: "Nuevo", postCount: 102},
    { name: "Viejo", postCount: 32},
    { name: "C++", postCount: 12},
]

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
            <a className="title button is-info">
                <span className="icon is-small">
                    <i className="fas fa-user-circle" aria-hidden="true"></i>
                </span><span> Usuarios</span>
            </a>
            <div className="columns">
                    <div className="column is-one-third">
                        <h3 className="subtitle">Nuevo</h3>
                        <UserMedia 
                            name="Gaston Pereyra" 
                            email="g@gmail.com" 
                            image="https://bulma.io/images/placeholders/128x128.png"
                            createdAt= "12-05-1988"
                            posts={31}
                            comments={120}
                            />
                    </div>
                    <div className="column is-one-third">
                        <h3 className="subtitle">Con Más Mensajes</h3>
                        <UserMedia 
                            name="Gaston Pereyra" 
                            email="g@gmail.com" 
                            image="https://bulma.io/images/placeholders/128x128.png"
                            createdAt= "12-05-1988"
                            posts={31}
                            comments={120}
                            />
                    </div>
                    <div className="column is-one-third">
                        <h3 className="subtitle">Con Más Comentarios</h3>
                        <UserMedia 
                            name="Gaston Pereyra" 
                            email="g@gmail.com" 
                            image="https://bulma.io/images/placeholders/128x128.png"
                            createdAt= "12-05-1988"
                            posts={31}
                            comments={120}
                            />
                    </div>
                </div>
            </section>
        <section className="section">
            <a className="title button is-info">
                <span className="icon is-small">
                    <i className="fas fa-sticky-note" aria-hidden="true"></i>
                </span><span> Mensajes</span>
            </a>
            <div className="columns">
                <div className="column is-one-third">
                    <h3 className="subtitle">Nuevos</h3>
                    <PinPost
                        title="Hola"
                        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."
                        comments={22}
                        likes={100}
                        dislikes={2}
                        createdAt="12-05-2019"
                        />
                </div>
                <div className="column is-one-third">
                    <h3 className="subtitle">Mas comentados</h3>
                    <PinPost
                        title="Hola a todo el mundo, este es un post"
                        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."
                        comments={22}
                        likes={100}
                        dislikes={2}
                        createdAt="12-05-2019"
                        />
                </div>
                <div className="column is-one-third">
                    <h3 className="subtitle">Que mas Gusta</h3>
                    <PinPost
                        title="Hola a todos, porque si"
                        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."
                        comments={22}
                        likes={100}
                        dislikes={2}
                        createdAt="12-05-2019"
                        />
                </div>
            </div>
        </section>
        <section className="section">
            
            <a className="title button is-info">
                <span className="icon is-small">
                    <i className="fas fa-hashtag" aria-hidden="true"></i>
                </span><span> Etiquetas</span>
            </a>
            <div className="columns is-centered">
                <div className="column is-one-third">
                    <h3 className="subtitle">Nuevas</h3>
                    <TagsList tags={listTag} />
                </div>
                <div className="column is-one-third">
                    <h3 className="subtitle">Mas Usadas</h3>
                    <TagsList tags={listTag.map(tag => tag).sort((tag,tagN) => tag.postCount-tagN.postCount)} />
                </div>
            </div>
        </section>
        </>
    )
};

export default HomePage;