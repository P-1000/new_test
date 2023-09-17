import React, { useEffect, useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useSelector } from "react-redux"; // Import useSelector to access data from the Redux store

const PdfViewer = (props) => {
  const newPlugin = defaultLayoutPlugin();
  const [pdfUrl, setPdfUrl] = useState(""); // State to store the PDF URL

  const url = props.url;
  // Use useSelector to access the data from the Redux store
  const materialData = useSelector((state)=> state.utils); // Get the material data from the utils slice

  useEffect(()=>{
    if(url){
      setPdfUrl(url.replace(/ /g, "+"));
    }
  },[url])

  const handlePdfLoadError = () => {
    alert("Error loading PDF!");
  }



  return (
    <div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.10.111/build/pdf.worker.js">
        <div style={{ height: '120vh' }} className="w-[80vw]">
          <Viewer
           onError={handlePdfLoadError}
            fileUrl={"https://d14uxtu9d0y7lp.cloudfront.net/" + pdfUrl} // Set the PDF URL here
            plugins={[
              // Register plugins
              newPlugin,
            ]}
          />
        </div>
      </Worker>
    </div>
  );
};

export default PdfViewer;
