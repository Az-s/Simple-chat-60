import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const Comment = () => {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <Container maxWidth="md" style={{ padding: '0' }}>
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh', width: '100%' }}>
                    <form className={classes.root} noValidate autoComplete="off" component={Box} m={2}>
                        <TextField
                            id="outlined-secondary"
                            label="Login"
                            variant="outlined"
                            color="primary"
                            component={Box} m={2}
                        />
                        <TextField
                            id="outlined-secondary"
                            label="Comment"
                            variant="outlined"
                            color="primary"
                            component={Box} m={2}
                        />
                    </form>
                </Typography>
            </Container>
        </>
    )
}

export default Comment;
