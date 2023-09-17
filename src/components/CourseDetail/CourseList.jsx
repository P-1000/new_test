// src/components/CourseList.js
import React from 'react';
import { Link } from 'react-router-dom';
import data from './data';
import { useParams } from 'react-router-dom';

function CourseList() {
  const { course_code } = useParams();
  return (
    <div>
      <ul>
        {data.map((course, index) => (
          <li key={index}>
            <Link to={`./units`}>{course_code}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
