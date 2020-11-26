import React from 'react'
import { Card, Typography, CardContent,CardActions, Button, Grid } from '@material-ui/core'
import img from '../img/vs.jpg'

const MyCards = ({match})=>{
    const getMatchCard = ()=>{
        return(
            <Card style={{marginTop:15}}>
                {/* Inside Content */}
                <CardContent>
                    {/* justify="center" for horizontal alignItems="center" for vertical */}
                    <Grid container justify="center" alignItems="center" spacing={4}>
                        <Grid item >
                        <Typography variant="h5">{match["team-1"]}</Typography>
                        </Grid>
                        <Grid item>
                            <img style={{width:150},{height:200}} src={img}></img>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5">{match["team-2"]}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>

                {/* Two Buttons at bottom */}
                <Grid container justify="center">
                    <CardActions>
                        <Button variant="contained" color="primary">
                            Show details
                        </Button>
                        <Button variant="contained" color ="primary">
                            {new Date().toString()}
                        </Button>
                    </CardActions>
                </Grid>
               
               

            </Card>
            
        )
    }
    return getMatchCard()

}


export default MyCards;