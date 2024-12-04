export const Header = () => {
  return (
    <header class="flex items-center max-screen-w-md mx-auto justify-between">
      <div>
        <a href="/">
          Cool Logo
        </a>
      </div>
      <div class="flex space-between">
        <a href="/">Ranking</a>
        <a href="/battle">Battle</a>
        <a href="/add">Add</a>
      </div>
    </header>
  );
};
