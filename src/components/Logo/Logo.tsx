import React, { FunctionComponent } from "react"
import "./style.css"


const Logo: FunctionComponent = () => {
    return (
        <h1 className="logo">
            <span role="img" aria-label="metal hand emoji">
                👋
            </span>
            <span role="img" aria-label="musical keyboard emoji">
                🎹
            </span>
            <span role="img" aria-label="musical notes emoji">
                🎶
            </span>
        </h1>
    )
}


export default Logo