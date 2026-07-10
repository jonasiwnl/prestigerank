import { useEffect, useRef } from "preact/hooks";

export function Ad() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (window as any).atOptions = {
      key: "27ef6b090f99c5183fb8998d9f8e132e",
      format: "iframe",
      height: 50,
      width: 320,
      params: {},
    };

    const script = document.createElement("script");
    script.src =
      "https://www.highperformanceformat.com/27ef6b090f99c5183fb8998d9f8e132e/invoke.js";

    ref.current?.appendChild(script);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        width: "320px",
        height: "50px",
        margin: "0 auto",
      }}
    />
  );
}