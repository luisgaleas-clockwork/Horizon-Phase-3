import React from "react"

const Cover = (props) => {
    const {state, click} = props
    return(
        <div>
             <div className="project__container">
            <div className="project__image_container">
                <img src={state.img_url} />
                <div className="project__text_container">
                    <h3>{state.product_name}</h3>
                    <h4>{state.artist}</h4>
                    <p>${state.price}</p>
                    <p>{state.descripton}</p>
                    <button onClick={click}>This is a button</button>
                </div>
            </div>
            <p></p>
        </div>
        </div>
    )
    
}

export default Cover