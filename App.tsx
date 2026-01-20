import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const sendHeight = () => {
      const height = document.documentElement.scrollHeight;
      window.parent.postMessage(
        { type: "HUSH_RESIZE", height },
        "*"
      );
    };

    sendHeight();
    window.addEventListener("resize", sendHeight);

    return () => {
      window.removeEventListener("resize", sendHeight);
    };
  }, []);

  return (
    <>
      {/* AQUÍ VA TODA TU APP */}
    </>
  );
}
