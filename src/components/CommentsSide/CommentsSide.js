import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const CommentsSide = () => {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="md" style={{ padding: '0' }}>
                <Typography component="div" style={{ backgroundColor: '#c7dded', height: '100vh', padding: '0', margin: '0' }} >
                </Typography>
            </Container>
        </>
    )
}

export default CommentsSide;
