import PropTypes from 'prop-types';
import { useState } from 'react';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography, Button } from '@mui/material';
import { Clock as ClockIcon } from '../../icons/clock';
import { Download as DownloadIcon } from '../../icons/download';
import { User as UserIcon } from '../../icons/user';
import {Cook} from '../../icons/cook';
import { blue } from '@mui/material/colors';
import { padding } from '@mui/system';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const ProductCard = ({ order, ...rest }) => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



return(
  <>
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    {...rest}
  >
    <CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'start',
          pb: 1
        }}
      >
        {/* <Avatar
          alt="Product"
          src={product.media}
          variant="square"
        /> */}
        <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', paddingTop: 16, paddingLeft: 8}}>
        <Cook fontSize="small" style={{marginRight: '8px'}} />
        
        <Typography
        align="left"
        color="textPrimary"
        variant="h6"
      >
        {order.user.firstName} {order.user.lastName}
      </Typography>
        </div>
        
      </Box>
      <div style={{ paddingLeft: 8, paddingBottom: 12}}>
      <Typography
        align="left"
        color="textPrimary"
        variant="h6"
        fontSize="16px"
      >
        <span style={{color: 'gray'}}>Order No.</span> {order.id}
      </Typography>
      </div>
      
      <div style={{ backgroundColor:'#C9D9FF', padding: 16, borderRadius: 8 }}>
      <Typography
        align="left"
        color="#000000"
        gutterBottom
        variant="h6"
      >
        {order.orderDetails[0].food.foodName}
      </Typography>
      <Typography
        align="left"
        color="#585858"
        gutterBottom
        variant="h6"
        fontSize="14px"
      >
        by {order.orderDetails[0].food.chef.firstName}
      </Typography>

      <Typography
        align="left"
        color="#585858"
        gutterBottom
        variant="h6"
        fontSize="16px"
      >
        × {order.orderDetails[0].count}
      </Typography>
      </div>
      <div style={{ paddingTop: 16, paddingLeft: 8}}>
      <Typography
        align="left"
        fontSize="15px"
        color="#000000"
        gutterBottom
        variant="h6"
      >
       <span style={{color: 'gray'}}> Deliver to </span>{order.address.address}
      </Typography>

      <Typography
        align="left"
        fontSize="15px"
        color="#000000"
        gutterBottom
        variant="h6"
      >
       <span style={{color: 'gray'}}> Deliver on </span>{order.orderDetails[0].deliveryDate}<span style={{color: 'gray'}}>from</span> {order.orderDetails[0].deliveryTimeFrom} <span style={{color: 'gray'}}>to</span> {order.orderDetails[0].deliveryTimeTo}
      </Typography>
      </div>
      
      
     
      <Typography
        align="left"
        color="textPrimary"
        variant="body1"
      >
        {/* {product.description} */}
      </Typography>
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'center', alignItems: 'center',
        display: 'flex' }}
      >
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          {/* <ClockIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            Updated 2hr ago
          </Typography> */}
          <Button
          // startIcon={(<DownloadIcon fontSize="small" />)}
          sx={{ mr: 1 }}
          color="primary"
          variant="contained"
          onClick={handleClickOpen}
        >
          Delivery Note
        </Button>

        <Button
          startIcon={(<DownloadIcon fontSize="small" />)}
          sx={{ mr: 1 }}
          // color="primary"
          // variant="contained"
        >
          Detailes
        </Button>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          
        </Grid>
      </Grid>
    </Box>
  </Card>

  <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delivery Note"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {order.deliveryNote === null ? 'Empty' : order.deliveryNote}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Okay
          </Button>
        </DialogActions>
      </Dialog>

</>
);

        };

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};
