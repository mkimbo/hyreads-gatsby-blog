import React, { Component } from "react"
import Card from "react-md/lib/Cards/Card"
import CardText from "react-md/lib/Cards/CardText"
import UserLinks from "../UserLinks"
import config from "../../../data/SiteConfig"
import "./About.scss"

class About extends Component {
  render() {
    return (
      <div className="about-container md-grid mobile-fix">
        <Card className="md-grid md-cell--8">
          <div className="about-wrapper">
            <h1 className="about-text md-body-1">
              The Official Blog from Hyreads
            </h1>
            <CardText>
              <p className="about-text md-body-1">{config.userDescription}</p>
            </CardText>
            <UserLinks labeled config={config} />
          </div>
        </Card>
      </div>
    )
  }
}

export default About
