import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarker, FaClock, FaCheck, FaTimes } from 'react-icons/fa';

const EventComp = ({ event }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-4 my-4 shadow-lg
      justify-between items-center
       rounded-lg hover:shadow-xl transform hover:scale-105 transition-transform flex"
    >
      <div className="w-1/2 pr-4">
        <h2 className="text-xl font-semibold">{event.title}</h2>
        <p>{event.organizingOrganization}</p>
        <p className="mt-4">{event.description}</p>
        <div className="mt-4 flex items-center">
          <span className="mr-2">
            <FaCalendarAlt />
          </span>
          <span>{event.time}</span>
        </div>
        <div className="mt-2 flex items-center">
          <span className="mr-2">
            <FaMapMarker />
          </span>
          <span>{event.venue}</span>
        </div>
        <div className="mt-2 flex items-center">
          <span className="mr-2">
            <FaClock />
          </span>
          <span>{event.attendance}</span>
        </div>
        <div className="mt-2 flex items-center">
          <span className="mr-2">
            {event.dutyLeave ? <FaCheck className="text-green-500" /> : <FaTimes className="text-red-500" />}
          </span>
          <span>Duty Leave</span>
        </div>
      </div>
      <div className="w-1/2 flex justify-end items-end">
        <img src={event.thumbnail} alt={event.title} className="h-56 object-cover rounded-lg" />
      </div>
    </motion.div>
  );
};

export default EventComp;