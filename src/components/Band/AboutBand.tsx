import Container from "../UI/Container";
import React, { FC, ReactElement } from "react";
import "./AboutBand.css";
import { Band } from "../../App";

interface BandProps {
  props: Band;
}

const AboutBand: FC<BandProps> = ({ props }: BandProps): ReactElement => {
  const listMembers = props.people.map((person: string, i) => (
    <li key={i}>{person}</li>
  ));

  return (
    <Container className="about-band">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <h2>Members:</h2>
      <ul>{listMembers}</ul>
    </Container>
  );
};

export default AboutBand;
