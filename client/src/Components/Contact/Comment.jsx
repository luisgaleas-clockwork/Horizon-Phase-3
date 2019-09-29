import React from 'react'

const Comment = (props) => {
    const { state } = props
    return (
            <div className="comments">
                <h1>{state.first_name} {state.last_name}</h1>
                <p>{state.contact_comment}</p>
            </div>
    )
}
export default Comment;