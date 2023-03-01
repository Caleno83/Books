const BookList = ({ img, title, author, number }) => {
  console.log({ img, title, author })
console.log(number);

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{author}</h2>
      <h4>{title}</h4>
      <span className="number">{`# ${number+1}`}</span>
    </article>
  )
}

export default BookList;
