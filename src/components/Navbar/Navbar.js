import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    Navbar: {
        background: '#64b5f6;' ,
    }
}));

const Navbar = () => {
    const classes = useStyles();
    
    return (
        <>
            <div className={classes.root} >
                <AppBar position="static" className={classes.Navbar} component={Box} p={2}>
                        <Typography variant="h6" className={classes.title} >
                            Simple Chat
                        </Typography>
                </AppBar>
            </div>
        </>
    )
}

export default Navbar;
