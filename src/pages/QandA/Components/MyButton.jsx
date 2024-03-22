import React from 'react';
import Button from '@mui/material/Button';

const MyButton = ({ label, link, isAdmissionButton }) => {
  return (
      <Button
        variant="text"
        sx={{
          fontSize: '15px',
          textTransform:"none",
          textTransform : 'none',
          fontWeight: 400,
          letterSpacing: '0em',
          textAlign: 'center',
          borderRadius: '1rem',
          padding: '0.2rem 1.5rem',
          margin: '1rem 1rem 0 0 ',
          borderColor: '#A3C1AD',
          borderWidth: '1px',
          borderStyle: 'solid',
          color: isAdmissionButton ? 'white': '#210366',
          backgroundColor: isAdmissionButton ? '#7B90FF' : 'white',
          '&:hover': {
            backgroundColor: '#fba862',
            color: 'white',
          },
        }}
        href={link}
      >
        {label}
      </Button>
  );
};

export default MyButton;