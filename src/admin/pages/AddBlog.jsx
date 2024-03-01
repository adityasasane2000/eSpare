import React, { useRef, useState } from 'react'
import Slider from '../components/Slider'
import Editor from '../components/Editor';

function AddBlog() {
    const editor = useRef(null);
	const [content, setContent] = useState('');

    return (

        <div className='bg-white w-screen h-[screen] flex gap-10'>
            <Slider />
            <div className='p-10'>
                <form className='space-y-8 mt-20'>
                    <div className='flex gap-[20%]'>
                        <div className='flex flex-col w-[35vw] space-y-4'>
                            <label className="font-[Inter]" htmlFor="Job Type">Blog Post Type</label>
                            <select className='border-gray-500	border-2 h-[6vh]'>
                                <option>Select</option>
                                <option>Technical</option>
                                <option>Interviews</option>
                                <option>Services</option>
                                <option>Softwares</option>
                                <option>Android</option>
                                <option>Web Development</option>
                            </select>
                        </div>

                        <div className='flex flex-col space-y-4'>
                            <label className="font-[Inter]" htmlFor="Job Title">Blog Title</label>
                            <input type='text' placeholder='Enter Job Title' className='border-gray-500	border-2 w-[35vw] h-[6vh]'></input>
                        </div>

                    </div>

                    <div className='flex flex-col space-y-4'>
                        <label className="font-[Inter]" htmlFor="Required Skills">Blog Description</label>
                        <Editor></Editor>
                    </div>

                    <div className='flex flex-col space-y-4'>
                        <label className="font-[Inter]" htmlFor="Job Title">Blog Author</label>
                        <input type='text' placeholder='Enter Job Title' className='border-gray-500	border-2 h-[6vh]'></input>
                    </div>

                    <div className='flex flex-col space-y-4'>
                        <label className="font-[Inter]" htmlFor="Job Title">Please select blog Image</label>
                        <p className='text-sm'>Upload valid image format (gif,jpg,png,jpeg) and file name</p>
                        <input type='file' className='border-gray-500	border-2 w-[35vw] h-[6vh]'></input>
                    </div>

                    <div className='flex justify-center'>
                        <button type='submit' className='bg-sky-500 text-xl text-white p-2 rounded-lg'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddBlog