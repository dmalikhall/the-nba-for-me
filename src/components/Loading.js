import React from 'react';
import { Card, Typography, Stack, Box } from '@mui/material';

const Loading = () => {
    return (
        <Card>
            <Stack direction='row' alignItems='center'>
                <Box sx={{ width: '90%' }}>
                    <Stack direction='row' alignItems='center' padding='8px'>
                        <Typography height='40px' width='40px' bgcolor='lightgrey'></Typography>
                        <Typography variant='p' marginLeft='9px' bgcolor='lightgrey' width='100%' height='40px'></Typography>
                    </Stack>

                    <Stack direction='row' alignItems='center' padding='8px'>
                        <Typography height='40px' width='40px' bgcolor='lightgrey'></Typography>
                        <Typography variant='p' marginLeft='9px' bgcolor='lightgrey' width='100%' height='40px' ></Typography>
                    </Stack>
                </Box >
            </Stack>
        </Card>
    )
}

export default Loading