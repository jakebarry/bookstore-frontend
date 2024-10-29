import React from 'react'

function Pagination({ page, setPage, totalPages }) {

    return (
        <div className='flex justify-center items-center font-medium font-sans gap-3 mt-1 text-[10px]'>
            <button
                onClick={() => setPage(page - 1)}
                disabled={page == 1}
                className='bg-blue-600 rounded-lg text-white p-1.5'
            >
                Prev
            </button>
            <span>Page {page} of {totalPages}</span>
            <button
                onClick={() => setPage(page + 1)}
                disabled={page == totalPages}
                className='bg-blue-600 rounded-lg text-white p-1.5'
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;