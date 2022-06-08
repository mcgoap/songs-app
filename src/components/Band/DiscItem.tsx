import "./DiscItem.css";
import Container from "../UI/Container";

const DiscItem = (props: any) => {
  return (
    <Container className="disc-item">
      <img src={props.cover} alt="cover"></img>
      <h3>{props.name}</h3>
      <p>{props.year}</p>
    </Container>
  );
};

export default DiscItem;
