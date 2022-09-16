import {
  MantineProvider,
  ColorSchemeProvider,
  AppShell,
  Button,
  Header,
  Group
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { IconArrowsLeft } from "@tabler/icons";
import { DrawerRight } from "./components";
import LayoutComponent from "./components/layout";
import { DefaultGetNextDaysHours } from "./http/defaultGetNextDaysHours";
import { UnsplashDefault } from "./http/unsplashDefault";

function App() {
  const [data, setData] = useState([]);
  const [currentDay, setCurrentDay] = useState({});
  const [cityName, setCityName] = useState("IZMIT");
  const [link, setLink] = useState("");
  const [opened, setOpened] = useState(false);
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  useEffect(() => {
    DefaultGetNextDaysHours().then((res) => {
      setData(res.data.daily);
      setCurrentDay(res.data.current);
    });
    UnsplashDefault().then((res) =>
      setLink(res.data.results[Math.floor(Math.random() * 10)].urls.regular)
    );
  }, []);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <AppShell
          padding="md"
          style={{
            height: "100vh",
          }}
          header={
            <Header height={60} p="xs">
              <Group position="right">
                <Button onClick={() => setOpened(true)}>
                  <IconArrowsLeft size={14} />
                </Button>
              </Group>
            </Header>
          }
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          <div
            style={{
              height: "100%",
              display: "flex",
              width: "100%",
              margin: "auto",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DrawerRight
              opened={opened}
              setOpened={setOpened}
              setData={setData}
              setLink={setLink}
              setCityName={setCityName}
              setCurrentDay={setCurrentDay}
            />
            <LayoutComponent currentDay={currentDay} link={link} cityName={cityName} data={data} />
          </div>
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
