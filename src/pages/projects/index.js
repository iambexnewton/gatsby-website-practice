import React from "react"
import Layout from "../../components/Layout"
import { portfolio } from "/Users/beckynewton/Desktop/gatsby/practice-website/src/styles/projects.module.css"

export default function Projects() {
  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've created</h3>
      </div>
    </Layout>
  )
}
