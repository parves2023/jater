import React from 'react'
import { User, DollarSign, Users, TrendingUp } from 'lucide-react';

const StatsCards = () => {
  return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total User Card */}
        <div className="bg-white rounded-xl border border-green-600 p-6 relative flex flex-col items-center text-center">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <User className="w-5 h-5 text-gray-600" />
          </div>
          <h3 className="text-gray-600 text-sm font-medium mb-2">Total User</h3>
          <p className="text-3xl font-bold text-gray-900 mb-3 font-sans">12,530</p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="text-green-600 text-sm font-medium font-sans">3.1</span>
            </div>
            <span className="text-gray-500 text-sm font-sans">+0.49% this week</span>
          </div>
        </div>

        {/* Revenue Card */}
        <div className="bg-white rounded-xl border border-green-600 p-6 relative flex flex-col items-center text-center">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <DollarSign className="w-5 h-5 text-gray-600" />
          </div>
          <h3 className="text-gray-600 text-sm font-medium mb-2">Revenue</h3>
          <p className="text-3xl font-bold text-gray-900 mb-3 font-sans">$3,530</p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="text-green-600 text-sm font-medium font-sans">2.8</span>
            </div>
            <span className="text-gray-500 text-sm font-sans">+0.32% this week</span>
          </div>
        </div>

        {/* Total Subscribe Card */}
        <div className="bg-white rounded-xl border border-green-600 p-6 relative flex flex-col items-center text-center">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Users className="w-5 h-5 text-gray-600" />
          </div>
          <h3 className="text-gray-600 text-sm font-medium mb-2">Total Subscribe</h3>
          <p className="text-3xl font-bold text-gray-900 mb-3 font-sans">8,245</p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="text-green-600 text-sm font-medium font-sans">4.2</span>
            </div>
            <span className="text-gray-500 text-sm font-sans">+0.67% this week</span>
          </div>
        </div>
      </div>
  )
}

export default StatsCards