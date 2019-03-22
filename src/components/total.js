import React from 'react'


const Total = (props) => {
    return (
        <div className="container mt-4 d-flex justify-content-end">
            <h5>Total: {props.total}</h5>
        </div>
    )
}

export default Total