import "./Button.css";

const Button = (props) => {
  return <button className="btn"
  style={{backgroundColor:props.Buttoncolor}}
      onClick={props.onClick}
    >{props.text}
  </button>;
};

export default Button;
