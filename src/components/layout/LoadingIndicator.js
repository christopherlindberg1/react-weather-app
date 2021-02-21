import React from "react";

export default function LoadingIndicator(props) {

    // let className = "";

    return (
        <div className="d-flex flex-row align-items-center justify-content-center white-area p-4">
            <h3 className="display-5 mr-4">Loading...</h3>
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    )
}