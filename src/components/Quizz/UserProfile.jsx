import React from 'react';

// Sample user profile data (replace with your actual data)
const userProfile = {
  name: 'Sasuke Uchiha',
  avatarUrl: 'https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=1380&t=st=1694208337~exp=1694208937~hmac=7a5527707f7e2b04873a8a51eb6bed0c556f89dc09cb028df4f5eb4554dc041a', // Replace with the actual path to the user's avatar image
};

function UserProfile() {
  return (
    <div className="flex items-center space-x-4">
      {/* User Profile Info with Lottie Animation */}
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
        {/* Lottie Animation */}
        {/* <lottie-player
          src="https://lottie.host/6f6cfb49-ac73-4576-ac0d-b19f708d36f7/pjpa4UvuLL.json"
          background="#ffffff"
          speed="1"
          style={{ width: '100%', height: '100%' }}
          loop
          controls
          autoplay
          direction="1"
          mode="normal"
        ></lottie-player> */}

        {/* User Profile Image */}
        <img 
        style={{ width: "300%", height: "300%" , position: "absolute", top: "-100%", left: "0%"}}
          src={userProfile.avatarUrl}
          alt={`${userProfile.name}'s Profile`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* User Profile Info */}
      <div>
        <p className="text-sm font-semibold">{userProfile.name}</p>
        {/* Add more user-related information here */}
      </div>
    </div>
  );
}

export default UserProfile;
