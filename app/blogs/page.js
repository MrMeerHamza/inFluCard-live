import Link from "next/link";
import { getAllBlogs } from "@/lib/blogs";
import "./blogs.css";

export default async function Blogs() {
  const blogs = getAllBlogs();

  return (
    <div className="blog-wrapper">
      {/* Floating Dots Background */}
      <div className="floating-dots">
        {[...Array(30)].map((_, index) => (
          <div key={index} className="dot-wrapper">
            <span className="dot"></span>
          </div>
        ))}
      </div>

      {/* Your existing blog container - NO CHANGES */}
      <div className="blog-container">
        <h1 className="blog-list-title">Blogs</h1>
        {blogs.map((blog) => (
          <div key={blog.slug} className="blog-row">
            {blog.image && (
              <img src={blog.image} alt={blog.title} className="blog-image" />
            )}

            <div className="blog-content">
              <h2>{blog.title}</h2>
              <p>{blog.excerpt}</p>
              <Link href={`/blogs/${blog.slug}`}>Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
