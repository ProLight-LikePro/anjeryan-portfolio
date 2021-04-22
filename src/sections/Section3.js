import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import ServiceContent from '../components/ServiceContent';

const useStyles = makeStyles(theme => ({
    section: {
        marginTop: theme.spacing(10),
        [theme.breakpoints.up('md')]: {
            marginTop: theme.spacing(25)
        },
        [theme.breakpoints.up('lg')]: {
            marginTop: theme.spacing(30)
        }
    },
    grid: {
        '& .MuiTypography-h4': {
            fontWeight: 700,
            color: '#fff',
            marginBottom: theme.spacing(8),
            [theme.breakpoints.up('lg')]: {
                fontSize: '3rem'
            }
        }
    }
}))

const Section3 = ({ section3 }) => {

    const classes = useStyles();

    return (
        <div
            className={classes.section}
            id={section3}>
            <Grid
                className={classes.grid}
                container
                alignItems='center'
                direction='column'>
                <Typography
                    align='center'
                    variant='h4'>
                    My Work
            </Typography>
                <ServiceContent />
            </Grid>
        </div>
    )
}

export default Section3
