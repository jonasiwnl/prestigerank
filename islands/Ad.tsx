import { useEffect } from "preact/hooks";

export function Ad() {
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
    document.body.appendChild(script);
  }, []);

  return <div />;
}
