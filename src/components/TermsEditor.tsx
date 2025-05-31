import { CiEdit } from "react-icons/ci";

import { useState } from 'react';
import AdminProfile from '../pages/dashboard/components/AdminProfile';

const initialTerms = `
1. Acceptance of Terms
By using the Timberlens app, you agree to be bound by these Terms and Conditions...

2. App Purpose
TimberLens is designed to help users identify timber and tree species...

3. User Responsibilities
Users must upload clear, non-offensive images for analysis...

4. Data Usage
We may store scanned history and basic user data...

5. Intellectual Property
All content, branding, and design within TimberLens...

6. Limitations
We do not guarantee the complete accuracy of timber identification...

7. Updates
These terms may change over time...

8. Contact Us
support@timberlensapp.com
`;

export default function TermsEditor() {
  const [isEditing, setIsEditing] = useState(false);
  const [terms, setTerms] = useState(initialTerms);

  const handleToggleEdit = () => setIsEditing(!isEditing);

  const handleSave = () => {
    // Placeholder for backend save call
    console.log('Saved terms:', terms);
    setIsEditing(false);
  };

  return (
    <div className="w-full min-h-screen px-6">
        <div className=' mb-8'>
            <AdminProfile />
        </div>
      <div className="relative w-full ">
        {isEditing ? <CiEdit /> :        <button 
          onClick={handleToggleEdit}
          className="absolute top-0  right-0 px-6 py-2 mr-12 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
         cancle
        </button>}
        {/* <button 
          onClick={handleToggleEdit}
          className="absolute top-0  right-0 px-6 py-2 mr-12 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          {isEditing ? 'Cancel' : 'Edit'}
        </button> */}
      </div>

      {isEditing ? (
        <textarea
          className="w-full min-h-[calc(100vh-100px)] p-4 text-lg font-medium"
          value={terms}
          onChange={(e) => setTerms(e.target.value)}
        />
      ) : (
        <div className="w-full min-h-[calc(100vh-100px)] p-4 text-lg font-medium space-y-6">
          {terms.trim().split('\n\n').map((section) => {
            const [numberAndTitle, ...content] = section.split('\n');
            const [number, ...titleParts] = numberAndTitle.split('. ');
            const title = titleParts.join('. ');
            
            return (
              <div key={number} className='font-poppins'>
                <p className="font-bold text-xl mb-2">
                  {number}. {title}
                </p>
                {content.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            );
          })}
        </div>
      )}

      {isEditing && (
        <div className="mt-4 flex justify-center items-center">
          <button 
            onClick={handleSave}
            className="px-6 mx-auto py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
}