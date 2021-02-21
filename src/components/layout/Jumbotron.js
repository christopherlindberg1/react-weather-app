import React from 'react'
import { Link } from 'react-scroll';

export default function Jumbotron() {

    const arrowStyle = {
        width: "35px",
        cursor: "pointer",
    }

    const jumboTextStyle = {
        borderRadius: "6px",

    }

    return (
        <div id="jumbotron-bg">
            <div id="jumbotron-content" className="p-4 rounded" style={jumboTextStyle} >
                <h1 className="display-4">Weather Anywhere</h1>
                <p className="lead">Get current weather from any point on the globe.</p>
                <Link
                    to="main-section"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                    <img
                        src="https://image.flaticon.com/icons/png/512/3/3907.png"
                        alt="Arrow icon pointing down"
                        style={arrowStyle} />
                </Link>

            </div>
        </div>
    )
}

