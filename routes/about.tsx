export default function About() {
  return (
    <div class="w-2/3">
      <p class="font-semibold mt-16">
        I made this as a successor to{" "}
        <a
          class="hover:text-primary underline"
          href="https://prestigehunt.com"
          target="_blank"
        >
          prestigehunt.com
        </a>. I was saddened that the rankings were no longer being updated, so
        I decided to make my own.
      </p>
      <p class="font-semibold mt-8">
        Anyway, a lot of people complain about these rankings. If you disagree with the algorithm, feel free to <a href="https://github.com/jonasiwnl/prestigerank/pulls" class="hover:text-primary underline" target="_blank">open a PR</a>. It just follows <a href="https://en.wikipedia.org/wiki/Elo_rating_system" class="hover:text-primary underline" target="_blank">this Wikipedia article</a> with a k-factor of between 0 and 2000, so more battles means a company's elo will be less volatile.
      </p>
      <p class="font-semibold mt-8">
        So far, it seems like no one has been able to exploit the rankings (I may be wrong on this, as a friend told me in the past that eBay was at #1.)
        But I encourage people to try, just because it would be interesting. I'll even tell you how it works. For each generated battle, a token is generated and stored
        along with the request IP. When a certain company is picked, the IP and token sent along with the company choice must match what's stored on the backend. If it doesn't
        the request is rejected. Tokens are swept every 24h or so, so I guess you could get really unlucky. There's also rate limiting based on token generation and IP but it's pretty generous iirc.
      </p>
      <p class="font-semibold mt-8">
        People also frequently request for certain companies to be added. This is easy but tedious for me (~1min) as I haven't automated it yet and I'm very lazy, so bear with me; I'll add them eventually.
      </p>
    </div>
  );
}
