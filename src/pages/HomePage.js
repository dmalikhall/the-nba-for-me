import React, { useState } from 'react';
import { Box, Tab } from '@mui/material';
import { TabPanel, TabContext, TabList } from '@mui/lab';
import SingleGame from '../components/SingleGame';
import YesterdayGame from '../components/YesterdayGame';
import TomorrowsGame from '../components/TomorrowsGame'




const HomePage = () => {
    const [value, setValue] = useState('0')
    return (
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', maxWidth: {xs: '87%', md: '90%', lg: '1150px' } , margin: '0 auto'}}   
            >
                <TabList onChange={(e, val) => setValue(val)} aria-label="lab API tabs example">
                    <Tab label="Today" value="0" />
                    <Tab label="Yesterday" value="1" />
                    <Tab label="Tomorrow" value="2" />
                </TabList>
            </Box>
            <TabPanel value="0"><SingleGame /></TabPanel>
            <TabPanel value="1"><YesterdayGame /></TabPanel>
            <TabPanel value="2"><TomorrowsGame /></TabPanel>
        </TabContext>
    )
}

export default HomePage