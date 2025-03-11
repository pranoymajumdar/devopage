import Logo from "@/components/logo";
import Navigation from "./navigation";
import Footer from "./footer";

const LeftSidebar = () => {
  return (
    <div className="hidden md:flex flex-col justify-between w-[250px] border-r h-screen fixed overflow-hidden">
      <div className="flex flex-col">
        <Logo className="p-4" />
        <Navigation />
      </div>
      <Footer />
    </div>
  );
};

export default LeftSidebar;
