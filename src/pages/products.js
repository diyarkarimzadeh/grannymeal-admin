import Head from 'next/head';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { products } from '../__mocks__/products';
import { ProductListToolbar } from '../components/product/product-list-toolbar';
import { ProductCard } from '../components/product/product-card';
import { DashboardLayout } from '../components/dashboard-layout';

const Products = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

      var data = JSON.stringify({
        "pageSize": 10000,
        "pageNumber": 0,
        "orderBy": "id",
        "orderType": 0,
        "deliveryDate": "",
        "orderFilter": 1
      });

      var config = {
        method: 'post',
        url: 'https://cateringtest.grannymeal.com/api/v1/Admin/GetOrders',
        headers: { 
          'accept': 'application/json', 
          'Culture': 'en-US', 
          'Content-Type': 'application/json', 
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        data : data
      };

      axios(config)
      .then(function (response) {
        console.log(response.data);
        setOrders(response.data.data.rows);
      })
      .catch(function (error) {
        console.log(error);
      });

    
  }, []);

  console.log(orders)



return (
  <>
    <Head>
      <title>
        Orders
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <ProductListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {orders.map((order, index) => (
              <Grid
                item
                key={order[index]}
                lg={12}
                md={12}
                xs={12}
              >
                <ProductCard order={order} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={5}
            size="small"
          />
        </Box>
      </Container>
    </Box>
  </>
);
        };

Products.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Products;
