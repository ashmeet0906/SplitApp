import { calculateSize } from "@iconify/react";
import { CircularProgress, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";


export default function Loading() {

  return (
    <Grid container
    direction="column"
    style={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      minHeight: '200px', 
      fontStyle: 'italic'}}
  >
    <CircularProgress size={60} />
    <Typography variant="h5" textAlign={'center'}>
        Loading...
    </Typography>
    </Grid>
  )
}
