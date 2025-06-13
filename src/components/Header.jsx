import { FaRegUser } from "react-icons/fa6";
import LogoKker from "../assets/logo-kker.svg";

function Header() {
  return (
    <header className="bg-[var(--marrom-kker)] min-w-screen flex justify-center items-center">
      <div className="max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl h-20 w-full flex justify-between items-center">
        <div>
          <img
            className="rounded-full"
            src={LogoKker}
            width={60}
            alt="kker logo"
          />
        </div>
        <div className="flex items-center gap-3 text-[var(--laranja-kker)]">
          <span className="text-lg font-medium text-[var(--laranja-kker)]">
            Karla
          </span>
          <button className="rounded-full h-12 w-12 cursor-pointer flex justify-center items-center bg-[var(--marrom-kker-fraco)] p-2 hover:bg-[var(--marrom-kker-hover)] transition-colors duration-200">
            <FaRegUser color="white" size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
