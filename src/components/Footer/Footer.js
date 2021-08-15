import React, { useState, useEffect } from 'react';
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
    Footer: {
        background: '#64b5f6;',
    },
}));

const Footer = () => {
    const classes = useStyles();
    const [today, setDate] = useState(new Date());


    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);
    const day = today.toLocaleDateString({ weekday: 'long' });
    const date = `${day},`;
    const time = today.toLocaleTimeString( { hour: 'numeric', hour12: true, minute: 'numeric' });

    return (
        <>
            <div className={classes.root} >
                <AppBar position="static" className={classes.Footer} component={Box} p={2}>
                    <Typography variant="h6" className={classes.title} >
                        Current Date: {date} Time: {time}
                    </Typography>
                </AppBar>
            </div>
        </>
    )
}

export default Footer;
