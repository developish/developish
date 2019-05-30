import React from "react"
import { Link } from "gatsby"

const NavLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <a href={props.href}>{props.children}</a>
  </li>
)

export default props => (
  <div style={{ maxWidth: `600px`, margin: `0 auto`, padding: `0 1rem`, display: `flex`, flexDirection: `column`, minHeight: `100vh` }}>
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

    <div style={{ flex: 1 }}>
      {props.children}
    </div>

    <footer style={{ textAlign: `center`, fontSize: `0.8rem`, padding: `1rem` }}>
      <div>
        Copyright 2019 Brandon Wright
      </div>
      <div>
        Hosted on <a href="https://surge.sh/">https://surge.sh/</a>
      </div>
    </footer>
  </div>
)
