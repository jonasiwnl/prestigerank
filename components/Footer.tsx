export const Footer = () => {
  return (
    <footer class="flex gap-6 w-full mt-28 mb-10 min-w-[320px] font-semibold">
      <p>© 2026</p>
      <a class="hover:text-primary" href="/about">
        <p>about</p>
      </a>
      <a class="hover:text-primary" href="/contact">
        <p>contact</p>
      </a>
      <a class="hover:text-primary" href="/privacy">
        <p>privacy</p>
      </a>
      <a
        class="hover:text-primary"
        href="https://github.com/jonasiwnl/prestigerank"
      >
        <p>github</p>
      </a>
    </footer>
  );
};
