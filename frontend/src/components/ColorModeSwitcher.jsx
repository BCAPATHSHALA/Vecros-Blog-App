import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <>
      {false && (
        <IconButton
          zIndex={"overlay"}
          variant="ghost"
          color="current"
          pos={"fixed"}
          top={"2"}
          right={"6"}
          onClick={toggleColorMode}
          icon={<SwitchIcon />}
          {...props}
        />
      )}
    </>
  );
};

export default ColorModeSwitcher;
