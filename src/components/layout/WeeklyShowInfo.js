import React from "react";
import { Card, Image, Badge, Button, Group,LoadingOverlay } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

function WeeklyShowInfo({ data }) {
  if(data.length > 0){
    return (
      <Card style={{
        height:"300px"
      }} shadow="sm" p="lg" radius="md" withBorder>
        <Carousel
          height={300}
          slideSize="25%"
          slideGap="md"
          loop
          align="start"
          slidesToScroll={1}
        >
          {data.map((day, i) => (
              <Carousel.Slide key={i.toString()}>
                <Card style={{
                   height:"300px",
                  display:"flex",
                  flexDirection:"column",
                  justifyContent:"center",
                  alignItems:"center"
                }} shadow="lg" p="lg" radius="md">
                  <Card.Section>
                    <Image
                      width={100}
                      radius="md"
                      src={require("../../images/" +
                        day.weather[0].icon +
                        ".png")}
                      alt="Random unsplash image"
                    />
                  </Card.Section>
  
                  <Group position="apart" mt="md" mb="xs">
                    <Badge color="pink" variant="light">
                      {day.temp.day}&deg;C
                    </Badge>
                  </Group>
  
  
                  <Button
                    variant="light"
                    color="blue"
                    fullWidth
                    mt="sm"
                    radius="md"
                  >
                   {new Date(day.dt * 1000).toLocaleString("en-US", {
                      weekday: "short",
                    })}
                  </Button>
                </Card>
              </Carousel.Slide>
            ))}
        </Carousel>
      </Card>
    );
  }
  else{
    return (
      <Card style={{
        height:"300px"
      }} shadow="sm" p="lg" radius="md" withBorder>
        <LoadingOverlay visible={true} overlayBlur={2} />
      </Card>
    );
  }
}

export default WeeklyShowInfo;
