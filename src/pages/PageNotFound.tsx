import { Typography, Box, Link } from '@mui/material';
export const PageNotFound = () => {
  console.log("PageNotFound");
  
  return (
    <>
      <Box sx={{ p: 3 }}>
        <Typography>
            404 Page Not Found. Go to <Link href="/">Home</Link>
        </Typography>
      </Box>
    </>
  );
};
