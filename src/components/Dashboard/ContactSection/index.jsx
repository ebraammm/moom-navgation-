import React, { useState, useEffect } from 'react';
import MessageCard from './MessageCard';

const Index = () => {

    return (
        // container for contact messages
        <div className="container mt-5 mb-5 border border-2 p-5 rounded-3">

            <div className="d-flex justify-content-between mb-5">
                <h3>Contact Messages</h3>
            </div>

            <div className="container overflow-auto" style={{ height: '500px' }}>

                <div className="row ">
                    <div className="col">
                        <MessageCard />
                        <MessageCard />
                        <MessageCard />
                        <MessageCard />
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Index;
