import { Avatar, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

//import icons
import CopyrightIcon from '@material-ui/icons/Copyright';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(theme => ({
    grid: {
        '& .MuiTypography-caption': {
            color: '#fff',
            fontSize: '0.85rem',
            '& .MuiSvgIcon-root': {
                fontSize: '0.70rem'
            },
            marginBottom: theme.spacing(3)
        },
        '& .MuiAvatar-root': {
            backgroundColor: '#4a4141',
            width: theme.spacing(7),
            height: theme.spacing(7),
        },
        '& .MuiGrid-justify-xs-space-around': {
            width: theme.spacing(30)
        },
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(15),
    }
}))

const Footer = () => {

    const classes = useStyles();

    return (
        <Grid
            className={classes.grid}
            container
            direction='column'
            alignItems='center'>
            <Typography
                align='center'
                variant='caption'>
                Copyright <CopyrightIcon /> 2021 All right reserved
            </Typography>
            <Grid
                item
                container
                justify='space-around'>
                <a
                    style={{
                        textDecoration: 'none',
                        color: '#fff'
                    }}
                    href='https://github.com/ProLight-LikePro'>
                    <Avatar><GitHubIcon /></Avatar>
                </a>
                <a
                    style={{
                        textDecoration: 'none',
                        color: '#fff'
                    }}
                    href='https://www.instagram.com/anjeryan_sama/'>
                    <Avatar><InstagramIcon /></Avatar>
                </a>
                <a
                    style={{
                        textDecoration: 'none',
                        color: '#fff'
                    }}
                    href='https://www.linkedin.com/in/anjeryan-sapta-55999a20b'>
                    <Avatar><LinkedInIcon /></Avatar>
                </a>
            </Grid>
        </Grid>
    )
}

export default Footer
