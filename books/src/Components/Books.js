import React from 'react'

const Books = () => {
  const books = [
    {
      id: 1,
      author: 'Ismael Beah',
      title: 'A Long Way Gone',
      img: 'https://m.media-amazon.com/images/I/41F3OLVtknL._SX330_BO1,204,203,200_.jpg',
    },
    {
      id: 2,
      author: 'Jeff Kinney',
      title: 'Diary of a Wimpy Kid',
      img: 'https://m.media-amazon.com/images/I/41bVEw5Md5L._SY344_BO1,204,203,200_.jpg',
    },
  ]

  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        console.log(book)

        return <BookList {...book} key={book.id} />
      })}
    </section>
  )
}

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e)
    console.log('handle form input')
  }

  const handleButtonClick = () => {
    alert('handle button click')
  }

  const handleFormSubmission = (e) => {
    e.preventDefault()
    console.log('form submitted')
  }
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />

        <button type="submit">submit</button>
        <div>
          <button onClick={handleButtonClick} type="button">
            click me
          </button>
        </div>
      </form>
    </section>
  )
}

const BookList = ({ img, title, author }) => {
  console.log({ img, title, author })

  return (
    <article className="book">
      <img src={img} />
      <h2>{author}</h2>
      <h4>{title}</h4>
    </article>
  )
}

export default Books
