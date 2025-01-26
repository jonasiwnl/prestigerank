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
      <div class="flex justify-right w-1/2 ml-12">
        <div class="flex mr-10">
          <img width="20" height="20" src="/leaderboard.svg" />
          <a class="hover:text-orange-400 ml-1" href="/">rankings</a>
        </div>
        <div class="flex">
          <img width="14" height="14" src="/swords-crossed.svg" />
          <a class="hover:text-orange-400 ml-1" href="/battle">battle</a>
        </div>
        {/* <a class="hover:text-orange-400" href="/add">add a company</a> */}
      </div>
    </header>
  );
};
