import React from 'react';

const Breadcrumbs = ({ items }) => {

    return (
        <div className="breadcrumbs">
            <div className="container">
                <div className="breadcrumbs__items">
                    {items.map((item, index) => (
                        <div className="breadcrumbs__item" key={index}>
                            {item.title}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Breadcrumbs;