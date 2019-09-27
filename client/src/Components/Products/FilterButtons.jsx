import React from "react"

const Filter = (props) => {
    const { none, high, low } = props
    return (
        <div className="filter_bg">
            <div className="filter_btn">
                <button onClick={none}>None</button>
                <button onClick={high}>Highest Price</button>
                <button onClick={low}>Lowest Price</button>
            </div>
        </div>
    )
}

export default Filter