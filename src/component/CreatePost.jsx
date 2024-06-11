import React, { useState } from 'react';
import axios from 'axios';

import Select from 'react-select';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('content', content);
//     formData.append('image', image);

//     try {
//       await axios.post('/api/posts', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       alert('Post created successfully');
//     } catch (err) {
//       console.error(err);
//       alert('Error creating post');
//     }
//   };
const [tags, setTags] = useState([]);
const handleTagChange = (selectedOptions) => {
    setTags(selectedOptions);

  };

  const tagOptions = [
    { value: 'java', label: 'java' },
    { value: 'c++', label: 'c++' },
    { value: 'python', label: 'python' },
    { value: 'react js', label: 'react js' },
    { value: 'node js', label: 'node js' },
    { value: 'mongodb', label: 'mongodb' },
    { value: 'c', label: 'c' },
    { value: 'html', label: 'html' },
    { value: 'css', label: 'css' },
    { value: 'javascript', label: 'javascript' }
  ];


  // Custom styles for react-select in dark mode
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: '#020617',
      border: 'none',
      outline:'none',
      color: 'white'
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#020617',
      borderColor: 'none',
      outline:'none',
      color: 'white'
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: '#22C55E',
      borderColor: 'none',
      outline:'none',
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: 'white'
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#020617': state.isFocused ? '#020644' : '#020617',
      color: 'white'
    })
  };
  return (
    <div className=' mb-3'>
    <h3 className=' px-2 font-semibold mb-3'>Create</h3>
    <form className='border-[1px] p-4 rounded-lg border-slate-700'>
  {/* onSubmit={handleSubmit} */}
      <div>
        <textarea className='bg-slate-900 mb-1 w-full h-[100px] outline-none border-[1px] p-2 rounded-lg border-slate-700' placeholder='Share your ideas here...'
        //   value={content}
        //   onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
      </div>

      <div className=' text-white'>
      <h5 className=' font-semibold mb-2 text-zinc-500'>Tags</h5>
          <Select
            isMulti
            name="tags"
            options={tagOptions}
            className=" mb-3 bg-transparent bg-slate-700 border-slate-600 rounded-sm border-[1px] text-white"
            classNamePrefix="select"
            onChange={handleTagChange}
            styles={customStyles}
          />
        </div>
      <div className=' flex justify-between'>
        <label htmlFor="imageUpload" className="image-upload-label">
          <img src="\src\assets\upload-image.png" className='h-8 w-8' alt="Upload Icon" />
        </label>
        <input
          id="imageUpload"
          type="file"
          style={{ display: 'none' }}
        />
      <button type="submit" className=' text-black bg-green-500 rounded-xl px-3'>Create Post</button>
      </div>
    </form>
    </div>
  );
};

export default CreatePost;
