import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',

    },
    card: {
        maxWidth: '100%',
    },
    media: {
        height: '60vh',
    },
});

export default function AddressForm() {

    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <Container maxWidth="md">
                <Card className={classes.card} m={2} p={2}>
                    <Typography variant="h6" gutterBottom>
                        Shipping address
                    </Typography>
                    <Grid container spacing={4} p={4} m={2}>

                        <Grid item xs={12}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="First name"
                                fullWidth
                                autoComplete="fname"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="First name"
                                fullWidth
                                autoComplete="fname"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="First name"
                                fullWidth
                                autoComplete="fname"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="First name"
                                fullWidth
                                autoComplete="fname"
                            />
                        </Grid>


                    </Grid>
                </Card>
            </Container>
        </>
    );
}
