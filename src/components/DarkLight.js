import {  useMantineColorScheme,Switch,useMantineTheme  } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

function ThemeChanger() {
  const {toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme()

  return (
     <Switch
     styles={{ track: { cursor: 'pointer' } }}
     onClick={() => toggleColorScheme()}
     size="xl"
     color={theme.colorScheme === 'dark' ? 'gray' : 'dark'}
     onLabel={<IconSun size={16} stroke={2.5} color={theme.colors.yellow[4]} />}
     offLabel={<IconMoonStars size={16} stroke={2.5} color={theme.colors.blue[6]} />}
   />
  );
}

export default ThemeChanger