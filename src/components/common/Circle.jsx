import { Circle as CircleKonva, Text } from "react-konva";

const Circle = ({ key, value, circleX, circleY }) => {
  const radius = 20; // Circle 的半径
  return (
    <div key={key}>
      <CircleKonva
        fill="grey"
        radius={radius}
        stroke="grey"
        strokeWidth={4}
        x={circleX}
        y={circleY}
      />
      <Text
        align="center"
        fill="white"
        fontSize={15}
        text={value}
        width={radius * 2}
        x={circleX - radius}
        y={circleY - 6}
      />
    </div>
  );
};

export { Circle };
