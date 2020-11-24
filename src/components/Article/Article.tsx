import React, { FC } from 'react'
import { connect } from 'react-redux'
import { RootState } from '../../redux/reduxStore'
import Menu from '../Menu/Menu'
import { data } from '../Main/Main'
import { Button, CardContent, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import img from '../../assets/img.jpg'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    paper: {
        marginTop: '20px',
        padding:0
    },
    media: {
        height: 140,
    },
    icons: {
        display:'flex',
        justifyContent: 'space-between'
    },
    img: {
        width: '1200px',
        height: '200px',
        backgroundImage:`url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    btn: {
        display:'block',
        margin: '20px auto'
    },
    link: {
        textDecoration: 'none',
        color: '#fff'
    }
})
  

const Article:FC<MapState> = ({login, role}) => {
    const classes = useStyles()
    return (
        <div>
            <Menu login={login} role={role}/>
            <Paper elevation={3} className={`container ${classes.paper}`}>
                <div className={classes.img}>
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {data[0].name}
                    </Typography>
                    <Typography  variant="body2" color="textSecondary" component="p">
                        {data[0].descr}
                    </Typography>
                </CardContent>
                
            </Paper>
            <Link className={classes.link} to='reader'>
                <Button variant="contained" color="primary" className={classes.btn}>
                    Back
                </Button>
            </Link>
        </div>
    )
}

const mapState = (state:RootState):MapState => {
    return {
        role: state.auth.role,
        login: state.auth.login
    }
}

export default connect<MapState, {}, {}, RootState>(mapState,{})(Article)

type MapState = {
    login: string | null
    role: string| null
}
