import { type PageProps } from "$fresh/server.ts";
import { Header } from "../components/Header.tsx";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>prestigerank</title>
      </head>
      <body>
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <Header />
          <Component />
        </div>
      </body>
    </html>
  );
}
