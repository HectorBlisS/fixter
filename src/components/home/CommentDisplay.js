import React from 'react';

export const CommentDisplay = () => {

    return (
        <div className="comment">
            <div className="comentario">
                <p><span className="signo">"</span>Aprender a programar, y convertirme en un desarrollador web era uno de mis principales objetivos
                    al iniciar mi carrera profesional, afortunadamente en Fixter si pude iniciar mi camino como desarrollador profesional.<span className="signo">"</span></p>
                <div className="flex data_comment">
                    <img className="photo_comment" src="https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/18891870_1543998225611670_8032322982945740932_o.jpg?oh=829371a2f4e415bd4c2325ebf9bc7809&oe=5AEF7A05" alt=""/>
                    <p className="name_comment">Oswaldo Martinez</p>
                </div>
            </div>
        </div>
    );
};