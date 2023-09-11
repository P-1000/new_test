 
  
  const appointments = data.map((item, index) => {
    const [startHour, startMinute] = item.timing.split('-')[0].trim().split(':').map(Number);
    const [endHour, endMinute] = item.timing.split('-')[1].trim().split(':').map(Number);
  
    // Use 8 for September, 25th for the date.
    const startDate = new Date(2023, 8, 25, startHour, startMinute);
    const endDate = new Date(2023, 8, 25, endHour, endMinute);
  
    return {
      title: item.course,
      startDate,
      endDate,
      id: index,
      location: `Room ${item.platform}`,
    };
  });
  
  console.log(appointments);
  