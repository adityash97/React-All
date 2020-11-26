import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'



// class Navbar extends React.Component{
//     render(){
//         return (
//             <h1>This is nav bar</h1>
//         )
//     }
// }

const Navbar = ()=>{

    return (

        <AppBar position="static">
            <Toolbar>

                <IconButton color = "inherit">
                    <MenuIcon ></MenuIcon>
                </IconButton>

                <Typography varient="h6"  >
                        Live Cricket Updates
                </Typography>
         
            </Toolbar>

        </AppBar>
    )
}
export default Navbar;


