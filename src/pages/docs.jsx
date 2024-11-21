import { Line, Layer, Stage, Circle } from "react-konva";
import { useEffect, useRef, useState } from "react";

import DefaultLayout from "@/layouts/default.jsx";
import { SoupLinkedList } from "@/utils/SoupLinkedList.js";
import LinkedListRender from "@/components/LinkedListRender.jsx";
import { Button } from "@nextui-org/button";

export default function AlgoDemo() {
  const stageDivRef = useRef();

  const [stageDivSize, setStageDivSize] = useState({ width: 0, height: 0 });
  const [linkedList, setLinkedList] = useState({});

  useEffect(() => {
    updateSize();

    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const updateSize = () => {
    if (stageDivRef.current) {
      setStageDivSize({
        width: stageDivRef.current?.offsetWidth,
        height: stageDivRef.current?.offsetHeight,
      });
    }
  };

  const handleAppendNode = (nodeList) => {
    const node = new SoupLinkedList();
    let index = 0;

    const intervalId = setInterval(() => {
      if (index < nodeList.length) {
        node.append(nodeList[index]);
        console.log(111, node.getList());
        setLinkedList(node.getList());
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 1000); // 每秒更新一次
  };

  return (
    <DefaultLayout>
      <div className="flex justify-center items-center w-full h-full">
        <div className="bg-gray-50 rounded-lg flex w-1/3 h-full justify-center items-center">
          代码编辑区域
        </div>
        <Button
          onClick={() => {
            handleAppendNode([11, 22, 33, 44]);
          }}
        >
          执行
        </Button>
        <div
          ref={stageDivRef}
          className="bg-gray-50 rounded-lg flex w-2/3 h-full justify-center items-center"
        >
          <Stage
            className="bg-gray-100 rounded-lg h-full w-full"
            height={stageDivSize.height}
            width={stageDivSize.width}
          >
            <Layer>
              <LinkedListRender linkedList={linkedList} />
            </Layer>
          </Stage>
        </div>
      </div>
    </DefaultLayout>
  );
}
