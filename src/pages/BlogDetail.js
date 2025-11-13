import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await getBlogDetails(slug);
        if (response.data.success) {
          const fetchedBlog = response.data.data.blog;
          setBlog(fetchedBlog);

          // Safely parse FAQs
          let parsedFaqs = [];
          try {
            const parsed = JSON.parse(fetchedBlog?.faqs || "[]");
            parsedFaqs = Array.isArray(parsed)
              ? parsed
              : Object.keys(parsed).map((key) => parsed[key]);
          } catch (err) {
            console.error("Invalid FAQ JSON:", err);
          }

          setFaqs(parsedFaqs);
          setCategories(response.data.data.categories || []);
          setRecentBlogs(response.data.data.recentBlogs || []);
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
        <meta
          name="description"
          content={blog?.meta_description || blog?.content?.slice(0, 150)}
        />
        <meta
          name="keywords"
          content={blog?.meta_keywords || blog?.tags}
        />
        <link
          rel="canonical"
          href={`${API_CONFIG.WEBSITE_URL}/blogdetail/${slug}`}
        />

        {/* ✅ Dynamic FAQ Schema for Google Rich Results */}
        {/* {faqs.length > 0 && ( */}
        <script type="application/ld+json">
          {`
            ${JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            })}
          `}
        </script>
        {/* )} */}
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

                  {/* FAQs */}
                  {faqs.length > 0 && (
                    <div className="mt-3">
                      <h6 className="mb-2 fs-6 fw-semibold">FAQs:</h6>
                      <div
                        className="accordion"
                        id={`faqAccordion-${blog.id}`}
                        style={{ fontSize: '0.9rem', lineHeight: '1.4' }} // smaller text overall
                      >
                        {faqs.map((faq, index) => (
                          <div className="accordion-item border-0 mb-1" key={index}>
                            <h2 className="accordion-header" id={`heading-${index}`}>
                              <button
                                className={`accordion-button py-2 px-3 ${index !== 0 ? 'collapsed' : ''
                                  } fs-6`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse-${index}`}
                                aria-expanded={index === 0 ? 'true' : 'false'}
                                aria-controls={`collapse-${index}`}
                                style={{
                                  fontSize: '0.9rem',
                                  paddingTop: '0.4rem',
                                  paddingBottom: '0.4rem',
                                }}
                              >
                                {faq.question}
                              </button>
                            </h2>
                            <div
                              id={`collapse-${index}`}
                              className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                              aria-labelledby={`heading-${index}`}
                              data-bs-parent={`#faqAccordion-${blog.id}`}
                            >
                              <div
                                className="accordion-body py-2 px-3 text-muted"
                                style={{ fontSize: '0.85rem', lineHeight: '1.5' }}
                              >
                                {faq.answer}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
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
                    {
                      recentBlogs.map((blog, index) => (
                        <div className="row mb-3" key={index}>
                          <div className="col-4">
                            <img
                              src={`${API_CONFIG.IMAGE_URL}/${blog?.image}`}
                              className="img-fluid mb-0 rounded img-fit"
                              style={{ height: '80px' }}
                            />
                          </div>
                          <div className="col-8 ps-0">
                            <h5>
                              <Link to={`/blogdetail/${blog.slug}`} className="blog-title mb-0 fs-6">
                                {blog?.title}
                              </Link>
                            </h5>
                            <small>
                              {blog?.created_at}
                            </small>
                          </div>
                        </div>
                      ))
                    }
                    {/* <div className="row mb-3">
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
                          October 14,2026
                        </small>
                      </div>
                    </div> */}
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
