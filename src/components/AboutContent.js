import React from 'react';
import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import jsPDF from 'jspdf';
import cv from '../img/cv.png';
import { Link } from 'react-scroll'

//initialize custom styles
const useStyles = makeStyles(theme => ({
    grid: {
        '& .MuiTypography-h4': {
            width: '90%',
            color: '#fff',
            marginTop: theme.spacing(5),
            marginBottom: theme.spacing(2)
        },
        '& .MuiTypography-body1': {
            width: '90%',
            color: '#bbbbbb',
            fontSize: '1.2rem',
        },
        '& .MuiTypography-subtitle1': {
            width: '90%',
            color: '#bbbbbb',
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(5)
        },
        '& .MuiGrid-justify-xs-flex-end': {
            '& .MuiButton-contained': {
                borderRadius: '20px',
                fontWeight: 700,
            },
            '& .MuiButton-colorInherit': {
                width: theme.spacing(21)
            },
            '& .MuiButton-containedPrimary': {
                width: theme.spacing(14),
                marginLeft: theme.spacing(2),
                marginRight: theme.spacing(2),
                [theme.breakpoints.up('sm')]: {
                    marginLeft: theme.spacing(4),
                },
                [theme.breakpoints.up(1024)]: {
                    marginLeft: theme.spacing(6),
                },
                [theme.breakpoints.up('lg')]: {
                    marginLeft: theme.spacing(3),
                },
            },
            width: '100%',
            justifyContent: 'flex-start'
        },
    }
}));

const AboutContent = ({ section5 }) => {

    const classes = useStyles();

    const pdfGenerate = () => {
        const doc = new jsPDF();
        doc.addImage(cv, 'PNG', 0, 0, 210, 297);
        doc.save('CV.pdf');
    }

    return (
        <Grid
            className={classes.grid}
            xs
            item
            justify='center'
            container>
            <Typography
                variant='h4'>
                About Me
                </Typography>
            <Typography
                variant='body1'>
                Hello my name is Anjeryan Sapta Pratama, I am a full-stack developer.
                </Typography>
            <Typography
                variant='subtitle1'>
                I'm working with React and Nodejs in developing websites, and sometimes also working with React and Firebase. I always receive offers to work together on building a project either part-time or full-time.
                </Typography>
            <Grid
                item
                justify='flex-end'
                container>
                <Link to={section5} smooth={true}>
                    <Button
                        color='primary'
                        variant='contained'>
                        Hire Me
                </Button>
                </Link>
                <Button
                    onClick={pdfGenerate}
                    disableFocusRipple
                    variant='contained'
                    color='inherit'>
                    Download CV
                </Button>
            </Grid>
        </Grid>
    )
}

export default AboutContent
