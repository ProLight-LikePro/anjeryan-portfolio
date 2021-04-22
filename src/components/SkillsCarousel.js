import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react'
import Slider from 'react-slick'

//import images
import html from '../img/html.png';
import css from '../img/css.png';
import js from '../img/js.png';
import react from '../img/react.png';
import node from '../img/node.png';
import figma from '../img/figma.png';

//import icons
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const images = [html, css, js, react, node, figma];

const useStyles = makeStyles(theme => ({
    App: {
        width: theme.spacing(35),
        [theme.breakpoints.up(375)]: {
            width: theme.spacing(40)
        },
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(60)
        },
        [theme.breakpoints.up('lg')]: {
            width: theme.spacing(90)
        },
        [theme.breakpoints.up('xl')]: {
            width: theme.spacing(100)
        },
    },
    Img: {
        width: theme.spacing(10),
        marginLeft: 'auto',
        marginRight: 'auto',
        [theme.breakpoints.up(375)]: {
            width: theme.spacing(13)
        },
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(20),
        },
        [theme.breakpoints.up('lg')]: {
            width: theme.spacing(30),
        },
        [theme.breakpoints.up('xl')]: {
            width: theme.spacing(35),
        },
    },
    arrowNext: {
        color: "#fff",
        position: 'absolute',
        cursor: 'pointer',
        right: 0,
        top: '40%'
    },
    arrowPrev: {
        color: "#fff",
        position: 'absolute',
        cursor: 'pointer',
        left: 0,
        top: '40%',
        zIndex: 10
    },
}));

const SkillsCarousel = () => {

    const classes = useStyles();

    const NextArrow = ({ onClick }) => {
        return (
            <div onClick={onClick}>
                <ChevronRightIcon className={classes.arrowNext} />
            </div>
        )
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div onClick={onClick}>
                <ChevronLeftIcon className={classes.arrowPrev} />
            </div>
        )
    }

    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next)
    }

    return (
        <div className={classes.App}>
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div key={index} className={index === imageIndex ? 'slide active' : 'slide'}>
                        <img
                            className={classes.Img}
                            src={img}
                            alt={img} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default SkillsCarousel
