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
import useBlog from './hook/useBlog'

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

function App() {
  const classes = useStyles();
  const [detail, setDetail] = React.useState(false);
  const { blogs } = useBlog(); // <------ カスタムフックを利用する
  const [id, setId] = React.useState(1); // <------ 選択したブログID用

  React.useEffect(() => {
    console.log(blogs)
  }, [blogs]);

  const handleClick = async id => {
    console.log('select blog id : %s', id);
    setId(id - 1) // ブログIDをセットする
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
            {/* リストレンダリング */}
            {0 < blogs.length && blogs.sort((a, b) => a.id - b.id).map(blog =>
              <Grid key={blog.id} item xs={12} sm={4} md={3}>
                {/* ブログ選択時はブログIDを渡す */}
                <Card onClick={() => handleClick(blog.id)}>
                  <CardMedia
                    className={classes.media}
                    image={"/amplify-admin-ui-sample/" + blog.imagePath}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {blog.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="div">
                      {blog.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )}
          </Grid>
        </>
      )}
      {!!detail && (
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={12}>
              {/* 選択したブログを表示する */}
              <Card>
                <CardMedia
                  className={classes.detail}
                  image={"/amplify-admin-ui-sample/" + blogs[id].imagePath}
                />
                <CardContent>
                  <Typography className={classes.title} gutterBottom variant="h4" component="h2">
                    {blogs[id].title}
                  </Typography>
                  <Typography className={classes.content} variant="subtitle1" color="textSecondary" component="div">
                    <ReactMarkdown>{blogs[id].body}</ReactMarkdown>
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
