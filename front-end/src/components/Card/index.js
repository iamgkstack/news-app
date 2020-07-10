import React from 'react';
import './index.css'

// const names = ['James', 'Paul', 'John', 'George', 'Ringo', 'James', 'Paul', 'John', 'George', 'Ringo'];



const Card = ({result}) => {
    console.log('result==>', result)
    return (
        <div className="row">
            {result.map(name =>
                <div className="col-3">
                    <div className="card-container">
                        <a href={name.url}>
                            <div className="img" style={{
                            backgroundImage: `url(${name.urlToImage})` }}>
                                {/* <img src={name.urlToImage} alt=""></img> */}
                            </div>
                        </a>
                        <div className="description">
                            <div>Author: {name.author}</div>
                            <div className="title">Title: {name.title}</div>
                            <div>Description: {name.description}</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Card;