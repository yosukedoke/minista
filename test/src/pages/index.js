import React from "react"
import { Helmet } from "react-helmet"
import { render, Comment } from "minista"

import AppLayout from "../components/app-layout"

const Home = () => {
  return render(
    <AppLayout>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Comment text="Comment Test" />
      <h1>Hello</h1>
    </AppLayout>
  )
}

export default Home
