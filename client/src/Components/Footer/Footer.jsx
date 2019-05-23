import React from 'react';
//import FooterCss from './FooterCss'
import Grid from '@material-ui/core/Grid';

function Footer() {
    return (
        <Grid container justify="center" style={{ backgroundColor: 'rgb(80,83,66)' }}>
            <a href="https://marvel.com"><img src="/assets/img/marvel1.gif" alt="Marvel" onClick="https://marvel.com"/></a>
        </Grid>
    )
}
export default (Footer);
