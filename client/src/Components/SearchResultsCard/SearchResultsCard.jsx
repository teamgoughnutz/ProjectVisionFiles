import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const styles = {
  card: {
    maxWidth: 345,
  }, 
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

function SearchResultsCard(props) {

 const { classes } = props; 
  return (
    props.results.map (result => (
    <Card className={classes.card} key={result.id}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={result.name}
          className={classes.media}
          height="425"
          image={result.thumbnail.path + "/standard_xlarge.jpg"}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {result.name}
          </Typography>
          <Typography component="p">
            {result.description || "Marvel, the great comic book company, has decided I  don't deserve a Bio and they left it empty. Now they have me to deal with.......HAHAHAHAHAH!"}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    ))

  );
}

SearchResultsCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchResultsCard);