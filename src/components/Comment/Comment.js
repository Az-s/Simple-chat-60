import React, { useState } from 'react';
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

    const [message, setMessage] = useState(null);
    const [author, setAuthor] = useState(null);

    const updateMessage = (event) => {
        const message = event.target.value;
        setMessage(message);
    };

    const updateAuthor = (event) => {
        const author = event.target.value;
        setAuthor(author);
    };

    const submitForm = (event) => {
        event.preventDefault();
        if (message && author) {
            props.createPost({ message: message, author: author });
        }
    };

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
                        <form className={classes.root} noValidate autoComplete="off" onSubmit={event => submitForm(event)}>
                            <TextField
                                id="author"
                                label="Author"
                                variant="outlined"
                                color="primary"
                                onChange={(event) => updateAuthor(event)}
                            />
                            <TextField
                                id="message"
                                label="Message"
                                variant="outlined"
                                color="primary"
                                onChange={(event) => updateMessage(event)}
                            />
                            <Button variant="contained" size="medium" style={{ backgroundColor: '#cfe8fc', padding: '15px' }} type='submit'>
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
