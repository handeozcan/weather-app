import React from 'react'
import { Grid, Col, LoadingOverlay } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import CityShow from './cityShow';
import SingleShowInfo from './singleShowInfo';
import WeeklyShowInfo from './WeeklyShowInfo';

function LayoutComponent({data,cityName,link,currentDay}) {
  const largeScreen = useMediaQuery('(min-width: 1200px)');
  const mediumScreen = useMediaQuery('(min-width:900px)');
 
 if(data.length > 0){
  return (
    <Grid align="center">
      <Col span={largeScreen ? 3 : mediumScreen ? 5 : 6}><SingleShowInfo currentDay={currentDay}/></Col>
      <Col span={largeScreen ? 6 : mediumScreen ? 8 : 12}> <WeeklyShowInfo data={data}/></Col>
      <Col span={largeScreen ? 3 : mediumScreen ? 5 : 6}> <CityShow link={link} cityName={cityName}/></Col>
    </Grid>
  )
 }else{
  <LoadingOverlay visible={true} overlayBlur={2} />
 }
}

export default LayoutComponent