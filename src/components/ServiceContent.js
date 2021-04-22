import React from 'react';
import { Avatar, Grid, makeStyles, Typography } from '@material-ui/core'

//import images
import webDev from '../img/web-dev.png';
import webApp from '../img/web-app.png';
import uiUx from '../img/ui-ux.png';

const useStyles = makeStyles(theme => ({
    gridContent: {
        width: theme.spacing(35),
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            width: '80%',
            justifyContent: 'center'
        },
        [theme.breakpoints.up(1024)]: {
            width: '90%'
        },
        [theme.breakpoints.up('lg')]: {
            width: '91%'
        },
        '& .MuiGrid-align-items-xs-center': {
            backgroundColor: '#4a4141',
            '& .MuiAvatar-root': {
                backgroundColor: '#3f51b5',
                width: theme.spacing(12),
                height: theme.spacing(12),
                marginTop: theme.spacing(3),
            },
            '& .MuiTypography-h6': {
                color: '#fff',
                marginTop: theme.spacing(3),
                marginBottom: theme.spacing(3),
            },
            '& .MuiTypography-body2': {
                color: '#bbbbbb',
                width: '90%',
                marginBottom: theme.spacing(3)
            },
            width: theme.spacing(35),
            [theme.breakpoints.up('md')]: {
                width: theme.spacing(40)
            }
        }
    },
    content: {
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(35),
            marginBottom: theme.spacing(5)
        },
        [theme.breakpoints.up(1024)]: {
            marginBottom: theme.spacing(5)
        },
        [theme.breakpoints.up('lg')]: {
            width: theme.spacing(45),
            marginBottom: theme.spacing(0)
        },
    },
    content2: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(35),
            marginTop: theme.spacing(0),
            marginBottom: theme.spacing(5),
        },
        [theme.breakpoints.up(1024)]: {
            marginBottom: theme.spacing(5),
            marginLeft: theme.spacing(4)
        },
        [theme.breakpoints.up('lg')]: {
            width: theme.spacing(45),
            marginBottom: theme.spacing(0),
            marginRight: theme.spacing(7),
            marginLeft: theme.spacing(7),
        },
        [theme.breakpoints.up('xl')]: {
            marginLeft: theme.spacing(10),
            marginRight: theme.spacing(10)
        }
    },
    content3: {
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(35),
        },
        [theme.breakpoints.up('lg')]: {
            width: theme.spacing(45)
        },
    },
    webDev: {
        '& .MuiAvatar-img': {
            width: '90%',
            height: '90%'
        }
    },
    webApp: {
        '& .MuiAvatar-img': {
            width: '70%',
            height: '70%'
        }
    },
    uiUx: {
        '& .MuiAvatar-img': {
            width: '65%',
            height: '65%'
        }
    },
}));

const ServiceContent = () => {

    const classes = useStyles();

    return (
        <Grid
            className={classes.gridContent}
            item
            container
            direction='column'>
            <Grid
                className={classes.content}
                item
                container
                direction='column'
                alignItems='center'>
                <Avatar className={classes.webDev} alt="web-dev" src={webDev} />
                <Typography
                    variant='h6'>
                    Web Development
                    </Typography>
                <Typography
                    align='center'
                    variant='body2'>
                    Web Development is the basic job which i can do, by using React i can build a website like you want such as a portfolio, blog, etc. And absolutely it will be responsive.
                    </Typography>
            </Grid>
            <Grid
                className={classes.content2}
                item
                container
                direction='column'
                alignItems='center'>
                <Avatar className={classes.webApp} alt='web-app' src={webApp} />
                <Typography
                    variant='h6'>
                    Web App Development
                    </Typography>
                <Typography
                    align='center'
                    variant='body2'>
                    Besides building a website I can also build a Web App on your website such as form app, real-time chat, etc.
                    </Typography>
            </Grid>
            <Grid
                className={classes.content3}
                item
                container
                direction='column'
                alignItems='center'>
                <Avatar className={classes.uiUx} alt='ui-ux' src={uiUx} />
                <Typography
                    variant='h6'>
                    UI/UX Design
                    </Typography>
                <Typography
                    align='center'
                    variant='body2'>
                    Before building a website, a good UI / UX Design is needed as a first step to building a modern, dynamic, and responsive web. Without an UI / UX Design your website will look boring and ugly.
                    </Typography>
            </Grid>
        </Grid>
    )
}

export default ServiceContent
