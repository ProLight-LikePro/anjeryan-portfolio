import { Button, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import React from 'react';
import emailjs from 'emailjs-com';

const useStyles = makeStyles(theme => ({
    grid: {
        '& .MuiFormLabel-root': {
            color: '#fff'
        },
        '& .MuiInputBase-root': {
            color: '#fff'
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#fff'
        },
        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#fff'
        },
        '& .MuiTextField-root': {
            width: theme.spacing(35),
            [theme.breakpoints.up(375)]: {
                width: theme.spacing(40)
            },
            [theme.breakpoints.up('md')]: {
                width: theme.spacing(60),
            },
            [theme.breakpoints.up('xl')]: {
                width: theme.spacing(80),
            },
        },
        '& .MuiButton-contained': {
            width: theme.spacing(35),
            marginTop: theme.spacing(5),
            borderRadius: '5px',
            fontWeight: 700,
            [theme.breakpoints.up(375)]: {
                width: theme.spacing(40)
            },
            [theme.breakpoints.up('md')]: {
                width: theme.spacing(60),
            },
            [theme.breakpoints.up('xl')]: {
                width: theme.spacing(80),
            },
        }
    },
    section: {
        '& .MuiTypography-h4': {
            fontWeight: 700,
            color: '#fff',
            marginBottom: theme.spacing(8),
            [theme.breakpoints.up('lg')]: {
                fontSize: '3rem'
            }
        },
        marginTop: theme.spacing(15)
    },
    email: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    }
}))

const Section5 = ({ section5 }) => {

    const classes = useStyles();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_w05qomu', 'template_jqtjzjc', e.target, 'user_ogqSNA9GO2MsBENwYgcaC')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <div
            id={section5}
            className={classes.section}>
            <Typography
                variant='h4'
                align='center'>
                Contact Me
            </Typography>
            <form onSubmit={sendEmail}>
                <Grid
                    className={classes.grid}
                    container
                    direction='column'
                    alignItems='center'>
                    <TextField
                        color='primary'
                        required
                        label='Name'
                        name='name'
                        placeholder='Enter Your Name'
                        variant='outlined' />
                    <TextField
                        className={classes.email}
                        color='primary'
                        required
                        label='Email'
                        name='email'
                        placeholder='Enter Your Email'
                        variant='outlined' />
                    <TextField
                        color='primary'
                        required
                        multiline
                        rows={4}
                        label='Message'
                        name='message'
                        placeholder='Enter Your Message'
                        variant='outlined' />
                    <Button
                        variant='contained'
                        type='submit'
                        color='primary'>
                        Send Message
                    </Button>
                </Grid>
            </form>
        </div>
    )
}

export default Section5
