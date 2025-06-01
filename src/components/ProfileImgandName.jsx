import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiEdit } from 'react-icons/fi';
import Swal from 'sweetalert2';

const ProfileImgandName = () => {
  const [imagePreview, setImagePreview] = useState(
    'https://static.vecteezy.com/system/resources/thumbnails/051/670/568/small/a-contented-financial-analyst-surrounded-by-growth-charts-photo.jpeg'
  );

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to change your profile picture?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, change it!',
        cancelButtonText: 'Cancel',
        confirmButtonColor: '#10B981', // Tailwind green-500
        cancelButtonColor: '#EF4444', // Tailwind red-500
      }).then((result) => {
        if (result.isConfirmed) {
          setImagePreview(URL.createObjectURL(file));
          Swal.fire({
            title: 'Updated!',
            text: 'Your profile picture has been changed.',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false,
          });
        }
      });
    }
  }, []);

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    accept: {
      'image/*': []
    },
    noClick: true,
    noKeyboard: true
  });

  return (
    <div className="flex flex-col items-center mb-8">
      <div className="relative mb-4" {...getRootProps()}>
        <input {...getInputProps()} />
        <img
          src={imagePreview}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md cursor-pointer"
        />
        <button
          type="button"
          onClick={open}
          className="absolute bottom-0 right-0 bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors"
        >
          <FiEdit className="text-lg" />
        </button>
      </div>
      <h1 className="text-2xl font-bold text-center">Robert Smith</h1>
    </div>
  );
};

export default ProfileImgandName;
