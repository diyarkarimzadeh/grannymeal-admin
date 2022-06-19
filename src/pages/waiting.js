import Head from 'next/head';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, dividerClasses, Grid, Link, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Facebook as FacebookIcon } from '../icons/facebook';
import { Google as GoogleIcon } from '../icons/google';






const Login = () => {

    const router = useRouter();

  useEffect(() => {
    if(localStorage.getItem('token') === null){
      router.push('/login');
    } else {
      router.push('/');
    }
  }, []);
  
  
  

  

  return (
    <div></div>
  );
};

export default Login;
