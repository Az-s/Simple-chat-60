import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';

const CommentsSide = (props) => {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="md" style={{ padding: '0' }}>
                {props.error && (<div style={{ padding: '10px', background: 'red', color: 'white' }}>
                    {props.error}
                </div>)
                }
                <Typography component="div" style={{ backgroundColor: '#c7dded', height: '100vh', padding: '0', margin: '0' }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {
                            props.post.map((msg, key) => (
                                <Grid container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    key={key}
                                >
                                    <Paper component={Box} m={0.2} p={0.2}>
                                     <strong>{msg.author}</strong>  send message: <strong>{msg.message}</strong> Time:{msg.datetime}
                                    </Paper>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Typography>
            </Container>
        </>
    )
}

export default CommentsSide;
