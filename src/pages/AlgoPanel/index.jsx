import { Allotment } from "allotment";
import "allotment/dist/style.css";
import { useEffect } from "react";

const AlgoPanel = () => {
  useEffect(() => {
    // 禁用 meta 缩放
    const metaTag = document.createElement("meta");
    metaTag.name = "viewport";
    metaTag.content = "width=device-width, initial-scale=1.0, user-scalable=no";
    document.head.appendChild(metaTag);

    // 禁用手势缩放
    const preventPinchZoom = (event) => {
      if (event.touches && event.touches.length > 1) {
        event.preventDefault();
      }
    };

    document.addEventListener("touchmove", preventPinchZoom, {
      passive: false,
    });

    const preventKeyboardZoom = (event) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        (event.key === "+" || event.key === "-" || event.key === "0")
      ) {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", preventKeyboardZoom);

    const preventZoom = (event) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };

    window.addEventListener("wheel", preventZoom, { passive: false });

    return () => {
      document.head.removeChild(metaTag);
      document.removeEventListener("touchmove", preventPinchZoom);
      document.removeEventListener("keydown", preventKeyboardZoom);
      window.removeEventListener("wheel", preventZoom);
    };
  }, []);

  return (
    <div className="h-screen w-screen bg-black">
      <div className={"h-12 w-full bg-black"} />
      <div
        style={{
          height: window.innerHeight - 50,
          width: "100%",
        }}
      >
        <Allotment className="h-full w-full" vertical={false}>
          <Allotment.Pane className={"p-1"} maxSize={500} minSize={400}>
            <div className=" h-full w-full p-4 border-1 border-gray-500 bg-gray-800 rounded-xl">
              <h2 className="text-lg font-semibold mb-2 text-white">
                Left Panel
              </h2>
            </div>
          </Allotment.Pane>
          <Allotment.Pane minSize={300}>
            <div className=" h-full w-full p-4">
              <h2 className="text-lg font-semibold mb-2 text-white">
                Middle Panel
              </h2>
            </div>
          </Allotment.Pane>
          <Allotment.Pane maxSize={700} minSize={600}>
            <div className=" h-full w-full p-4">
              <h2 className="text-lg font-semibold mb-2 text-white">
                Right Panel
              </h2>
            </div>
          </Allotment.Pane>
        </Allotment>
      </div>
    </div>
  );
};

export default AlgoPanel;
