import { useEffect, useState } from "react";
import { Group, Arrow } from "react-konva";

import { Circle } from "./common/Circle.jsx";

const SingleLinkedListRender = ({ linkedList }) => {
  const [parseRes, setParseRes] = useState([]);

  useEffect(() => {
    if (linkedList.values) {
      setParseRes(linkedList.values);
    }
  }, [linkedList]);

  return (
    <Group>
      {parseRes &&
        parseRes.map((item, index) => {
          return (
            <Group key={index}>
              <Circle
                key={index}
                circleX={100 + index * 80}
                circleY={100}
                value={item}
              />
              {index < parseRes.length - 1 && (
                <Arrow
                  fill="black"
                  pointerLength={10}
                  pointerWidth={10}
                  points={[
                    100 + index * 80 + 20,
                    100,
                    100 + index * 80 + 60,
                    100,
                  ]}
                  stroke="black"
                  strokeWidth={1}
                />
              )}
            </Group>
          );
        })}
    </Group>
  );
};

export default SingleLinkedListRender;
