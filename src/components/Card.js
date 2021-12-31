import React from "react";

function Card() {
    return (

        <div className="card--body">
            <div className="card--img"></div>
            <div className="card--rating">
                <img src="../assets/images/star-sm.png" alt="" className='star' />
                <span>5.0</span>
                <span>(6) • </span>
                <span>USA</span>
            </div>
        <p></p>
            <h5>price</h5>
        </div>
    )
}

export default Card