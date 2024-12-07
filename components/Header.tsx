export const Header = () => {
  return (
    <header class="flex items-center max-screen-w-md mx-auto justify-between h-14 min-w-[320px] w-full font-semibold">
      <a href="/">
        Cool Logo
      </a>
      <div class="flex justify-between w-1/2 mx-12">
        <a href="/">Rankings</a>
        <a href="/battle">Battle</a>
        <a href="/add">Add</a>
      </div>
    </header>
  );
};
