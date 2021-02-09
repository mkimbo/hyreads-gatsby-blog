import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Card from "react-md/lib/Cards/Card"
import CardTitle from "react-md/lib/Cards/CardTitle"
import CardText from "react-md/lib/Cards/CardText"
import Avatar from "react-md/lib/Avatars"
import FontIcon from "react-md/lib/FontIcons"
import { ExpansionList, ExpansionPanel, Slider } from "react-md"
import UserLinks from "../UserLinks"
import config from "../../../data/SiteConfig"
import "./About.scss"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Hyblog.png" }) {
        childImageSharp {
          fluid {
            srcWebp
          }
        }
      }
    }
  `)
  return (
    <div className="about-container md-grid mobile-fix">
      <Card className="md-grid md-cell--8">
        <div className="about-wrapper">
          <h1 className="about-text md-body-1">
            The Official Blog from Hyreads
          </h1>
          <Img fluid={data.file.childImageSharp.fluid} />
          <CardText>
            <p className="about-text md-body-1">{config.userDescription}</p>
          </CardText>
          <UserLinks labeled config={config} />
        </div>
      </Card>

      <Card className="md-grid md-cell--8">
        <CardTitle
          title="FAQS"
          avatar={<Avatar icon={<FontIcon>comment</FontIcon>} />}
        />
        <div className="about-wrapper">
          <CardText>
            <ExpansionList>
              <ExpansionPanel label="How do I join Hyreads?" defaultExpanded>
                <p>
                  Eiusmod commodo pariatur cillum duis culpa cupidatat amet esse
                  non deserunt amet. Dolor sunt velit labore est nulla ad ea.
                  Dolor aute in ipsum id voluptate. Ea duis ullamco labore
                  veniam cupidatat nostrud ex. Adipisicing tempor incididunt
                  nulla pariatur est magna officia magna cupidatat ad. Do
                  incididunt mollit pariatur qui.
                </p>
                <Slider id="expansion-slider" />
              </ExpansionPanel>
              <ExpansionPanel label="Eiusmod commodo pariatur cillum duis culpa cupidatat amet esse">
                <p>
                  Eiusmod commodo pariatur cillum duis culpa cupidatat amet esse
                  non deserunt amet. Dolor sunt velit labore est nulla ad ea.
                  Dolor aute in ipsum id voluptate. Ea duis ullamco labore
                  veniam cupidatat nostrud ex. Adipisicing tempor incididunt
                  nulla pariatur est magna officia magna cupidatat ad. Do
                  incididunt mollit pariatur qui.
                </p>
              </ExpansionPanel>
              <ExpansionPanel label="Once More!">
                <p>
                  Eiusmod commodo pariatur cillum duis culpa cupidatat amet esse
                  non deserunt amet. Dolor sunt velit labore est nulla ad ea.
                  Dolor aute in ipsum id voluptate. Ea duis ullamco labore
                  veniam cupidatat nostrud ex. Adipisicing tempor incididunt
                  nulla pariatur est magna officia magna cupidatat ad. Do
                  incididunt mollit pariatur qui.
                </p>
              </ExpansionPanel>
            </ExpansionList>
          </CardText>
          <UserLinks labeled config={config} />
        </div>
      </Card>
    </div>
  )
}

export default About
