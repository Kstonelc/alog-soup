import { Allotment } from "allotment";
import "allotment/dist/style.css";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { IoCheckboxOutline, IoTerminalOutline } from "react-icons/io5";

import { Layer, Stage } from "react-konva";
import CodeEditor from "@/components/common/CodeEditor";

const AlgoPanel = () => {
  const [codeEditorHeight, setCodeEditorHeight] = useState(0);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="h-screen w-screen bg-black">
      <div className={"h-12 w-full bg-black flex items-center px-2"}>
        <div className="flex w-full h-full ">
          {/* eslint-disable-next-line react/no-unknown-property */}
          <style global={"true"} jsx="true">{`
            @import url("https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Lobster&display=swap");
          `}</style>
          <h3 className="text-xl tracking-tight flex flex-col sm:flex-row items-center">
            {/*<span className="font-['Bungee_Shade'] text-blue-600 mb-2 sm:mb-0">*/}
            {/*  Algo SoupBun*/}
            {/*</span>*/}
            <span className="font-['Lobster'] text-white text-2xl sm:text-2xl sm:ml-2">
              Algo SoupBun
            </span>
          </h3>
        </div>
      </div>
      <div
        style={{
          height: window.innerHeight - 50,
          width: "100%",
        }}
      >
        <Allotment className="h-full w-full" separator={false} vertical={false}>
          <Allotment.Pane className={"p-1"} maxSize={500} minSize={400}>
            <div className=" h-full w-full rounded-xl bg-[#262626]">
              <div
                className={
                  "flex flex-row gap-0.5 p-1 bg-[#333333] rounded-t-xl"
                }
              >
                <Button
                  className={"text-white bg-[#262626] hover:bg-[#444444]"}
                  size={"sm"}
                >
                  描述
                </Button>
                <Button
                  className={"text-white bg-[#262626] hover:bg-[#444444]"}
                  size={"sm"}
                >
                  题解
                </Button>
              </div>
              <div className={"text-white p-4 text-2xl"}>链表</div>
            </div>
          </Allotment.Pane>
          <Allotment.Pane className={"p-1"} minSize={300}>
            <div className=" h-full w-full">
              <div className=" h-full w-full rounded-xl bg-[#262626]">
                <div
                  className={
                    "flex flex-row gap-0.5 p-1 bg-[#333333] rounded-t-xl"
                  }
                >
                  <Button
                    className={"text-white bg-[#262626] hover:bg-[#444444]"}
                    disabled={true}
                    size={"sm"}
                  >
                    <IoTerminalOutline color={"green"} size={15} />
                    代码
                  </Button>
                </div>
                <Allotment
                  vertical={true}
                  separator={false}
                  onChange={(value) => {
                    const codeEditorHeight = value[0];
                    setCodeEditorHeight(codeEditorHeight);
                  }}
                >
                  <Allotment.Pane maxSize={600} minSize={400}>
                    <div className="h-full w-full bg-[#444444] p-0.5 rounded-small">
                      <CodeEditor height={codeEditorHeight} />
                    </div>
                  </Allotment.Pane>
                  <Allotment.Pane maxSize={600} minSize={200}>
                    <div className="h-full w-full bg-[#62626] p-0.5 rounded-xl">
                      <div
                        className={
                          "flex flex-row gap-0.5 p-1 bg-[#333333] rounded-t-xl"
                        }
                      >
                        <Button
                          className={
                            "text-white bg-[#262626] hover:bg-[#444444]"
                          }
                          disabled={true}
                          size={"sm"}
                        >
                          <IoCheckboxOutline color={"green"} size={15} />
                          测试用例
                        </Button>
                      </div>
                    </div>
                  </Allotment.Pane>
                </Allotment>
              </div>
            </div>
          </Allotment.Pane>
          <Allotment.Pane maxSize={700} minSize={600}>
            <div className=" h-full w-full p-1">
              <Stage className="bg-[#333333] rounded-lg h-full w-full">
                <Layer></Layer>
              </Stage>
            </div>
          </Allotment.Pane>
        </Allotment>
      </div>
    </div>
  );
};

export default AlgoPanel;
