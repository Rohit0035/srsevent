import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { getBlogDetails } from "../services/api";
import API_CONFIG from "../config/apiConfig";
import imgblog from "../assets/img/common/b-1.jpg"

const BlogDetail = () => {
  const { slug } = useParams(); // blog id from URL
  const [blog, setBlog] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await getBlogDetails(slug);
        console.log(response)
        if (response.data.success) {
          setBlog(response.data.data.blog);
          setCategories(response.data.data.categories);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

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
        <title>{blog?.meta_title || blog?.title} - SrsEvent</title>
        <meta name="description" content={blog?.meta_description || blog?.content?.slice(0, 150)} />
        <meta name="keywords" content={blog?.meta_keywords || blog?.tags} />
        <link rel="canonical" href={`${API_CONFIG.WEBSITE_URL}/blogdetail/${slug}`} />
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
                      src={`${API_CONFIG.IMAGE_URL}/${blog?.image}`}
                      alt={blog?.title}
                      className="img-fluid mb-4 rounded img-fit"
                    />
                  )}
                  <h2 className="mb-3">{blog?.title}</h2>
                  {/* <p className="text-muted">{blog?.short_description}</p> */}
                  <div
                    dangerouslySetInnerHTML={{ __html: blog.description }}
                  ></div>

                  {/* Tags */}
                  {blog.tags && (
                    <div className="mt-4">
                      <h6>Tags:</h6>
                      {blog.tags.split(',').map((tag, index) => (
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
                    <h5 className="mb-3">Categories</h5>
                    <hr />
                    <ul className="list-unstyled">
                      {
                        categories.map((category, index) => (
                          <li key={index}>
                            <a href={`/blog`}>{category.name}</a>
                          </li>
                        ))
                      }
                    </ul>
                  </div>

                  <div className="widget bg-white p-3 shadow-sm mb-4 rounded">
                    <h5 className="mb-3">Recent Posts</h5>
                    <hr />
                    <div className="row mb-3">
                      <div className="col-4">
                        <img
                          src={imgblog}
                          className="img-fluid mb-0 rounded img-fit"
                          style={{ height: '80px' }}
                        />
                      </div>
                      <div className="col-8 ps-0">
                        <h5>
                          <a href="" className="blog-title mb-0 fs-6">
                            10 Award Night Themes and Execution Ideas That Wow Employees & Clients
                          </a>
                        </h5>
                        <small>
                          October 14,2025
                        </small>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-4">
                        <img
                          src={imgblog}
                          className="img-fluid mb-0 rounded img-fit"
                          style={{ height: '80px' }}
                        />
                      </div>
                      <div className="col-8 ps-0">
                        <h5>
                          <a href="" className="blog-title mb-0 fs-6">
                            10 Award Night Themes and Execution Ideas That Wow Employees & Clients
                          </a>
                        </h5>
                        <small>
                          October 14,2025
                        </small>
                      </div>
                    </div>
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
