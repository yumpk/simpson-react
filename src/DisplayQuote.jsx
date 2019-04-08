import React from 'react';

const DisplayQuote = ({quotes}) => {
    return (
        <div className="DisplayQuote">
            <img src={quotes.image} alt="" />
            <ul>
                <li>{quotes.quote}</li>
                <li>{quotes.character}</li>        
            </ul>
        </div>
    );
};

export default DisplayQuote;