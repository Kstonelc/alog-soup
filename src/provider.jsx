import { NextUIProvider } from "@nextui-org/system";
import { useNavigate, useHref } from "react-router-dom";

export function Provider({ children }) {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate} useHref={useHref}>
      {children}
    </NextUIProvider>
  );
}
