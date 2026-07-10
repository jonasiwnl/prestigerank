import { type PageProps } from "$fresh/server.ts";
import { Footer } from "../components/Footer.tsx";
import { Header } from "../components/Header.tsx";
import { Ad } from "../islands/Ad.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-adsense-account" content="ca-pub-6844887814693345"></meta>
        <title>prestigerank</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
        />
      </head>
      <body class="bg-background text-foreground">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center px-4">
          <Header />
          <Component />
          <Footer />
          <Ad />
        </div>
      </body>
    </html>
  );
}
