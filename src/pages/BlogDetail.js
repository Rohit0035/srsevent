import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const BlogDetail = () => {
  const { id } = useParams(); // blog id from URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `https://srsevent.com/api/blogs/${id}`
        );
        setBlog(response.data); 
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-5">
        <h2>Loading blog...</h2>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="text-center py-5">
        <h2>Blog not found</h2>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blog.title} - SrsEvent</title>
        <meta name="description" content={blog.meta_description || blog.content?.slice(0, 150)} />
        <meta name="keywords" content={blog.meta_keywords || ""} />
        <link rel="canonical" href={`https://srsevent.com/blogdetail/${id}`} />
      </Helmet>

      <Header />
      <main className="main">
        <div className="blog-single-area pt-5 pb-5 bg-light">
          <div className="container">
            <div className="row">
              {/* Blog Content */}
              <div className="col-lg-8">
                <div className="blog-single-wrapper bg-white p-4 rounded shadow-sm">
                  {blog.image && (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="img-fluid mb-4 rounded"
                    />
                  )}
                  <h2 className="mb-3">{blog.title}</h2>
                  <p className="text-muted">{blog.short_description}</p>
                  <div
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  ></div>

                  {/* Tags */}
                  {blog.tags && blog.tags.length > 0 && (
                    <div className="mt-4">
                      <h6>Tags:</h6>
                      {blog.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="badge bg-dark text-white me-2 mb-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <div className="col-lg-4">
                <aside className="sidebar">
                  <div className="widget bg-white p-3 shadow-sm mb-4 rounded">
                    <h5>Categories</h5>
                    <ul className="list-unstyled">
                      <li>Wedding Planning</li>
                      <li>Destination Weddings</li>
                      <li>Luxury Decor</li>
                      <li>Bridal Styling</li>
                      <li>Event Management</li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogDetail;
