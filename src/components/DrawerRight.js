import React, { useState,useEffect } from "react";
import {
  Drawer,
  useMantineTheme,
  Button,
  Group,
  Autocomplete,
} from "@mantine/core";

import { IconMapSearch, IconMapPin } from "@tabler/icons";
import { ToastContainer, toast } from "react-toastify";
import ThemeChanger from "./DarkLight";
import { Cities } from "../constants/cities";
import { FindLanLong } from "../http/findLanLong";
import { GetNextDaysHours } from "../http/getNextDaysHours";
import { UnsplashGetByWord } from "../http/unsplashSearchByWord";

function DrawerRight({ setData, opened, setOpened, setLink,setCityName,setCurrentDay }) {
  const theme = useMantineTheme();
  const [coord, setCoord] = useState({
    lat: null,
    long: null,
  });
  const citiesName = Cities.map((city) => city.name);

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e);
    
  };

  const notify = (text) => toast(text);

  const handleClick = async () => {
    if (value.length > 2) {
      FindLanLong(value)
        .then((res) => {
          setCoord({ lat: res.data.coord.lat, long: res.data.coord.lon });
          setCityName(value.toUpperCase())
          notify("Success");
        })
        .catch(() => {
          notify("Somethings went wrong");
        });

        UnsplashGetByWord(value).then((res) => setLink(res.data.results[Math.floor(Math.random() * 10)].urls.regular))
    } else {
      notify("Please Enter Valid City");
    }
  };

  useEffect(() => {
    if (coord.lat !== null && coord.long !== null) {
      GetNextDaysHours(coord.lat, coord.long).then((res) => {setData(res.data.daily); setCurrentDay(res.data.current)});
      setOpened(false)
    }
  }, [coord]);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        position="right"
        size="lg"
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
      >
        <Group position="center">
          <ThemeChanger />
        </Group>
        <Group mt={50} position="center">
          <Autocomplete
            placeholder="Choose One City"
            icon={<IconMapSearch />}
            transition="pop-top-left"
            transitionDuration={80}
            limit={10}
            transitionTimingFunction="ease"
            value={value}
            onChange={handleChange}
            data={citiesName}
          />
          <Button
            onClick={handleClick}
            variant="gradient"
            gradient={
              theme.colorScheme === "light"
                ? { from: "teal", to: "blue", deg: 60 }
                : { from: "#7F8487", to: "#413F42", deg: 60 }
            }
          >
            <IconMapPin />
          </Button>
        </Group>
        <ToastContainer
          theme={theme.colorScheme === "light" ? "light" : "dark"}
          position="bottom-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Drawer>
    </>
  );
}
export default DrawerRight;
