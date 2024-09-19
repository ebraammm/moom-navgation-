import React from 'react';

const index = () => {
    return (
        <div className="card" style={{ width: '50%' }}>
            <div className="card-body">
                <h5 className="card-title">Message:</h5>
                <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                    quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh.
                </p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Sender Name:</li>
                <li className="list-group-item">Company Name:</li>
                <li className="list-group-item">Company Email:</li>
                <li className="list-group-item">Date:</li>
            </ul>
            <div className="card-body d-flex align-items-center">
                <a href="#" className="btn btn-primary" style={{ marginRight: '10px' }}>Reply</a>
                <a href="#" className="btn btn-danger">Delete</a>
            </div>
        </div>
    )
}

export default index;
