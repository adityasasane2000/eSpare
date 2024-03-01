import React from 'react'
import Slider from '../components/Slider'
import Editor from '../components/Editor';

function AddJob() {
    return (
        <div className='bg-white w-screen h-[screen] flex gap-10'>
            <Slider />
            <div className='p-10'>
                <form className='space-y-8'>
                    <div className='flex gap-[15%]'>
                        <div className='flex flex-col w-[35vw] space-y-4'>
                            <label className="font-[Inter]" htmlFor="Job Type">Job Type</label>
                            <select className='border-gray-500 border-2 h-[6vh]'>
                                <option>Full Time</option>
                                <option>Part Time</option>
                                <option>Intership</option>
                            </select>
                        </div>

                        <div className='flex flex-col space-y-4'>
                            <label className="font-[Inter]" htmlFor="Job Title">Job Title</label>
                            <input type='text' placeholder='Enter Job Title' className='border-gray-500	border-2 w-[35vw] h-[6vh]'></input>
                        </div>

                    </div>

                    <div className='flex flex-col space-y-4'>
                        <label className="font-[Inter]" htmlFor="Required Skills">Required Skills</label>
                        <Editor></Editor>
                    </div>

                    <div className='flex flex-col w-[35vw] space-y-4'>
                        <label className="font-[Inter]" htmlFor="Job Type">Experience Requirements</label>
                        <select className='border-gray-500 border-2 h-[6vh]'>
                            <option>Fresher</option>
                            <option>0-1 year experience</option>
                            <option>1-2 year experience</option>
                            <option>2+ year experience</option>
                        </select>
                    </div>

                    <div className='flex flex-col space-y-4'>
                        <label className="font-[Inter]" htmlFor="Required Skills">Job Description</label>
                        <Editor></Editor>
                    </div>

                    <div className='flex flex-col space-y-4'>
                        <label className="font-[Inter]" htmlFor="Required Skills">Responsibilities</label>
                        <Editor></Editor>
                    </div>

                    <div className='flex flex-col space-y-4'>
                        <label className="font-[Inter]" htmlFor="Required Skills">Required qualification</label>
                        <Editor></Editor>
                    </div>

                    <div className='flex justify-center'>
                        <button type='submit' className='bg-sky-500 text-xl text-white p-2 rounded-lg'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddJob