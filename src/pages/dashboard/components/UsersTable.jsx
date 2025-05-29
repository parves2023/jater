import React from 'react'

const UsersTable = () => {
  return (
          <div className="bg-white rounded-xl shadow p-4">
        <h3 className="font-semibold mb-4">Recent Users</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b p-2 text-gray-600 font-medium">SL</th>
                <th className="border-b p-2 text-gray-600 font-medium">User Name</th>
                <th className="border-b p-2 text-gray-600 font-medium">Email</th>
                <th className="border-b p-2 text-gray-600 font-medium">Country</th>
              </tr>
            </thead>
            <tbody>
              {['Kathryn Murphy', 'Devon Lane', 'Hari Danang'].map((name, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="p-2 border-b text-gray-700">#{12330 + i}</td>
                  <td className="p-2 border-b text-gray-900 font-medium">{name}</td>
                  <td className="p-2 border-b text-gray-600">{name.split(' ')[0].toLowerCase()}@gmail.com</td>
                  <td className="p-2 border-b text-gray-600">USA</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  )
}

export default UsersTable