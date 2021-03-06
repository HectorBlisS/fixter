import React from 'react';
import {Link} from 'react-router-dom';
import diploma from '../../assets/diploma.png';

export const PromoDisplay = () => {

    return (
        <div className="promo ">

                <div className="data_promo">
                    <h2>Aprende algo nuevo cada día!</h2>
                    <p style={{fontFamily:"Gotam"}}>Listo para comenzar? La velocidad con la que cambian, se actualizan y surgen tecnologías para
                    el desarrollo de software es impresionante, y es por eso, que en FixterGeek ofrecemos cursos para que comiences ya
                    tu carrera como desarrollador de software profesional, elige el curso que más te guste y visualiza tu progreso.
                    </p>
                    <Link to="/bootcamp">
                        <button className="btn_start">Empezar ahora</button>
                    </Link>
                </div>
                <div className="img_promo">
                    <img className="diploma" src={diploma} alt=""/>
                </div>

        </div>
    );
};