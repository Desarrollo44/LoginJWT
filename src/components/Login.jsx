import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, TextField, Button, Card, Typography } from "@mui/material";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login(props) {
    //const [error,setError]=useState(false);
    const [vision, setVision] = useState(true);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    // const { history } = props;
    const handleVision = () => {
        setVision(!vision);
    }
    const login = async (data) => {
        try {
            const response = await axios.post('/auth/login', {
                username: data.username,
                password: data.password
            });
            console.log(response.data);
            sessionStorage.setItem("auth", response.data.token);
            setTimeout(() => {
                window.location.href = "/home";
            }, 2000);
        } catch (error) {
            console.log('error ', error);
            toast.error(error.response.data.message, {
                position: 'bottom-center',
                autoClose: 3000,
            });
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
                            label="User Name"
                            type="text"
                            {...register("username", { required: "alias is required" })}
                        />
                        {errors.username && (
                            <Typography  margin={'0rem 2rem'} style={{ fontSize: 14, color: 'red' }}>
                                {errors.username.message}
                            </Typography>
                        )}
                        <Box display={'flex'} flexDirection={'row'} gap={1}>
                            <TextField
                                style={{ margin: '1rem' }}
                                variant="outlined"
                                label="Password"
                                type={vision ? "password" : "text"}
                                {...register("password", { required: "password is required" })}
                            />
                            <Button onClick={handleVision}>{vision ? <VisibilityIcon /> : <VisibilityOffIcon />}</Button>
                            <ToastContainer />
                        </Box>
                        {errors.password && (
                            <Typography variant="h7" margin={'2rem'} style={{ fontSize: 14, color: 'red' }}>
                                {errors.password.message}
                            </Typography>
                        )}<br/>
                        <Button variant="outlined" type="submit" style={{ margin: '1rem' }}>
                            Login
                        </Button>
                    </form>
                    <p style={{ margin: '1rem' }}>
                        Have an Account?{" "}
                        <Link style={{ textDecoration: "none" }} to={"/register"} onClick={() => (window.location.href = "/register")}>
                            Sign Up
                        </Link>
                    </p>
                </Card>
            </Box>
        </>
    );
}

export default Login;