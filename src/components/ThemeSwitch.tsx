import { useEffect, useState } from "react";

type Props = {
  changeTheme: (theme: string) => void;
};

function ThemeSwitch({ changeTheme }: Props) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    const thm = theme === "light" ? "dark" : "light";
    setTheme(thm);
    changeTheme(thm);
    localStorage.setItem("theme", thm);
  };
  useEffect(() => {
    document.body.className = `bg-${theme}`;
    // document.body.style.backgroundColor =
    //   theme === "light" ? "#ffffff" : "#333333";
  }, [theme]);
  return (
    <div>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "dark" : "light"}
      </button>
    </div>
  );
}

export default ThemeSwitch;
