import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import { getBlogs } from "../services/api"; // ✅ use service
import API_CONFIG from "../config/apiConfig";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Fetch API Blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await getBlogs();
        if (res.data.success) {
          setBlogs(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogs.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Helmet>
        <title>Blogs - SrsEvent</title>
        <meta
          name="description"
          content="Explore wedding planner blogs covering venue management, floral décor, photography, videography, catering, bridal makeover, sounds & lights, furniture and fabrications."
        />
        <link rel="canonical" href={API_CONFIG.BASE_URL} />
      </Helmet>

      <Header />
      <main className="main">
        {/* breadcrumb */}
        <div
          className="site-breadcrumb"
          style={{ background: "url(assets/img/breadcrumb/01.jpg)" }}
        >
          <div className="container">
            <h2 className="breadcrumb-title">Our Blog</h2>
          </div>
        </div>

        {/* Blog Section */}
        <div className="blog-area py-5">
          <div className="container">
            {loading ? (
              <p className="text-center">Loading blogs...</p>
            ) : (
              <div className="row">
                {currentItems.map((post) => (
                  <div className="col-md-6 col-lg-4 mb-3" key={post.id}>
                    <div className="blog-item bg-light p-2 h-100">
                      <div className="blog-item-img">
                        <img
                          src={`${API_CONFIG.IMAGE_URL}/${post.image}`}
                          alt={post.title}
                          className="img-fit2"
                        />
                      </div>
                      <div className="blog-item-info">
                        <div className="blog-item-meta">
                          <ul>
                            <li>
                              <i className="fas fa-user-circle" /> Srs Event
                            </li>
                          </ul>
                        </div>
                        <h4 className="blog-title blg-title">
                          <Link to={`/blogdetail/${post.slug}`}>{post.title}</Link>
                        </h4>
                        <p
                          className="blog-desc"
                          dangerouslySetInnerHTML={{
                            __html: post.description.substring(0, 100) + "...",
                          }}
                        />
                        <Link className="theme-btn" to={`/blogdetail/${post.slug}`}>
                          Read More <i className="fas fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {blogs.length > itemsPerPage && (
              <div className="pagination-area mt-4">
                <ul className="pagination justify-content-center">
                  <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                    <button
                      className="page-link"
                      onClick={() => handleClick(currentPage - 1)}
                    >
                      <i className="fas fa-fast-backward" />
                    </button>
                  </li>

                  {Array.from({ length: totalPages }, (_, i) => (
                    <li
                      key={i + 1}
                      className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handleClick(i + 1)}
                      >
                        {i + 1}
                      </button>
                    </li>
                  ))}

                  <li
                    className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handleClick(currentPage + 1)}
                    >
                      <i className="fas fa-fast-forward" />
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogList;
