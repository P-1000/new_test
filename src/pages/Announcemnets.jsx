import React, { useEffect } from 'react';
import Announcement from '../components/Announcements/Ann';
import {AiOutlineLine } from "react-icons/ai";

const Announcemnets = () => {


  const an = localStorage?.getItem('announcements')
  const ann  = JSON?.parse(an)

  // sort ann according to the date
  ann?.data?.sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })

  // remove duplicates from ann
  const unique = [...new Map(ann?.data?.map(item => [item['id'], item])).values()]
  ann.data = unique
  
  
  useEffect(() => {
    if (ann?.data?.length === 0) {
      alert('No Announcements')
    }
    
  }, [ann])

  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <div className='flex items-center'>
      <h1 className="text-2xl font-bold my-4 ml-3">Announcements</h1>
      <hr className="flex-grow border-t-2 border-gray-300 ml-5 w-9/12"></hr>
      </div>
      <div className="space-y-4 px-2">
        {ann?.data?.map((ann) => (
          <Announcement key={ann.id} announcement={ann} />
        ))}
      </div>
    </div>
  );
};

export default Announcemnets;