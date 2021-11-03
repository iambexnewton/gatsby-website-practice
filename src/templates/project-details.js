import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { details, featured } from "../styles/projects-details.module.css"

export default function ProjectDetails() {
  return (
    <Layout>
      <div className={details}>
        <h2>title</h2>
        <h3>stack</h3>
        <div className={featured}>
          {/* <GatsbyImage /> */}
          {/* image={getImage(project.frontmatter.thumb)}
                  alt="project image" */}
        </div>
        {/* <div className={html} dangerouslySetInnerHTML={} /> */}
      </div>
    </Layout>
  )
}
