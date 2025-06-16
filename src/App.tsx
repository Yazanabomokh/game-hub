import {
  ActionBar,
  Button,
  Checkbox,
  ClientOnly,
  CloseButton,
  IconButton,
  Portal,
  Skeleton,
} from "@chakra-ui/react";
import {
  ColorModeButton,
  DarkMode,
  LightMode,
  useColorMode,
  useColorModeValue,
} from "@/components/ui/color-mode";
import { useEffect, useState } from "react";
import { LuMoon, LuShare, LuSun, LuTrash2 } from "react-icons/lu";

function App() {
  const { toggleColorMode, colorMode } = useColorMode();
  const [checked, setChecked] = useState(false);
  return (
    <>
      <ClientOnly fallback={<Skeleton boxSize="8" />}>
        <IconButton onClick={toggleColorMode} variant="outline" size="sm">
          {colorMode === "light" ? <LuSun /> : <LuMoon />}
        </IconButton>
      </ClientOnly>
      <br />
      <br />
      <Checkbox.Root
        checked={checked}
        onCheckedChange={(e) => setChecked(!!e.checked)}
      >
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <Checkbox.Label>Show Action bar</Checkbox.Label>
      </Checkbox.Root>

      <ActionBar.Root
        open={checked}
        onOpenChange={(e) => setChecked(e.open)}
        closeOnInteractOutside={false}
      >
        <Portal>
          <ActionBar.Positioner>
            <ActionBar.Content>
              <ActionBar.SelectionTrigger>
                2 selected
              </ActionBar.SelectionTrigger>
              <ActionBar.Separator />
              <Button variant="outline" size="sm">
                <LuTrash2 />
                Delete
              </Button>
              <Button variant="outline" size="sm">
                <LuShare />
                Share
              </Button>
              <ActionBar.CloseTrigger asChild>
                <CloseButton size="sm" />
              </ActionBar.CloseTrigger>
            </ActionBar.Content>
          </ActionBar.Positioner>
        </Portal>
      </ActionBar.Root>
    </>
  );
}

export default App;
