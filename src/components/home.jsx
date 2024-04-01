import React from "react";
import { Box, TextField, Button, Card, Typography } from "@mui/material";


function Home (props){
    const {history}=props;
    const logout=()=>{
        localStorage.clear();
        history.push("/login");

    }
}
export default Home;