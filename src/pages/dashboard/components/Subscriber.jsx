import React from 'react';
import { Check } from 'lucide-react';

const Subscriber = () => {
  // Subscription data
  const subscriptionData = [
    {
      date: '12/05/25',
      userName: 'Hasnain Jarir',
      planName: 'Basic',
      price: '$79.99',
      paymentMethod: 'Stripe',
      expireDate: '12/05/25',
      status: 'active'
    },
    {
      date: '12/05/25',
      userName: 'Hasnain Jarir',
      planName: 'Pro',
      price: '$07.99',
      paymentMethod: 'Stripe',
      expireDate: '12/05/25',
      status: 'active'
    },
    {
      date: '12/05/25',
      userName: 'Hasnain Jarir',
      planName: 'Collector',
      price: '$79.99',
      paymentMethod: 'Stripe',
      expireDate: '12/05/25',
      status: 'active'
    }
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Subscription & Payment</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-3 px-4 text-gray-600 font-medium text-sm">Date</th>
              <th className="py-3 px-4 text-gray-600 font-medium text-sm">User Name</th>
              <th className="py-3 px-4 text-gray-600 font-medium text-sm">Plan Name</th>
              <th className="py-3 px-4 text-gray-600 font-medium text-sm">Price</th>
              <th className="py-3 px-4 text-gray-600 font-medium text-sm">Payment Method</th>
              <th className="py-3 px-4 text-gray-600 font-medium text-sm">Expire Date</th>
              <th className="py-3 px-4 text-gray-600 font-medium text-sm">Action</th>
            </tr>
          </thead>
          <tbody>
            {subscriptionData.map((subscription, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="py-3 px-4 border-b border-gray-100 text-gray-700">
                  {subscription.date}
                </td>
                <td className="py-3 px-4 border-b border-gray-100 text-gray-900 font-medium">
                  {subscription.userName}
                </td>
                <td className="py-3 px-4 border-b border-gray-100 text-gray-700">
                  {subscription.planName}
                </td>
                <td className="py-3 px-4 border-b border-gray-100 text-gray-700">
                  {subscription.price}
                </td>
                <td className="py-3 px-4 border-b border-gray-100 text-gray-700">
                  {subscription.paymentMethod}
                </td>
                <td className="py-3 px-4 border-b border-gray-100 text-gray-700">
                  {subscription.expireDate}
                </td>
                <td className="py-3 px-4 border-b border-gray-100">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Subscriber;