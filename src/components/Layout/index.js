import React from "react"
import Navbar from "../Navbar"
import "@styles/global.scss"

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p>Copyright 2022 Moazam Hussain</p>
      </footer>
    </div>
  )
}
