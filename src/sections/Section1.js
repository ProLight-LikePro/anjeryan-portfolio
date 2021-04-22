//import dependencies
import { makeStyles } from '@material-ui/core'
import React from 'react'

//import modules
import LandingText from '../components/LandingText';

//import image
import bg from '../img/bg.png';
import logo from '../img/logo.png';

//initialize custom styles
const useStyles = makeStyles(theme => ({
    div: {
        background: `url(${bg}) no-repeat top/cover`,
        height: '100vh',
        [theme.breakpoints.up('sm')]: {
            height: '100vh'
        }
    },
    img: {
        width: theme.spacing(8),
        marginLeft: theme.spacing(2),
        paddingTop: theme.spacing(2)
    }
}));

const Section1 = ({ section1 }) => {

    const classes = useStyles();

    return (
        <div
            className={classes.div}
            id={section1}>
            <img className={classes.img} src={logo} alt="logo" />
            <LandingText />
        </div>
    )
}

export default Section1
