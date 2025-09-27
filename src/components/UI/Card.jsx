import PropTypes from "prop-types";
import "./Card.scss";

{
  /*6. CardContainer returns its children*/
}
export function CardContainer(props) {
  return <div className="cardContainer"> {props.children}</div>;
}

{
  /*9. Card returns its children*/
}
export function Card(props) {
  return <div className="card"> {props.children}</div>;
}

CardContainer.propTypes = {
  children: PropTypes.node,
};
Card.propTypes = {
  children: PropTypes.node,
};
