import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const Comment = (props) => {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <Container maxWidth="md" style={{ padding: '0' }}>
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh', width: '100%' }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        component={Box} py={10}
                    >
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField
                                id="outlined-secondary"
                                label="Login"
                                variant="outlined"
                                color="primary"
                            />
                            <TextField
                                id="outlined-secondary"
                                label="Comment"
                                variant="outlined"
                                color="primary"
                            />
                            <Button variant="contained" size="medium"  style={{ backgroundColor: '#cfe8fc', padding: '15px'}} onClick={props.onClick}>
                                Send
                            </Button>
                        </form>
                    </Grid>
                </Typography>
            </Container>
        </>
    )
}

export default Comment;
