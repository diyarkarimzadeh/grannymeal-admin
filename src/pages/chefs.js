import Head from 'next/head';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { ChefListToolbar } from 'src/components/chef/chef-list-toolbar';
import { ChefListResults } from 'src/components/chef/chef-list-results';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';

const Chefs = () => {

  const[chefs, setChefs] = useState([]);

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
      url: 'https://cateringtest.grannymeal.com/api/v1/Admin/SearchChef',
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
      setChefs(response.data.data)
    })
    .catch(function (error) {
      console.log(error);
    });


  
}, []);

console.log(chefs);

return (
  <>
    <Head>
      <title>
        Chefs
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
        <ChefListToolbar />
        <Box sx={{ mt: 3 }}>
          <ChefListResults chefs={chefs} />
        </Box>
      </Container>
    </Box>
  </>
);

};

Chefs.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
); 

export default Chefs;
