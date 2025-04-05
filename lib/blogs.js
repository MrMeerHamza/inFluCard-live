import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "content", "blogs");

export function getAllBlogs() {
  const fileNames = fs.readdirSync(blogsDirectory);
  return fileNames.map(fileName => {
    const slug = fileName.replace(".md", "");
    const fullPath = path.join(blogsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    return { slug, ...data };
  });
}

export function getBlogBySlug(slug) {
  const fullPath = path.join(blogsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { slug, ...data, content };
}
