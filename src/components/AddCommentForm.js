import React from "react";

const AddCommentForm = () => {
    return (
        <form className='shadow rounded px-8 pt-6 pb-8 mb-4'>
            <h3 className='text-xl font-bold mb-4 text-gray-900'>Add a Comment</h3>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Name: </label>
            <input type="text" className='shadow appearance-none border rounded w-full
            py-2 px-3 text-gray-700 leading-tight focus:outline-none 
            focus:shadow-outline' />
            <label className='block text-gray-700 text-sm font-bold mb-2'>comment: </label>
            <textarea rows="4" cols="50" className='shadow appearance-none border rounded w-full
            py-2 px-3 text-gray-700 leading-tight focus:outline-none 
            focus:shadow-outline' />
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold
             py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                 Add Comment
            </button>

        </form>
    )
};

export default AddCommentForm;