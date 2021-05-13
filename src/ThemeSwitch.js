import React, { useContext } from "react";

import Switch from "react-switch";
import { IoMdSunny, IoMdMoon } from "react-icons/all";

import { ThemeContext } from "./Provider";

const ThemeSwitch = () => {
  const { setTheme, mode } = useContext(ThemeContext);
  return (
    <Switch
      checked={mode === "light" ? true : false}
      height={25}
      width={60}
      offColor="#1d1f2f"
      onColor="#FDB813"
      className="my-auto m-3"
      checkedIcon={<IoMdSunny className="SwitchIcon light" />}
      uncheckedIcon={<IoMdMoon className="SwitchIcon dark" />}
      onChange={setTheme}
    />
  );
};

export default ThemeSwitch;
