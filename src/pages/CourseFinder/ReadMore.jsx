import { Box, Typography } from "@mui/material";
import React, { useState } from 'react';

function ReadMore({ text, maxLength }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box>
      <Typography sx={{color: '#210366', fontSize: 14,  fontWeight: '500', wordWrap: 'break-word'}}>
        {isExpanded ? text : text.slice(0, maxLength)}
        {text.length > maxLength && !isExpanded && (
          <Typography onClick={toggleReadMore} sx={{color: '#FF7900', fontSize: 12,  fontWeight: '600', textDecoration: 'underline', wordWrap: 'break-word'}} >
            Read more
          </Typography>
        )}
        {isExpanded && (
          <Typography onClick={toggleReadMore} sx={{color: '#FF7900', fontSize: 12,  fontWeight: '600', textDecoration: 'underline', wordWrap: 'break-word'}}>
             Read less
          </Typography>
        )}
      </Typography>
    </Box>
  );
}

export default ReadMore;
