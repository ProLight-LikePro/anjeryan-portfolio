//import dependencies
import { AppBar, Grid, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-scroll';

//import icons
import PersonIcon from '@material-ui/icons/Person';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import StarIcon from '@material-ui/icons/Star';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';

const useStyles = makeStyles(theme => ({
    appBar: {
        top: 'auto',
        bottom: theme.spacing(2),
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#fff',
        width: theme.spacing(35),
        borderRadius: '30px'
    }
}))

const NavBar = ({ section2, section3, section4, section5 }) => {

    const classes = useStyles();

    return (
        <AppBar
            className={classes.appBar}
            color='secondary'
            position='fixed'>
            <Toolbar>
                <Grid
                    container
                    alignItems='center'>
                    <Grid
                        xs
                        item
                        container
                        justify='center'>
                        <Link to={section2} smooth={true}>
                            <IconButton>
                                <PersonIcon />
                            </IconButton>
                        </Link>
                    </Grid>
                    <Grid
                        xs
                        item
                        container
                        justify='center'>
                        <Link to={section3} smooth={true}>
                            <IconButton>
                                <ImportantDevicesIcon />
                            </IconButton>
                        </Link>
                    </Grid>
                    <Grid
                        xs
                        item
                        container
                        justify='center'>
                        <Link to={section4} smooth={true}>
                            <IconButton>
                                <StarIcon />
                            </IconButton>
                        </Link>
                    </Grid>
                    <Grid
                        xs
                        item
                        container
                        justify='center'>
                        <Link to={section5} smooth={true}>
                            <IconButton>
                                <PermContactCalendarIcon />
                            </IconButton>
                        </Link>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
