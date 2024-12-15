import { Flower } from "lucide-react";

import { cn } from "@/lib/utils";

const HomeUI = ({ content }: { content: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col rounded-2xl bg-hero-homeUI-background shadow-lg p-10 px-5 w-[1340px] gap-10 mt-48">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-5">
            <Flower className="w-8 h-8" strokeWidth={3} color="#5d51d1" />

            <NavItem text="home" isActive />
            <NavItem text="shop" />
            <NavItem text="collections" />
            <NavItem text="blog" />
            <NavItem text="about" />
          </div>
          <div className="flex items-center gap-5">
            <NavItem text="cart (1)" />
          </div>
        </div>

        {content}
      </div>
    </div>
  );
};

export default HomeUI;

const NavItem = ({
  text,
  isActive = false,
}: {
  text: string;
  isActive?: boolean;
}) => {
  return (
    <span
      className={cn(
        "font-extrabold text-lg",
        isActive
          ? "bg-hero-homeUI-foreground rounded-full py-[2px] px-4 text-hero-homeUI-background"
          : "text-hero-homeUI-foreground font-semibold"
      )}
    >
      {text}
    </span>
  );
};
