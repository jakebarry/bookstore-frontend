import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import BookList from '../components/BookList';
import axios from 'axios';
import SearchForm from '../components/SearchForm';
import Pagination from '../components/Pagination';

function Home() {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState({});
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const booksPerPage = 4;

    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:3000/books', {
                params: { ...query, page, limit: booksPerPage } 
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
            <SearchForm query={query} setQuery={setQuery} fetchBooks={fetchBooks} />
            <BookList books={books} />
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </div>
    )
}

export default Home;