// Modulos
import React from 'react';

export default ({match}) => {
    // Para que se cargue desde arriba
    window.scrollTo(0, 0);
    
    return (
        <section className="hero is-fullheight-with-navbar is-black">
            <div className="video-overlay has-background-black">
            </div>
            <div className="hero-body text-overlay">
                <div className="container has-text-centered ">
                    <h1>User Posts</h1>
                </div>
            </div>
        </section>

    )
}