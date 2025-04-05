import { getBlogBySlug, getAllBlogs } from "@/lib/blogs";
import { remark } from "remark";
import html from "remark-html";
import "../blogs.css";

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map(blog => ({ slug: blog.slug }));
}

export default async function BlogDetail({ params }) {
  const blogData = getBlogBySlug(params.slug);
  const processedContent = await remark().use(html).process(blogData.content);
  const contentHtml = processedContent.toString();

  return (
    <div className="blog-container">
      <h1 className="blog-detail-title">{blogData.title}</h1>
      <p className="blog-detail-date">{blogData.date}</p>
      {blogData.image && (
        <img src={blogData.image} alt={blogData.title} className="blog-detail-image" />
      )}
      <div className="blog-detail-content" dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}
