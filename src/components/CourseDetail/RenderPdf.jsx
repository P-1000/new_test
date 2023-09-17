import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import PdfViewer from '../PDF/Test'

const RenderPdf = (props) => {
  console.log(props.url)
  const url = props.url;
  const navigate = useNavigate();
  const { course_code } = useParams();

  const [pdfFile, setPdfFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setPdfFile(selectedFile);
    }
  };

  return (


        <div className="w-[100%] ">
          <PdfViewer pdfFile="https://d14uxtu9d0y7lp.cloudfront.net/650c960ec0sbivid.pdf" />
          {/* Add more content sections */}
        </div>

  );
};

export default RenderPdf;