import React from "react";
import { Box, TextField, Button, Card, Typography } from "@mui/material";


function Home (props){
    const {history}=props;
    const logout=()=>{
        localStorage.clear();
        window.location.href="/login";

    }
    return(<>
        <Typography>Bienvenido Usario</Typography>
        <Button variant="outlined" type="submit"onClick={logout}>salir</Button>
    </>);
}
export default Home;