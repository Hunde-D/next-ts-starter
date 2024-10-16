"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const [currTheme, setCurrTheme] = React.useState("light");
  const { setTheme } = useTheme();

  const toggleTheme = () => {
    setCurrTheme(currTheme === "dark" ? "light" : "dark");
    setTheme(currTheme);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="border-none shadow-none"
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-primary transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 text-primary transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
