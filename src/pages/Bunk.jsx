import React from 'react'
import { useState } from 'react'
import AttendanceCalculator from '../components/AttendanceComponents/Bunkcomp'
import { useSelector } from 'react-redux'

const Bunk = () => {
  const attendanceData = useSelector((state) => state.attendance.initialAttendance)
  const [attendance, setAttendance] = useState(attendanceData.Attendance_Summary)
  return (
    <div className='overflow-hidden'>
      <AttendanceCalculator attendanceData={attendance} />
    </div>
  )
}

export default Bunk