import SettingsSvg from "./Icons/SettingsSvg";

function Header() {
  return (
    <header className='flex items-center justify-between py-2 md:py-4 md:px-10'>
      <h1 className="text-center md:text-left font-bold md:text-lg">
        Quotes generator
      </h1>
      {/* <div onClick={}>
        <SettingsSvg />
      </div> */}
    </header>
  );
}

export default Header;
