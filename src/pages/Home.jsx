import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import BookList from '../components/BookList';
import axios from 'axios';

function Home() {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState([]);
    const [page, setPage] = useState([]);
    const [totalPages, setTotalPages] = useState([]);

    const booksPerPage = 10;

    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:3000/books', {
                params: { ...query, page }
            });
            setBooks(response.data.books);
            setTotalPages(Math.ceil(response.data.total / booksPerPage));
        } catch (err) {
            console.error('Error fetching books:', err);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, [query, page]);


    return (
        <div>
            <Header />
            <BookList books={books} />
        </div>
    )
}

export default Home;