import React from "react"

const Cover = (props) => {
    const { state } = props
    return (
        <div className="card__container">
            <div className="product__container">
                <div className="product__image_container">
                    <img src={state.img_url} />
                    <div className="product__text_container">
                        <h3>{state.product_name}</h3>
                        <h4>{state.artist}</h4>
                        <p className="hide">${state.price}</p>
                        <p>{state.descripton}</p>
                    </div>
                </div>
            </div>
            <div className="display_text">
                        <h3>{state.product_name}</h3>
                        <p>Price: ${state.price}</p>
                    </div>
        </div>
    )

}

export default Cover