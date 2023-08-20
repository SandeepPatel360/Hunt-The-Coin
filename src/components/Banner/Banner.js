import React from 'react'
import { Container, Typography, makeStyles } from '@material-ui/core'
import Carousel from './Carousel';


const useStyle = makeStyles(() =>({
        banner:{
            backgroundImage:"url(./banner2.jpg)",

        },
        bannerContent:{
            height:400,
            display:'flex',
            flexDirection:'column',
            paddingTop:25,
            justifyContent:'space-around',
            // justifyContent:'center',
        },
        tagline:{
            display:'flex',
            height:"40%",
            flexDirection:'column',
            justifyContent:'center',
            textAlign:'center'
        }
}))
const Banner = () => {
    const classes = useStyle();
  return (
    <div className={classes.banner}>
        <Container className={classes.bannerContent}>
                <div className={classes.tagline}>
                    <Typography
                        variant = 'h2'
                        style ={{
                            fontWeight:'bold',
                            marginBottom:'15',
                            fontFamily:'Montserrat'

                        }}
                    >
                        Crypto Hunter
                    </Typography>
                    <Typography
                        variant = 'subtitle2'
                        style={{
                            color:'darkgrey',
                            textTransform:'capitalize',
                            fontFamily:'Montserrat'
                        }}
                    >
                        Get all the Info regarding Your favorite Crypto Currency

                    </Typography>

                    
                </div>
                <Carousel/>
        </Container>
    </div>
  )
}

export default Banner
