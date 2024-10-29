import React from 'react'

function BookList({ books }) {
    return (
        <div className='font-sans'>
            <h1 className='text-center text-gray-800 font-medium'>Popular Now</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4 place-items-center">
                {books.map(book => (
                    <div key={book.id} className="p-2 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out shadow-md w-full max-w-xs place-items-center">
                        {/* <div key={book.id} className="p-2 rounded-lg place-items-center shadow-lg w-6/12 lg:w-6/12 xl:w-5/12"> */}
                        {/* <div key={book.id} className="border p-4 rounded-lg shadow-lg place-items-left w-8/12 lg:w-6/12 xl:w-5/12"> */}
                        <img src={book.imageurl} alt={book.title} className='h-48 w-32 rounded-lg object-cover'></img>
                        <div className='p-2 mt-2 flex flex-col items-center text-center'>
                            <h2 className="text-gray-800 text-xs font-semibold mb-1">{book.title}</h2>
                        </div>
                        {/* <p className='text-[10px]'>Author: {book.author}</p> */}
                        {/* <p className='text-[10px]'>Genre: {book.genre}</p> */}
                        {/* <p className='text-[10px]'>Price: ${book.price}</p> */}
                        {/* <p className='text-[10px]'>Stock: {book.stock}</p> */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BookList