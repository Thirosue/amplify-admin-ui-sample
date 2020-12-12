import React from 'react';
import ReactMarkdown from 'react-markdown'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DialogContent from '@material-ui/core/DialogContent';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

const theme = createMuiTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

const useStyles = makeStyles({
  root: {
    maxWidth: '1100px',
    margin: '20px auto'
  },
  media: {
    height: 140,
  },
  detail: {
    height: 200,
  },
  title: {
    padding: '0 0 10px 10px',
    marginBottom: '15px',
    borderBottom: '1px solid #ddd',
  },
  content: {
    padding: '10px',
  },
});

const sampleContent = `
# Quasar App

A Quasar Framework Survey App Sample

## Sample Page

https://thirosue.github.io/quasar-survey-sample/#/

## Install the dependencies

yarn

### Start the app in development mode (hot-code reloading, error reporting, etc.)

yarn dev

### Lint the files

yarn run lint

### Build the app for production

yarn run build

### Customize the configuration

See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
`

function App() {
  const classes = useStyles();
  const [detail, setDetail] = React.useState(false);

  const handleClick = date => {
    setDetail(true)
  }

  return (
    <DialogContent>
      {!detail && (
        <>
          <ThemeProvider theme={theme}>
            <Typography variant="h4">Sample Blog</Typography>
          </ThemeProvider>
          <Box mb="1.5rem" />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4} md={3}>
              <Card onClick={() => handleClick(1)}>
                <CardMedia
                  className={classes.media}
                  image="/amplify-admin-ui-sample/static/1.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Quasar App Build
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </>
      )}
      {!!detail && (
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={12}>
              <Card>
                <CardMedia
                  className={classes.detail}
                  image="/amplify-admin-ui-sample/static/1.jpg"
                />
                <CardContent>
                  <Typography className={classes.title} gutterBottom variant="h4" component="h2">
                    Quasar App Build
                  </Typography>
                  <Typography className={classes.content} variant="subtitle1" color="textSecondary" component="p">
                    <ReactMarkdown>{sampleContent}</ReactMarkdown>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Box mb="1rem" />
          <Link
            component="button"
            variant="subtitle1"
            onClick={() => setDetail(false)}
          >
            Back
          </Link>
        </div>
      )}
    </DialogContent>
  );
}

export default App;
