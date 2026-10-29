
function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-800 to-sky-400 px-5 py-10 text-center text-white sm:py-12">
      <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
        My Personal Profile
      </h1>

      <div className="mx-auto my-4 h-1 w-16 rounded-full bg-blue-200"></div>

      <p className="text-base leading-7 text-blue-50 sm:text-lg">
        Learning, Building and Growing
      </p>
    </header>
  );
}

export default Header;
