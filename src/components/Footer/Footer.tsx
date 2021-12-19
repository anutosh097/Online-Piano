import React, { FunctionComponent } from "react"
import "./style.css"

const Footer: FunctionComponent = () => {
const currentYear = new Date().getFullYear()
return (
<footer className="footer">
<a className="link-style" target="_blank" rel="noreferrer" href="https://twitter.com/AnutoshGhosh5">Anutosh Ghosh</a>
<br />
{currentYear}
</footer>
)
}

export default Footer