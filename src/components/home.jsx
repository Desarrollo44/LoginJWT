import React from "react";
import { Button, Typography } from "@mui/material";


function Home (props){
    // const {history}=props;
    const logout=()=>{
        sessionStorage.clear();
        window.location.href="/";

    }
    return(<>
        <Typography>Bienvenido Usario</Typography>
        <Button variant="outlined" type="submit"onClick={logout}>salir</Button>
    </>);
}
export default Home;