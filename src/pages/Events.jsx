import React from 'react'
import EventComp from '../components/Events/EventComp';

const Events = () => {
  const dummyEventData = [
    {
      title: 'Tech Conference 2023',
      organizingOrganization: 'Tech Events Inc.',
      thumbnail: 'https://img.freepik.com/free-vector/modern-music-event-poster-template_1361-1292.jpg?w=2000&t=st=1694352781~exp=1694353381~hmac=be7c24dbc2ff1002ae2899df7ee48b648952bf5a81523b65ffc369e4ab383adf',
      description:
        'Join us for the largest tech conference of the year. Explore the latest trends in technology and network with industry experts.',
      attendance: 'Online',
      venue: 'Virtual Event',
      time: 'October 15, 2023, 9:00 AM - 5:00 PM',
      dutyLeave: false,
    },
    {
      title: 'Art Exhibition: Masterpieces Unveiled',
      organizingOrganization: 'Art Gallery Society',
      thumbnail: 'https://img.freepik.com/free-photo/people-taking-part-business-event_23-2149333686.jpg?t=st=1694352758~exp=1694353358~hmac=d2399145819eef97058afe4b8fda36dca70472e5c349c02a3c2240ea24a3ce13',
      description:
        'Discover the beauty of art at our exhibition. View stunning masterpieces from renowned artists around the world.',
      attendance: 'In-Person',
      venue: 'Art Gallery, 123 Main Street',
      time: 'November 5, 2023, 10:00 AM - 6:00 PM',
      dutyLeave: true,
    },
    {
      title: 'Startup Pitch Night',
      organizingOrganization: 'Startup Hub',
      thumbnail: 'https://img.freepik.com/free-psd/saturday-party-social-media-template_505751-2942.jpg?w=1380&t=st=1694352894~exp=1694353494~hmac=bc2116228e64641e53114425cdf9c5830ca1d88d4b27b5b31fa0cd9f84fdea81',
      description:
        'Witness the next generation of startups pitch their innovative ideas to a panel of investors and experts.',
      attendance: 'Online',
      venue: 'Virtual Event',
      time: 'September 30, 2023, 6:00 PM - 8:00 PM',
      dutyLeave: false,
    },
  ];

  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <div className='flex items-center'>
        <h1 className="text-2xl font-bold my-4 ml-3">Events</h1>
        <hr class="flex-grow border-t-2 border-gray-300 ml-5 w-9/12"></hr>
      </div>
      <div>
        {
          dummyEventData.map((event, index) => (
            <EventComp key={index} event={event} />
          ))
        }
      </div>
    </div>
  )
}

export default Events