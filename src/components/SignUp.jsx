import React from "react";
import { useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import axios from "axios";
import { Box, TextField, Button, Card, Typography } from "@mui/material";


const SignUp = (props) => {
    const { history } = props;
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        cpassword:""
    });
    const [errors, setErrors] = useState({});
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData, [name]: value
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if(handleValidate()){
        console.log(formData);
        setFormData({
            username: "",
            password: "",
            cpassword:""
        })
        setErrors({});
        }
        
    }

    const handleValidate = () => {
        const newErrors={};
        if(!formData.username){
            newErrors.username="ingrese un nombre para registrarse";
        }
        if(!formData.password){
            newErrors.password="ingrese una contraseña para registrarse";
        }
        if (!formData.cpassword || formData.cpassword !== formData.password) {
            newErrors.cpassword="por favor confirme la contraseña";
        }
        setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
    }

    return (<>
        <Box
            margin={10}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            height={'100vh'}
        //border={'solid 2px'}
        >
            <Box border={'solid 2px'}
                padding={7}
                borderRadius={2}

            >
                <Typography variant="h3" marginBottom={4}>Register</Typography>

                <form autoComplete="off" onSubmit={handleSubmit}  >
                    <Box display={'flex'} flexDirection={'column'} gap={3}>
                        <TextField
                            marginBottom={3}
                            type="text"
                            label="Nombre del usuario"
                            onChange={handleChange}
                            name="username"
                            value={formData.username}
                        />
                         {errors.username && (
                        <p style={{ fontSize: 14, color:'red'}}>
                          {errors.username}</p>) }
                        <TextField
                            marginBottom={3}
                            type="text"
                            label="constraseña"
                            onChange={handleChange}
                            name="password"
                            value={formData.password}
                        />
                         {errors.password && (
                        <p style={{ fontSize: 14, color:'red'}}>
                          {errors.password}</p>) }
                        <TextField
                            marginBottom={3}
                            type="text"
                            label="confirmar constraseña"
                            onChange={handleChange}
                            name="cpassword"
                            value={formData.cpassword}
                        />
                         {errors.cpassword && (
                        <p style={{ fontSize: 14, color:'red'}}>
                          {errors.cpassword}</p>) }
                        <Button
                            variant="outlined"
                            onClick={handleSubmit}
                            style={{ width: '7rem' }}
                        >regitrarse</Button>
                    </Box>
                </form>
            </Box>
        </Box>
    </>);
}
export default SignUp;