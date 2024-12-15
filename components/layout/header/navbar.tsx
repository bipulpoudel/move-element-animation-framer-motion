"use client";
import { useMemo } from "react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const items = [
  {
    label: "Product",
    hasChildren: true,
  },
  {
    label: "Solutions",
    hasChildren: true,
  },
  {
    label: "Resources",
    hasChildren: true,
  },
  { label: "Pricing", hasChildren: false, href: "/pricing" },
];

const secondaryItems = [
  {
    label: "Wix Studio",
    hasChildren: false,
  },
  {
    label: "Enterprise",
    hasChildren: false,
  },
];

const Navbar = () => {
  const [showContent, setShowContent] = useState("");
  return (
    <nav className="h-full flex items-center relative">
      {items.map((item) => (
        <NavItem
          key={item.label}
          label={item.label}
          hasChildren={item.hasChildren !== undefined ? item.hasChildren : true}
          showContent={showContent}
          setShowContent={setShowContent}
        />
      ))}

      <Separator orientation="vertical" className="h-5 bg-primary mx-3" />

      {secondaryItems.map((item) => (
        <NavItem
          key={item.label}
          label={item.label}
          hasChildren={item.hasChildren !== undefined ? item.hasChildren : true}
          showContent={showContent}
          setShowContent={setShowContent}
        />
      ))}

      {showContent && showContent !== "" && (
        <>
          {/* Overlay */}
          <div
            className="fixed top-16 left-0 w-full h-full bg-black bg-opacity-40 z-9"
            onClick={() => setShowContent("")}
          />

          {/* Menu Content */}
          <NavbarMenuContent showContent={showContent} />
        </>
      )}
    </nav>
  );
};

export default Navbar;

const NavItem = ({
  label,
  hasChildren = true,
  showContent,
  setShowContent,
}: {
  label: string;
  hasChildren?: boolean;
  showContent?: string;
  setShowContent?: (value: string) => void;
}) => {
  const handleClick = () => {
    if (setShowContent) {
      // If the item has no children, we should navigate to the href
      if (hasChildren === false) {
        setShowContent("");
        return;
      }

      if (showContent === label) {
        return setShowContent("");
      }

      setShowContent(label);
    }
  };

  return (
    <div
      className={cn(
        "flex items-center gap-3 px-5 cursor-pointer h-full border-b-4 border-transparent group",
        showContent === label ? "border-primary" : ""
      )}
      onClick={handleClick}
    >
      <span className="invisible font-bold text-base">{label}</span>
      <span className="absolute group-hover:font-bold text-base transition-all duration-200">
        {label}
      </span>

      {hasChildren && (
        <ChevronDown
          className={cn(
            "w-5 h-5",
            showContent === label
              ? "transform rotate-180 transition-all duration-200"
              : ""
          )}
        />
      )}
    </div>
  );
};

const NavbarMenuContent = ({ showContent }: { showContent: string }) => {
  const animate = useMemo(() => {
    return showContent
      ? { height: "32rem", opacity: 1 }
      : { height: 0, opacity: 0 };
  }, [showContent]);
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={animate}
      transition={{ duration: 0.3 }}
      className="fixed top-16 border-t left-0 w-full shadow p-5 z-10 bg-background overflow-hidden"
    >
      Menu content for {showContent}
    </motion.div>
  );
};
