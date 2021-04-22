import { IconButton, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';

//import icon
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles(theme => ({
    toTop: {
        zIndex: 2,
        position: 'fixed',
        bottom: theme.spacing(10),
        backgroundColor: '#dcdcdc',
        color: 'black',
        '&:hover, &.Mui-focusVisible': {
            transition: '0.3s',
            color: '#397ba6',
            backgroundColor: '#dcdcdc'
        },
        right: '5%'
    }
}));

const ScrollTop = ({ section1 }) => {

    const classes = useStyles();

    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 250) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <>
            {visible && (
                <Link to={section1} smooth={true}>
                    <IconButton
                        className={classes.toTop}>
                        <ExpandLessIcon />
                    </IconButton>
                </Link>
            )}
        </>
    )
}

export default ScrollTop
