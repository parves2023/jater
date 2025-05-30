import React, { useState } from 'react';
import { X } from 'lucide-react';

const UsersTable = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  // Users data in JSON/array object format
  const usersData = [
    {
      id: 12330,
      name: "Ar Raihan",
      email: "arraihan815@gmail.com",
      country: "USA",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQHFDLf7-S_rtg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723765753976?e=1753920000&v=beta&t=iCMyAwdmCg9f1-RHPStNa236nUye5ck354Pa3KTR4P0",
      accountType: "Standard",
      registrationDate: "20/05/2025",
      sameClass: 8
    },
    {
      id: 12331,
      name: "Devon Lane",
      email: "devonlane53@gmail.com",
      country: "Canada",
      avatar: "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg",
      accountType: "Premium",
      registrationDate: "25/05/2025",
      sameClass: 12
    }
  ];

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setShowProfile(true);
  };

  const closeProfile = () => {
    setShowProfile(false);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="bg-white rounded-xl border border-gray-200 p-6 flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Users</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 px-4 text-gray-600 font-medium text-sm">SL</th>
                <th className="py-3 px-4 text-gray-600 font-medium text-sm">User Name</th>
                <th className="py-3 px-4 text-gray-600 font-medium text-sm">Email</th>
                <th className="py-3 px-4 text-gray-600 font-medium text-sm">Country</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((user, index) => (
<tr 
  key={user.id} 
  className={`
    transition-colors 
    cursor-pointer 
    ${selectedUser?.id === user.id 
      ? 'bg-[#15803d] text-white' 
      : 'hover:bg-[#15803d]/10 text-gray-700'
    }
  `}
  onClick={() => handleUserClick(user)}
>
  <td className={`py-3 px-4 border-b ${
    selectedUser?.id === user.id 
      ? 'border-[#15803d] font-sans' 
      : 'border-gray-100'
  }`}>
    #{user.id}
  </td>
  <td className={`py-3 px-4 border-b ${
    selectedUser?.id === user.id 
      ? 'border-[#15803d]' 
      : 'border-gray-100'
  }`}>
    <div className="flex items-center gap-3">
      <img 
        src={user.avatar} 
        alt={user.name}
        className="w-8 h-8 rounded-full object-cover"
      />
      <span className={`font-medium ${
        selectedUser?.id === user.id ? 'text-white' : 'text-gray-900'
      }`}>
        {user.name}
      </span>
    </div>
  </td>
  <td className={`py-3 px-4 border-b ${
    selectedUser?.id === user.id 
      ? 'border-[#15803d]' 
      : 'border-gray-100'
  }`}>
    {user.email}
  </td>
  <td className={`py-3 px-4 border-b ${
    selectedUser?.id === user.id 
      ? 'border-[#15803d]' 
      : 'border-gray-100'
  }`}>
    {user.country}
  </td>
</tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Profile Card */}
      {showProfile && (
        <div className="lg:w-80 bg-white rounded-xl border border-gray-200 p-6 sticky top-6 h-fit">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{selectedUser.name}</h3>
              <p className="text-gray-600 text-sm">{selectedUser.country}</p>
            </div>
            <button 
              onClick={closeProfile}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <img 
                  src={selectedUser.avatar} 
                  alt={selectedUser.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Email</p>
                <p className="text-gray-900 font-medium">{selectedUser.email}</p>
              </div>
            </div>

            <div>
              <p className="text-gray-600 text-sm">Account Type</p>
              <p className={`font-medium ${
                selectedUser.accountType === 'Premium' 
                  ? 'text-green-600' 
                  : 'text-gray-900'
              }`}>
                {selectedUser.accountType}
              </p>
            </div>

            <div>
              <p className="text-gray-600 text-sm">Registration Date</p>
              <p className="text-gray-900 font-medium">{selectedUser.registrationDate}</p>
            </div>

            <div>
              <p className="text-gray-600 text-sm">People from the same class</p>
              <p className="text-gray-900 font-medium">{selectedUser.sameClass} more</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersTable;