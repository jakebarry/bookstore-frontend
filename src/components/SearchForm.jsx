import React from 'react'

function SearchForm({ query, setQuery, fetchBooks }) {
    const handleChange = (e) => {
        setQuery({...query, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchBooks();
    }; 

    return (
        <form className='flex flex-col gap-4 mb-4 mt-4 w-1/2 mx-auto' onSubmit={handleSubmit}>
            <input
                type='text'
                name='title'
                placeholder='Search by Title'
                className='font-semibold border p-2 rounded-lg w-full'
                onChange={handleChange}
            >
            </input>
            <input
                type='text'
                name='author'
                placeholder='Search by Author'
                className='font-semibold border p-2 rounded-lg w-full'
                onChange={handleChange}
                >
            </input>
            <button
                type='submit'
                className='bg-blue-600 text-white p-2 rounded-lg w-full'
            >
                Submit
            </button>
        </form>
    )
}

export default SearchForm;