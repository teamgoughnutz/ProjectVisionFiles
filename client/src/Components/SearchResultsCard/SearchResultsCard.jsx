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
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';


const styles = {
  card: {
    maxWidth: 325,

  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

function SearchResultsCard(props) {
  const { classes } = props;
  return (
    <div className={classNames(classes.layout, classes.cardGrid)}>
      {/* End hero unit */}
      <Grid container spacing={40}>
        {props.results.map(result => (
          <Grid item key={result.id} sm={6} md={4} lg={3}>
            <Card className={classes.card} key={result.id}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={result.name}
                  className={classes.media}
                  height="375"
                  image={result.thumbnail.path + "/standard_fantastic.jpg"}
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
                  <a href="https://www.marvel.com/explore">Learn More</a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

SearchResultsCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchResultsCard);