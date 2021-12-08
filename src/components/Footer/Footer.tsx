import React, { FunctionComponent } from "react"
import "./style.css"

const Footer: FunctionComponent = () => {
const currentYear = new Date().getFullYear()
return (
<footer className="footer">
<a href="https://newline.co">Newline.co</a>
<br />
{currentYear}
</footer>
)
}

export default Footer