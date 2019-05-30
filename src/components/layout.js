import React from "react"
import { Link } from "gatsby"

const NavLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <a href={props.href}>{props.children}</a>
  </li>
)

export default props => (
  <div style={{ maxWidth: `600px`, margin: `0 auto` }}>
    <header>
      <h1>
        <Link to="/">developish</Link> <span>is Brandon Wright</span>
      </h1>

      <ul style={{ padding: 0 }}>
        <NavLink href="https://github.com/developish">GitHub</NavLink>
        <NavLink href="https://instagram.com/developish">Instagram</NavLink>
        <NavLink href="https://twitter.com/developish">Twitter</NavLink>
      </ul>
    </header>

    { props.children }
  </div>
)
