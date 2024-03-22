import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header className="fixed w-full py-3.5 z-20 backdrop-blur-md">
      <div className="mx-auto max-w-3xl px-5 flex justify-between items-center">
        <h1 className="text-xl font-bold">expense.</h1>
        <div>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
