import { useState } from 'react';
import { motion } from 'framer-motion';
import { Facul } from './Facultydata';
import { data } from './data';
import { Box, Typography, Button } from '@mui/material';

function Faculty() {
  const [showAll, setShowAll] = useState(false);
  const professorsToShow = 7;

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          backgroundColor: '#f9f9f9',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          maxWidth: '600px',
          margin: '0 auto',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#210366",
            fontFamily: "Poppins",
            fontWeight: 700,
            marginBottom: '20px',
          }}
        >
          IIM Bangalore Faculty Details
        </Typography>
        <Box>
          {showAll
            ? data.map((post) => (
                <Facul post={post} key={post.name} />
              ))
            : data.slice(0, professorsToShow).map((post) => (
                <Facul post={post} key={post.name} />
              ))}
        </Box>
        {!showAll && data.length > professorsToShow && (
          <Button
            onClick={toggleShowAll}
            sx={{
              marginTop: '20px',
              color: '#fff',
              backgroundColor: '#210366',
              '&:hover': {
                backgroundColor: '#12014B',
              },
            }}
          >
            Read More
          </Button>
        )}
        {showAll && (
          <Button
            onClick={toggleShowAll}
            sx={{
              marginTop: '20px',
              color: '#fff',
              backgroundColor: '#210366',
              '&:hover': {
                backgroundColor: '#12014B',
              },
            }}
          >
            Read Less
          </Button>
        )}
      </Box>
    </motion.div>
  );
}

export default Faculty;
