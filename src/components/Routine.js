import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const Routine = () => {
  // You can fetch this data from localForage as well
  const routineData = [
    { day: 'Sunday', time: '10:00 AM - 11:30 AM', course: 'CSE110' },
    { day: 'Monday', time: '2:00 PM - 3:30 PM', course: 'MAT120' },
  ];

  return (
    <div>
      <h2>Class Routine</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Day</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Course</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {routineData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.day}</TableCell>
                <TableCell>{row.time}</TableCell>
                <TableCell>{row.course}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Routine;