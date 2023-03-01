import React from 'react'
import { books } from './BooksData'
import BookList from './BookList'

const Books = () => {
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          console.log(book)

          return <BookList {...book} key={book.id} number={index} />
        })}
      </section>
    </>
  )
}

export default Books
