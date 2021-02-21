import React from 'react'

export default function EmptyVerticalSpace(props) {
    const style = {
        width: "100%",
        height: (props.height) ? props.height : "0px"
    }

    return (
        <div id="info-component" style={style} >

        </div>
    )
}
