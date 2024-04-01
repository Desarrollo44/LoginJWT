import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, TextField, Button, Card, Typography } from "@mui/material";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import api from "../utils/axios";

function Login(props) {
    const [vision,setVision]=useState(true);
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { history } = props;

    const login =async (data) => {
        try {
            const response = await axios.post('http://localhost:8080/auth/login', {
                username:data.username,
                password:data.password});
              console.log(response.data);
              localStorage.setItem("auth", response.data.token);
              setTimeout(() => {
                window.location.href="/";
              }, 3000);
        } catch (error) {
           console.log('error ',error); 
        }
        
        };
      
    return (
        <>
            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                style={{ height: '100vh' }}
            >
                <Card style={{ maxWidth: "320px" }} padding={2}>
                    <Typography variant="h3" margin={2}>Login Form</Typography>
                    <form autoComplete="off" onSubmit={handleSubmit(login)}>
                        <TextField
                            style={{ margin: '1rem' }}
                            variant="outlined"
                            label="Alias"
                            type="text"
                            {...register("username", { required: "alias is required" })}
                        />
                        {errors.alias && (
                            <p style={{ fontSize: 14, color: 'red' }}>
                                {errors.username.message}
                            </p>
                        )}
                        <Box display={'flex'} flexDirection={'row'} gap={1}>
                        <TextField
                            style={{ margin: '1rem' }}
                            variant="outlined"
                            label="Password"
                            type={vision ? "password":"text"}
                            {...register("password", { required: "password is required" })}
                        />
                        {errors.password && (
                            <p style={{ fontSize: 14, color: 'red' }}>
                                {errors.password.message}
                            </p>
                        )}
                        <Button onClick={()=>setVision(!vision)}>{vision ? <VisibilityIcon/> : <VisibilityOffIcon/> }</Button>
                        </Box>
                        <Button variant="outlined" type="submit" style={{ margin: '1rem' }}>
                            Login
                        </Button>
                    </form>
                    <p  style={{ margin: '1rem' }}>
                        Have an Account?{" "}
                        <Link style={{ textDecoration: "none" }} to={"/register"} onClick={()=>( window.location.href = "/register")}>
                            Sign Up
                        </Link>
                    </p>
                </Card>
            </Box>
        </>
    );
}

export default Login;