import React from 'react'

function Pagination({ page, setPage, totalPages }) {

    return (
        <div className='flex justify-center items-center gap-4 mt-4'>
            <button
                onClick={() => setPage(page - 1)}
                disabled={page == 1}
                className='bg-blue-600 rounded-lg text-white p-2'
            >
                Prev
            </button>
            <span>Page {page} of {totalPages}</span>
            <button
                onClick={() => setPage(page + 1)}
                disabled={page == totalPages}
                className='bg-blue-600 rounded-lg text-white p-2'
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;