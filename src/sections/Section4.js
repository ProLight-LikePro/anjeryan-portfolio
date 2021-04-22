import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react';
import SkillsCarousel from '../components/SkillsCarousel';

const useStyles = makeStyles(theme => ({
    grid: {
        '& .MuiTypography-h4': {
            fontWeight: 700,
            color: '#fff',
            marginBottom: theme.spacing(8),
            [theme.breakpoints.up('lg')]: {
                fontSize: '3rem'
            }
        }
    },
    section: {
        marginTop: theme.spacing(15)
    }
}))

const Section4 = ({ section4 }) => {

    const classes = useStyles();

    return (
        <div
            className={classes.section}
            id={section4}>
            <Grid
                className={classes.grid}
                container
                direction='column'
                alignItems='center'>
                <Typography
                    align='center'
                    variant='h4'>
                    My Skills
                </Typography>
                <SkillsCarousel />
            </Grid>
        </div>
    )
}

export default Section4
