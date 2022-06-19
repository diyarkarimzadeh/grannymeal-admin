import Head from 'next/head';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { Budget } from '../components/dashboard/budget';
import { LatestOrders } from '../components/dashboard/latest-orders';
import { LatestProducts } from '../components/dashboard/latest-products';
import { Sales } from '../components/dashboard/sales';
import { TasksProgress } from '../components/dashboard/tasks-progress';
import { TotalCustomers } from '../components/dashboard/total-customers';
import { TotalProfit } from '../components/dashboard/total-profit';
import { TrafficByDevice } from '../components/dashboard/traffic-by-device';
import { DashboardLayout } from '../components/dashboard-layout';
import { useRouter } from 'next/router';





const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {

    var config = {
      method: 'post',
      url: 'https://cateringtest.grannymeal.com/api/v1/Admin/Dashboard',
      headers: { 
        'accept': 'application/json', 
        'Culture': 'en-US', 
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }}
   
    
    axios(config)
    .then(function (response) {
      let data = response.data;
      setCooks(data.data.allCooks);
      setUsers(data.data.allUsers);
      setOrders(data.data.totalOrders);
      setIncome(data.data.totalIncome);
      console.log(cooks)
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);

  const [cooks, setCooks] = useState();
  const [users, setUsers] = useState();
  const [orders, setOrders] = useState();
  const [income, setIncome] = useState();

 

  

  return (
    <>
      <Head>
        <title>
          GrannyMeal Dashboard
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
  
         <Box component="div" sx={{ mb: 2, fontSize: 12 }}><h1>Welcome to Granny Meal Admin 👋</h1></Box>
  
         <Box component="div" sx={{ mb: 4, fontSize: 24 }}><h1>Dashboard</h1></Box>
          
          
          
        
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <Budget cooks={cooks} />
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <TotalCustomers users={users} />
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <TasksProgress orders={orders}/>
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <TotalProfit sx={{ height: '100%' }} income={income}/>
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              {/* <Sales /> */}
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
              {/* <TrafficByDevice sx={{ height: '100%' }} /> */}
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
              {/* <LatestProducts sx={{ height: '100%' }} /> */}
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              {/* <LatestOrders /> */}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
} 



Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
