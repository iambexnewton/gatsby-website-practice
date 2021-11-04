import React from "react"
import Layout from "../components/Layout"

export default function About() {
  return (
    <Layout>
      <div>
        <h1>About Page</h1>
        <p>This is a little project for me to learn the basics of Gatsby.</p>
        <h2>What is Gatsby?</h2>
        <p>
          Gatsby is an open source framework which enables developers to build
          fast, secure websites using a React based framework
        </p>
        <h2>What did I learn during the project?</h2>
        <p>
          In the project I used dynamic data and static metadata. Which was
          rendered by using Gatsby plugins
        </p>
        <p>
          During the project I learned about queries, template components,
          markdown files and how to render the information dynamically.
        </p>
        <div>
          <em>
            *This project uses images provided from an out of date Gatsby
            tutorial.
          </em>
        </div>
      </div>
    </Layout>
  )
}
