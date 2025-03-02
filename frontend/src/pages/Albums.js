import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, Typography, CardMedia, Container, Grid } from "@mui/material";

function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/albums").then((res) => setAlbums(res.data));
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Albums</Typography>
      <Grid container spacing={3}>
        {albums.map((album) => (
          <Grid item xs={12} sm={6} md={4} key={album.id}>
            <Card>
              <CardMedia component="img" height="140" image={album.coverImage} />
              <CardContent>
                <Typography variant="h6">{album.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Albums;
