import Logo from "@/components/logo";

export const TopNav = () => {
  return (
    <div className="block md:hidden h-14 bg-background/80 backdrop-blur-lg sticky z-50 top-0 border-b w-full">
      <div className="">
        <Logo className="p-4" size='sm' />
      </div>
    </div>
  );
};

