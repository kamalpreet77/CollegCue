import React from 'react';
import { Box, Stack, Button } from '@mui/material';

export default function CollegeCounsellor(props) {
  return (
    <Box sx={{ marginBottom: '20px' }}>
      <Stack direction="row"
        alignItems="center"
        sx={{
          justifyContent: "flex-start",
          '@media (max-width: 770px)': {
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Button variant='contained' sx={{
          borderRadius: "0.6rem",
          backgroundColor: "#7B90FF",
          color: "white",
          paddingY: "0.7rem",
          textTransform: "capitalize",
          width: '230px',
          marginLeft: '1rem',
          fontSize: '13px'
        }}><img src={props.img} width='30px' height='30px' style={{ marginRight: '1rem' }} />{props.content}</Button>
      </Stack>
    </Box>
  );
}
