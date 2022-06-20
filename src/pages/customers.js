import Head from 'next/head';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { CustomerListResults } from '../components/customer/customer-list-results';
import { CustomerListToolbar } from '../components/customer/customer-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';

const Customers = () => {

  const[users, setUsers] = useState([]);

  useEffect(() => {

    var data = JSON.stringify({
      "pageSize": 1000,
      "pageNumber": 0,
      "orderBy": "id",
      "orderType": 0,
      "name": ""
    });

    var config = {
      method: 'post',
      url: 'https://cateringtest.grannymeal.com/api/v1/Admin/SearchUser',
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
      setUsers(response.data.data.rows)
    })
    .catch(function (error) {
      console.log(error);
    });


  
}, []);

console.log(users);

return (
  <>
    <Head>
      <title>
        Users
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
        <CustomerListToolbar />
        <Box sx={{ mt: 3 }}>
          <CustomerListResults users={users} />
        </Box>
      </Container>
    </Box>
  </>
);

};

Customers.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
); 

export default Customers;
