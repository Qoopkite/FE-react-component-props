import Box from "../components/Box/Box";
import Circle from "../components/Circle/Circle";

const BoxAlign = () => {
  const circleColorArr = [
    "pink",
    "red",
    "black",
    "gray",
    "green",
    "blue",
    "orange",
  ];
  return (
    <div>
      <Box boxColor="red" text="box"/>
      <Box boxColor="blue" text="box"/>
      <Box boxColor="green" text="box"/>
      <Box boxColor="pink" text="box"/>
      <div className="circle2">
      {circleColorArr.map((circle) => (
        <Circle CircleColor={circle}></Circle>
      ))}
      </div>

    </div>
  );
};

export default BoxAlign;
