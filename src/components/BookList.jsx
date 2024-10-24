import React from 'react'

function BookList({ books }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {books.map(book => (
                <div key={book.id} className="border p-4 rounded-lg shadow-lg">
                    <h2 className="text-gray-600 text-lg font-bold">{book.title}</h2>
                    <p>Author: {book.author}</p>
                    <p>Genre: {book.genre}</p>
                    <p>Price: ${book.price}</p>
                    <p>Stock: {book.stock}</p>
                </div>
            ))}
        </div>
    );
}

export default BookList