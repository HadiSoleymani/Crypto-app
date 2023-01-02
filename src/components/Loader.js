import React from 'react';
import spinner from "../Gif/spinner.gif"

const Loader = () => {
    return (
        <div style={{minHeight: "100vh", backgroundColor: "rgb(27, 27, 27)" }}>
            <img style={{marginTop: "50px"}}src={spinner} alt="Loader" />
            <h1 style={{color: "white"}}>Loading ...</h1>
        </div>
    );
};

export default Loader;
