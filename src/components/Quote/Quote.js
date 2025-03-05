import './Quote.css';

function Quote(props) {
    return(
        <div className='quote'>
            <h3 className='quote__text'>{props.quote}</h3>
            {props.author ? 
            <p className='quote__author'>{props.author}</p> : 
            <></>}
        </div>
    );
}

export default Quote;