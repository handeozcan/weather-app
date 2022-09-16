import React from "react";
import { Card, Image, Text, Badge, useMantineTheme } from "@mantine/core";

function CityShow({ cityName, link }) {
  const theme = useMantineTheme();
  return (
    <Card
      style={{
        position: "relative",
        textAlign: "center",
      }}
      shadow="xl"
      p="lg"
      radius="md"
      withBorder
    >
      <Card.Section>
        <Image src={link} height={300} alt="city" />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        >
          <Badge color="dark">
            <Text
              color={
                theme.colorScheme === "light"
                  ? theme.colors.dark[9]
                  : theme.colors.gray[2]
              }
            >
              {cityName}
            </Text>
          </Badge>
        </div>
      </Card.Section>
    </Card>
  );
}

export default CityShow;
