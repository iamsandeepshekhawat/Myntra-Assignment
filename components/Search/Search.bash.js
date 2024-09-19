import React from 'react';

const SearchBash = () => {

    const items = "Shirts For Men & Women - 101148 items";
    
        return (
            <div className="search_bash">
                <div className="container">
                    <div className="search_bash__items">
                        {items.split(" - ").map((item, index) => (
                            <div className="search_bash__item" key={index}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

export default SearchBash;
