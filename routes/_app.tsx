import { type PageProps } from "$fresh/server.ts";
import { Partial } from "$fresh/runtime.ts";
import { Footer } from "../components/Footer.tsx";
import { Header } from "../components/Header.tsx";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>prestigerank</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
        />
      </head>
      <body f-client-nav class="bg-background text-foreground">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center px-4">
          <Header />
          <Partial name="page">
            <Component />
          </Partial>
          <Footer />
        </div>
      </body>
    </html>
  );
}
