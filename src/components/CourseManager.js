import React, { useState, useEffect } from 'react';
import { TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import localforage from 'localforage';

const CourseManager = () => {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState('');

  useEffect(() => {
    localforage.getItem('courses').then(savedCourses => {
      if (savedCourses) {
        setCourses(savedCourses);
      }
    });
  }, []);

  const addCourse = () => {
    const newCourses = [...courses, { name: courseName }];
    setCourses(newCourses);
    localforage.setItem('courses', newCourses);
    setCourseName('');
  };

  return (
    <div>
      <h2>Course Manager</h2>
      <TextField
        label="Course Name"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
      />
      <Button onClick={addCourse}>Add Course</Button>
      <List>
        {courses.map((course, index) => (
          <ListItem key={index}>
            <ListItemText primary={course.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default CourseManager;