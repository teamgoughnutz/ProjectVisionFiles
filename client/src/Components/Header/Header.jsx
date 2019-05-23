import React from 'react';
//import headerCss from './HeaderCss'
import Grid from '@material-ui/core/Grid';

function Header(){
    return (
     
            <header style={{ backgroundColor: 'rgb(80,83,66)' }}>
                <Grid container justify = "center">
                <img src="/assets/img/5m.gif" alt="" />
                    <img src="/assets/img/visionlogo.jpeg" alt='' alignItems="center"/>
                </Grid>
            </header>
       
    )
}

export default (Header);
