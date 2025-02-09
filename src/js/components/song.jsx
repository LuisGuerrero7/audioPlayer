import React from "react";

const Song = () => {
    return (
        <div className="container bg-dark d-block border-bottom border-success rounded">
            <div className="d-flex text-center justify-content-between p-2 m-2">                
                <div className="col-2">Number</div>
                <div className="col-8">Name</div>
                <button type="button" className="btn btn-success col-2" >Play</button>
            </div>
        </div>
    )
}

export default Song