import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <Card>
        <CardContent>
          <Typography variant="h5">Today's Classes</Typography>
          <Typography>You have no classes today.</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;