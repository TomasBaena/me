import { Redirect } from "react-router";
import styled from "styled-components";
import { Grid, Row, Col } from "./grid";
import "../styles/project.css";
import parse from "html-react-parser";

const ProjectStyle = {
  width: "80px",
  height: "80px",
  "border-radius": "8px",
  overflow: "hidden",
  margin: "10px",
  position: "relative",
};

const ImgStyle = {
  width: "100%",
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "100%",
  transform: "translate(-50%, -50%)",
};

export const Project = (props) => (
  <a style={ProjectStyle} href={props.route}>
    <img style={ImgStyle} src={props.src}></img>
  </a>
);

export const Page = (props) => (
  <Grid className="page">
    <Row alignItems="center">
      <img className="icon" src={props.icon} />
      <p className="title">{props.title}</p>
    </Row>
    <Row topMargin="15px" overflow="scroll">
      {props.pic1 ? (
        <Col>
          <img className="screenshot" src={props.pic1} alt="screenshot1" />
        </Col>
      ) : null}
      {props.pic2 ? (
        <Col>
          <img className="screenshot" src={props.pic2} alt="screenshot2" />
        </Col>
      ) : null}
      {props.pic3 ? (
        <Col>
          <img className="screenshot" src={props.pic3} alt="screenshot3" />
        </Col>
      ) : null}
      {props.pic4 ? (
        <Col>
          <img className="screenshot" src={props.pic4} alt="screenshot4" />
        </Col>
      ) : null}
      {props.pic5 ? (
        <Col>
          <img className="screenshot" src={props.pic5} alt="screenshot5" />
        </Col>
      ) : null}
    </Row>
    {props.link ? (
      <Row alignItems="center" justify="flex-start" topMargin="15px">
        <a target="_blank" href={props.link}>
          Project link
        </a>
      </Row>
    ) : null}
    <Row alignItems="center">
      <Col size={3}>
        <p className="body">{parse(props.body)}</p>
      </Col>
      <Col size={1} hide="xs"></Col>
    </Row>
    <Row alignItems="center" justify="center">
      <a className="close-button" href="/">
        Close
      </a>
    </Row>
  </Grid>
);
