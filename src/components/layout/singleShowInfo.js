import React, { Suspense } from 'react'
import { Card, Image, Badge, Button, Group, LoadingOverlay } from '@mantine/core';

function SingleShowInfo({currentDay}) {
  return (
    <Suspense fallback={<LoadingOverlay visible={true} overlayBlur={2} />}>
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
         currentDay.weather[0].icon +
           ".png")}
         alt="Random unsplash image"
       />
     </Card.Section>

     <Group position="apart" mt="md" mb="xs">
       <Badge color="pink" variant="light">
         {currentDay.temp}&deg;C
       </Badge>
     </Group>


     <Button
       variant="light"
       color="blue"
       fullWidth
       mt="sm"
       radius="md"
     >
      {new Date(currentDay.dt * 1000).toLocaleString("en-US", {
         weekday: "short",
       })}
     </Button>
   </Card>
    </Suspense>
    
  )
}

export default SingleShowInfo