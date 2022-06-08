import Container from "../UI/Container";
import React, { FC, ReactElement } from "react";
import { Discs } from "../../App";
import DiscItem from "./DiscItem";
import Songs from "./Songs";
import "./DiscBand.css";

interface DiscsProps {
  props: Discs[];
}

const DiscsBand: FC<DiscsProps> = ({ props }: DiscsProps): ReactElement => {
  return (
    <Container className="albuns">
      <h2>Discography</h2>
      <div className="albuns-list">
        {props.map((album) => (
          <div className="album" key={album.id}>
            <DiscItem name={album.name} year={album.year} cover={album.cover} />
            <Songs songs={album.songs} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default DiscsBand;
