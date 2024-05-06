import "./Circle.css";

const Circle = (props) => {
  return (
    <div
      className="circle "
      style={{
        backgroundColor: props.CircleColor || "black",
      }}
    >
      <p>{props.text}</p>
    </div>
  );
};

export default Circle;
