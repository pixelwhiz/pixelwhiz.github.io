import * as React from "react"
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps, Button,
} from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"
import {FaGithub} from "react-icons/all";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue("dark", "light")
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  return (
      <Button variant="solid" onClick={toggleColorMode} className={"flex gap-2"}>
        <SwitchIcon />
      </Button>
  )
}
