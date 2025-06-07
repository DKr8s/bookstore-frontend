import React, { useEffect, useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/books`)
      .then(res => res.json())
      .then(setBooks)
      .catch(console.error)
  }, [])

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">📚 Bookstore</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {books.map(book => (
          <div key={book.id} className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold">{book.title}</h2>
            <p className="text-gray-600">👤 {book.author}</p>
            <p className="text-sm mt-2">{book.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
