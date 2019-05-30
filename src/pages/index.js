import React from "react"

import Layout from "../components/layout"

const projects = [
  {
    href: `https://github.com/sis-berkeley-edu/calcentral`,
    title: `CalCentral`,
    description: `The UC Berkeley Portal`
  },
  {
    href: `https://github.com/developish/developish`,
    title: `Developish`,
    description: `This site`
  }
]

export default () => (
  <Layout>
    <h2>Projects</h2>

    <ul>
      { projects.map(project => (
        <li key={project.href}>
          <a href={project.href}>
            { project.title }
          </a> - { project.description }
        </li>
      ))}
    </ul>
  </Layout>
)
