import React from "react";

export const Icon = ({ id, className }) => {

    return (
        <svg className={className}>

            <use href={'#' + id} />

        </svg>
    );

};