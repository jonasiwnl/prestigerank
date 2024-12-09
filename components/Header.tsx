export const Header = () => {
  return (
    <header class="flex items-center max-screen-w-md mx-auto justify-between h-14 min-w-[320px] w-full font-semibold">
      <a href="/">
        <div class="flex items-center hover:text-orange-400">
          <img
            class="mr-1"
            src="/logo.svg"
            width="30"
            height="30"
            alt="the PrestigeRank logo: a crown"
          />
          prestigerank
        </div>
      </a>
      <div class="flex justify-between w-1/2 mx-12">
        <a class="hover:text-orange-400" href="/">Rankings</a>
        <a class="hover:text-orange-400" href="/battle">Battle</a>
        <a class="hover:text-orange-400" href="/add">Add</a>
      </div>
    </header>
  );
};
