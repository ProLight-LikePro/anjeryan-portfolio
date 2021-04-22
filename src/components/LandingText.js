import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

//initialize custom styles
const useStyles = makeStyles(theme => ({
    grid: {
        position: 'absolute',
        bottom: '30%',
        [theme.breakpoints.up('sm')]: {
            bottom: '30%'
        },
        [theme.breakpoints.up('lg')]: {
            bottom: theme.spacing(15)
        },
        [theme.breakpoints.up('xl')]: {
            bottom: theme.spacing(30)
        },
        '& .MuiTypography-h6': {
            color: '#fff',
            fontWeight: 800,
            marginBottom: theme.spacing(3),
            [theme.breakpoints.up('md')]: {
                fontSize: '2rem'
            },
            [theme.breakpoints.up('xl')]: {
                fontSize: '3rem'
            }
        },
        '& .MuiTypography-body1': {
            color: '#fff',
            fontWeight: 800,
            [theme.breakpoints.up('md')]: {
                fontSize: '1.5rem'
            },
            [theme.breakpoints.up('xl')]: {
                fontSize: '2rem'
            }
        }
    }
}))

const LandingText = () => {

    const classes = useStyles();

    return (
        <Grid
            direction='column'
            justify='center'
            className={classes.grid}
            container>
            <Typography
                align='center'
                variant='h6'>
                ANJERYAN SAPTA PRATAMA
            </Typography>
            <Typography
                align='center'
                variant='body1'>
                FULL - STACK DEVELOPER
            </Typography>
        </Grid>
    )
}

export default LandingText
