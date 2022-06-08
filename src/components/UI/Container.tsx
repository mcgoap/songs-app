import "./Container.css";

const Container = (props: any) => {
  const classes = "container " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Container;
