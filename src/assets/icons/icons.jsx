import React from "react";

const Icon = ({ id, className }) => {

    return (
        <svg className={className}>

            <use href={'#' + id} />

        </svg>
    );

};



export default Icon