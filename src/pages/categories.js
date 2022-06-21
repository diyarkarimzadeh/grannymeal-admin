import Head from 'next/head';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { ChefListToolbar } from 'src/components/chef/chef-list-toolbar';
import { ChefListResults } from 'src/components/chef/chef-list-results';
import { CategoriesListResults } from 'src/components/categories/categories-list-results';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';
import { CategoriesListToolbar } from 'src/components/categories/categories-list-toolbar';

const Categories = () => {

  const[categories, setCategories] = useState([]);

  useEffect(() => {

        var config = {
        method: 'post',
        url: 'https://cateringtest.grannymeal.com/api/v1/Admin/GetLabels',
        headers: { 
            'accept': 'application/json', 
            'Culture': 'en-US', 
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
        };

        axios(config)
        .then(function (response) {
        setCategories(response.data.data)
        })
        .catch(function (error) {
        console.log(error);
        });



  
}, []);

console.log(categories);

return (
  <>
    <Head>
      <title>
        Categories
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
        <CategoriesListToolbar />
        <Box sx={{ mt: 3 }}>
          <CategoriesListResults categories={categories} />
        </Box>
      </Container>
    </Box>
  </>
);

};

Categories.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
); 

export default Categories;
