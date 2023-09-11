import React from 'react';
import { useParams } from 'react-router-dom';
import cd from './data';

function UnitDetail() {
  // Get the route parameters
  const { course_code, unit_title, material, m_name } = useParams();

  // Find the unit object that matches the unit title
  let unit = null;
  let materialType = null;

  // Iterate through the nested arrays to find the unit with the matching unit_title
  for (let i = 0; i < cd.length; i++) {
    for (let j = 0; j < cd[i].length; j++) {
      if (cd[i][j].unit_title === unit_title) {
        unit = cd[i][j];
        break; // Exit the inner loop
      }
    }
    if (unit) {
      break; // Exit the outer loop if the unit is found
    }
  }

  if (!unit) {
    return <div>Unit not found</div>;
  }

  // Determine the material type
  if (material === 'lecture_notes') {
    materialType = 'lecture_notes';
  } else if (material === 'study_materials') {
    materialType = 'study_materials';
  } else if (material === 'mcq_papers') {
    materialType = 'mcq_papers';
  } else {
    return <div>Material type not found</div>;
  }

  // Find the material with the matching name (m_name) and log the URL
  let materialItem = null;
  if (unit[materialType]) {
    materialItem = unit[materialType].find((item) => item.name === m_name);
  }

  if (!materialItem) {
    return <div>Material not found</div>;
  }

  // Log the URL
  console.log(materialItem.url);

  // Render the unit details (you can customize this part as needed)
  return (
    <div className="h-screen px-10 py-7">
      <h2 className="text-2xl font-semibold">{unit.course_code}</h2>
      <h3 className="text-xl font-semibold">{unit.unit_title}</h3>
      <h4>{materialType}</h4>
      <ul>
        <li key={materialItem._id}>
          <a href={materialItem.url} target="_blank" rel="noopener noreferrer">
            {materialItem.name}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default UnitDetail;
