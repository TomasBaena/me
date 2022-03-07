import me from "../assets/me.png";
import diploma from "../assets/diploma.svg";
import work from "../assets/work.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import ring1 from "../assets/ring-1.svg";
import ring2 from "../assets/ring-2.svg";
import ring3 from "../assets/ring-3.svg";
import breadhoundIcon from "../assets/projects/breadhound.png";
import lumakiIcon from "../assets/projects/lumaki.svg";
import fitrIcon from "../assets/projects/fitr.png";
import thisIcon from "../assets/projects/this.png";

import { Grid, Row, Col } from "./grid";
import { LifeEvent, Icon, Event } from "./life-event";
import { Project } from "./project";

import "../styles/home.css";
import { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    // this.state = { color : '#4cb96b' };
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col size={1} hide="xs" />
          <Col
            className="center-container"
            size={4}
            justify="center"
            textAlign="center"
          >
            <Row
              justify="center"
              alignItems="center"
              textAlign="center"
              wrap="wrap"
            >
              <Col
                className="spaceship-container"
                size={1}
                justify="center"
                alignItems="center"
              >
                <img className="me" src={me} />
                <img className="ring-1" src={ring1} />
                <img className="ring-2" src={ring2} />
                <img className="ring-3" src={ring3} />
              </Col>
              <Col size={1} justify="center" textAlign="left">
                <p className="bio">
                  Welcome to my little space on the internet, I hope you stick
                  around. If you'd like to reach me, shoot me a message on
                  LinkedIn. Have a great day!
                </p>
                <div className="links-container">
                  <a href="https://www.linkedin.com/in/tomasbaena/">
                    <img src={linkedin}></img>
                  </a>
                  <a href="https://github.com/tomasbaena">
                    <img src={github}></img>
                  </a>
                </div>
              </Col>
            </Row>

            <Row justify="center" wrap="wrap" topMargin="25px">
              <Col size={1} justify="flex-start">
                <LifeEvent justify="center">
                  <Icon src={diploma}></Icon>
                  <Event>
                    <b>BSc. Honours Computer Science</b>
                    <br></br> Wilfrid Laurier University
                  </Event>
                </LifeEvent>
              </Col>
              <Col size={1} justify="flex-start">
                <LifeEvent justify="center">
                  <Icon src={work}></Icon>
                  <Event>
                    <b>Software Developer</b>
                    <br></br> Shopify
                  </Event>
                </LifeEvent>
              </Col>
            </Row>

            <Row justify="center" wrap="wrap" topMargin="25px">
              <Col size={1}>
                <Project route="#/breadhound" src={breadhoundIcon}></Project>
              </Col>
              <Col size={1}>
                <Project route="#/lumaki" src={lumakiIcon}></Project>
              </Col>
              <Col size={1}>
                <Project route="#/fitr" src={fitrIcon}></Project>
              </Col>
              <Col size={1}>
                <Project route="#/this" src={thisIcon}></Project>
              </Col>
            </Row>
          </Col>
          <Col size={1} hide="xs" />
        </Row>
      </Grid>
    );
  }
}
export default Home;
