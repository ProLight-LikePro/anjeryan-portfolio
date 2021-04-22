//import dependencies
import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'

//import modules
import AboutContent from '../components/AboutContent';

//import image
import about from '../img/about.png';

//initialize custom styles
const useStyles = makeStyles(theme => ({
    img: {
        width: '85%',
        [theme.breakpoints.up('sm')]: {
            transform: 'scale(0.8)'
        },
        [theme.breakpoints.up('lg')]: {
            width: '45%',
            marginLeft: theme.spacing(10)
        },
    },
    grid: {
        [theme.breakpoints.up('lg')]: {
            flexDirection: 'row',
            '& .MuiGrid-grid-xs-true': {
                maxWidth: '40%',
                marginLeft: theme.spacing(10)
            }
        },
    },
    section: {
        marginTop: theme.spacing(15)
    }
}));

const Section2 = ({ section2, section5 }) => {

    const classes = useStyles();

    return (
        <div
            className={classes.section}
            id={section2}>
            <Grid
                className={classes.grid}
                container
                direction='column'
                alignItems='center'>
                <img className={classes.img} src={about} alt="About Me" />
                <AboutContent section5={section5} />
            </Grid>
        </div>
    )
}

export default Section2
