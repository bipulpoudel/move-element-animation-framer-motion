import Image from "next/image";
import Navbar from "./navbar";

const Header = () => {
  return (
    <header className="px-5 bg-background w-full flex items-center fixed top-0 left-0 z-[100] h-16 shadow-sm">
      <div className="flex items-center gap-20 h-full">
        <Image src="/logo.png" alt="Logo" height={25} width={60} />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
