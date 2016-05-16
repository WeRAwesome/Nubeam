import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const homeClass = location.pathname === "/" ? "active" : "";
    const aboutClass = location.pathname.match(/^\/about/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle Navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li data-slide="1" class={homeClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}><a id="menu-link-1">Home</a></IndexLink>
              </li>
              <li data-slide="2" class={aboutClass}>
                <Link to="about" onClick={this.toggleCollapse.bind(this)}><a id="menu-link-2">About</a></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
