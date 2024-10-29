import React from 'react'

function SearchForm({ setPage, setTotalPages, query, setQuery, fetchBooks }) {
    const handleChange = (e) => {
        setQuery({...query, [e.target.name]: e.target.value});
        setTotalPages(1);
        setPage(1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchBooks();
    }; 

    return (
        <form className='flex flex-col gap-2 mb-4 mt-2 w-5/12 mx-auto text-[8px]' onSubmit={handleSubmit}>
            <input
                type='text'
                name='title'
                placeholder='Search by Title'
                className='font-semibold border p-1 rounded-lg w-full'
                onChange={handleChange}
            >
            </input>
            <input
                type='text'
                name='author'
                placeholder='Search by Author'
                className='font-semibold border p-1 rounded-lg w-full'
                onChange={handleChange}
                >
            </input>
            <button
                type='submit'
                className='bg-blue-600 text-white p-1 rounded-lg w-full'
            >
                Submit
            </button>
        </form>
    )
}

export default SearchForm;