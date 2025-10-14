import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Book from './component/Book'
function App() {

  // Single Book
  // const bookData={
  //   title:"Physics",
  //   price:"400",
  //   img:'https://booksandyou.in/cdn/shop/files/PhysicsPartITextbookforClassXII_1.webp?v=1713763686'
  // }
  // return (
  //   <>
  //   <Book book={bookData}/>
  //   </>
  // )

const books=[
  {
    title:"Physics",
    price:"400",
    img:'https://booksandyou.in/cdn/shop/files/PhysicsPartITextbookforClassXII_1.webp?v=1713763686'
  },
   {
    title:"Chemistry",
    price:"300",
    img:'https://booksandyou.in/cdn/shop/files/PhysicsPartITextbookforClassXII_1.webp?v=1713763686'
  },
   {
    title:"Matmatics",
    price:"750",
    img:'https://booksandyou.in/cdn/shop/files/PhysicsPartITextbookforClassXII_1.webp?v=1713763686'
  }

]


  return(
    <div style={{display:'flex',gap:'20px'}}>
    {
      books.map((element,index)=>
         <Book key={index} book={element} />
      )
    }
    </div>
  )


}

export default App
