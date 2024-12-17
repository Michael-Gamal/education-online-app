import React from 'react'
import BlogCard from './BlogCard.jsx'
import Back from '../common/back/Back.jsx'
const Blog = () => {
  return (
    <>
        <Back title="Blog Posts" />
        <section className="blog padding">
            <div className="container grid2">
                <BlogCard />
            </div>
        </section>
    </>
  )
}

export default Blog