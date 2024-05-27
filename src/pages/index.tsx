import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Navbar from "./components/Navbar"
import Gallery from "./components/Gallery"
import Header from "./Header"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Header></Header>
      <Navbar ></Navbar>
      <Gallery/>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
