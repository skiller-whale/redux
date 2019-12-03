import React from "react"

class Navbar extends React.Component {
  render() {
    return <nav className="navbar navbar-default">
            <div className="container">
              <div className="navbar-header">
                <span className="navbar-brand">{this.props.name}</span>
              </div>
            </div>
          </nav>
  }
}

export default Navbar
