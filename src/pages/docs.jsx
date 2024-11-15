import { Line, Layer, Stage, Circle } from "react-konva";
import { useEffect, useRef, useState } from "react";

import DefaultLayout from "@/layouts/default.jsx";

export default function DocsPage() {
  const stageDivRef = useRef();

  const [stageDivSize, setStageDivSize] = useState({ width: 0, height: 0 });

  // 定位计算 依据界面变更半径
  const circle1 = { x: 50, y: 50 };
  const circle2 = { x: 300, y: 300 };

  useEffect(() => {
    const updateSize = () => {
      if (stageDivRef.current) {
        setStageDivSize({
          width: stageDivRef.current?.offsetWidth,
          height: stageDivRef.current?.offsetHeight,
        });
      }
    };

    updateSize();

    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);
  return (
    <DefaultLayout>
      <div className="flex justify-center items-center w-full h-full">
        <div className="bg-gray-50 rounded-lg flex w-1/2 h-full justify-center items-center">
          代码编辑区域
        </div>
        <div
          ref={stageDivRef}
          className="bg-gray-50 rounded-lg flex w-1/2 h-full justify-center items-center"
        >
          <Stage
            className="bg-gray-100 rounded-lg h-full w-full"
            height={stageDivSize.height}
            width={stageDivSize.width}
          >
            <Layer>
              {/* Line connecting the two circles */}
              <Line
                points={[circle1.x, circle1.y, circle2.x, circle2.y]} // Coordinates for the line (x1, y1, x2, y2)
                stroke="black" // Line color
                strokeWidth={2} // Line width
              />

              {/* First circle */}
              <Circle
                draggable
                fill="grey"
                width={100}
                height={100}
                x={circle1.x}
                y={circle1.y}
              />

              {/* Second circle */}
              <Circle
                draggable
                fill="grey"
                width={100}
                height={100}
                x={circle2.x}
                y={circle2.y}
              />
            </Layer>
          </Stage>
        </div>
      </div>
    </DefaultLayout>
  );
}
