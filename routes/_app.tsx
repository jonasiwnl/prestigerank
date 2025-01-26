import { type PageProps } from "$fresh/server.ts";
import { Footer } from "../components/Footer.tsx";
import { Header } from "../components/Header.tsx";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>prestigerank</title>
      </head>
      <body class="bg-orange-50">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center px-4">
          <Header />
          <Component />
          <Footer />
        </div>
      </body>
    </html>
  );
}
