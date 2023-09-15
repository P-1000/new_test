import React,{useState , useEffect} from 'react';
import Announcement from '../components/Announcements/Ann';
import {AiOutlineLine } from "react-icons/ai";

const Announcemnets = () => {

  const newd = localStorage.getItem('announcements');
  const data2 = JSON.parse(newd);
  const data1 = data2.data

  // sort the data by date 
  let data = data1.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  const [announcements, setAnnouncements] = useState(data);

  // filter the data by removing duplicates by subject 
  const filteredData = announcements.reduce((acc, current) => {
    const x = acc.find(item => item.subject === current.subject);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  data = filteredData;


  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <div className='flex items-center'>
      <h1 className="text-2xl font-bold my-4 ml-3">Announcements</h1>
      <hr className="flex-grow border-t-2 border-gray-300 ml-5 w-9/12"></hr>
      </div>
      <div className="space-y-4 px-2">
        {data?.map((ann) => (
          <Announcement key={ann.id} announcement={ann} />
        ))}
      </div>
    </div>
  );
};

export default Announcemnets;