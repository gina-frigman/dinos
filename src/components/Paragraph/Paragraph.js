import React from 'react';
import './Paragraph.css';
import { Link } from 'react-router-dom';

function Paragraph(props) {
    return(
        <div className='paragraph'>
            {props.title ? 
            <h2 className='paragraph__title'>{props.title}</h2> : 
            <></> }
            {typeof props.text === 'string' ?
            <p className='paragraph__text'>{props.text}</p>
            : <ol className='paragraph__list'>
                {props.text.map((element, i) => {
                    return(
                    <li className='paragraph__dot' key={i}><Link to={element[1]} className='paragraph__link'>{element[0]}</Link></li>
                    )
                })}
            </ol> 
            }
        </div>
    );
}

export default Paragraph;