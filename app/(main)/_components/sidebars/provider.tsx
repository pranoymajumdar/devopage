import type { ReactNode } from "react";
import { LeftSidebar } from "./left";
import { RightSidebar } from "./right";

type Props = {
  children: ReactNode;
};

const SidebarProvider = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen">
      <LeftSidebar />
      <main className="flex-1 flex justify-center px-4">{children}</main>
      <RightSidebar />
    </div>
  );
};

export default SidebarProvider;
