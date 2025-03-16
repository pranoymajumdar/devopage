import Logo from "@/components/logo";

export const TopNav = () => {
  return (
    <div className="bg-background/80 sticky top-0 z-50 block h-14 w-full border-b backdrop-blur-lg md:hidden">
      <div className="">
        <Logo className="p-4" size="sm" />
      </div>
    </div>
  );
};
