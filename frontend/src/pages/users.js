import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Button, Container, Grid } from "@mui/material";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/users").then((res) => setUsers(res.data));
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Users</Typography>
      <Grid container spacing={3}>
        {users.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{user.name}</Typography>
                <Typography variant="body2">{user.email}</Typography>
                <Typography variant="body1">Albums: {user.albumCount}</Typography>
                <Button variant="contained" color="primary">View Albums</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Users;
