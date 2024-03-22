import React from 'react';
import icon from './message-icon.png'
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

const NewsletterCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        variant="outlined"
        sx={{
          width: '330px',
          margin: 'auto',
          backgroundColor: 'rgb(255,244,235)',
          borderRadius: '20px',
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      >
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom fontWeight={700}>
            Subscribe to Newsletter
          </Typography>
          <Typography variant="body1" paragraph>
            Stay updated with our latest news and updates by subscribing to our newsletter.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            Subscribe Now
          </Button>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 1 }}>
            <img src={icon} alt="message icon" style={{ width: '50px', height: '50px', marginTop: '-50px', marginRight: '16px' }} />
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default NewsletterCard;
