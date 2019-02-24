// Modulos
import React from 'react';

export default ({match}) => {
    
    return (
        <section className="hero is-fullheight-with-navbar is-black">
            <div className="video-overlay has-background-black">
            </div>
            <div className="hero-body text-overlay">
                <div className="container has-text-centered ">
                    <h1>ID: {match.params.id}</h1>
                </div>
            </div>
        </section>

    )
}