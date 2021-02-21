import React from "react";


export default function LocationError(props) {

    let appErrorMessage = "";

    if (props.apiError) {
        appErrorMessage = props.apiError;
    } else if (props.geoError) {
        appErrorMessage = props.geoError;
    }

    let searchTermInfo = "You searched for ";

    console.log(props);

    // if (props.getCitySearchTerm) {
    //     searchTermInfo += `<i>${props.searchTermCity}</i>`;

    //     if (props.getCountrySearchTerm) {
    //         searchTermInfo += `, <i>${ props.searchTermCountry }</i>`;
    //     }
    // }

    return (
        <div className="d-flex flex-column align-items-left justify-content-center white-area p-4">
            <h3 className="display-5 mr-4">Oops...</h3>
            <div class="lead">{appErrorMessage}</div>
            {/* <div>{searchTermInfo}</div> */}
        </div>
    );
}