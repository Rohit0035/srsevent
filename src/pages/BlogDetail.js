import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import blogimg from "../assets/img/common/bdr-1.jpg";
import userimg from "../assets/img/common/user-pic.png";

const BlogDetail = () => {
  return (
    <>
      <Helmet>
        <title>Wedding Planner Blog - SrsEvent</title>
        <meta
          name="description"
          content="Discover expert wedding planning tips, destination wedding ideas, decoration inspiration, and event management insights with SrsEvent. Plan your dream wedding in Bangalore with our professional wedding planners."
        />
        <meta
          name="keywords"
          content="wedding planner Bangalore, best wedding planner, destination wedding planning, wedding decoration ideas, wedding management company, luxury wedding services, wedding organizer Bangalore, wedding planning blog, Indian wedding planner, wedding consultant"
        />
        <link rel="canonical" href="https://srsevent.com/blog/wedding-planner" />
        <link
          rel="icon"
          type="image/x-icon"
          href="assets/img/common/favicon.jpg"
        />
      </Helmet>

      <Header />
      <main className="main">
        {/* blog single area */}
        <div className="blog-single-area pt-5 pb-5 bg-light blog-de-sec">
          <div className="container">
            <div className="row">
              {/* Blog Content */}
              <div className="col-lg-8">
                <div className="blog-single-wrapper">
                  <div className="blog-single-content">
                    <div className="blog-thumb-img">
                      <img src={blogimg} alt="Wedding Planner Tips" className="img-fit" />
                    </div>
                    <div className="blog-info">
                      <div className="blog-meta">
                        <div className="blog-meta-left">
                          <ul>
                            <li>
                              <i className="fas fa-user" />
                              <a href="#">SrsEvent Team</a>
                            </li>
                            <li>
                              <i className="fas fa-comments" />
                              120 Comments
                            </li>
                            <li>
                              <i className="fas fa-thumbs-up" />
                              540 Likes
                            </li>
                          </ul>
                        </div>
                        <div className="blog-meta-right">
                          <a href="#" className="share-btn">
                            <i className="fas fa-share-alt" />
                            Share
                          </a>
                        </div>
                      </div>
                      <div className="blog-details">
                        <h3 className="blog-details-title mb-20">
                          Why Hire a Professional Wedding Planner in Bangalore?
                        </h3>
                        <p className="mb-10">
                          Planning a wedding is one of the most exciting yet challenging
                          experiences. From venue selection and decoration themes to catering
                          and guest management, every detail needs to be perfect. Hiring a{" "}
                          <strong>wedding planner in Bangalore</strong> ensures stress-free
                          preparation, creative ideas, and professional management of your big
                          day.
                        </p>
                        <p className="mb-10">
                          At <strong>SrsEvent</strong>, we specialize in creating personalized
                          weddings that reflect your unique style. Whether you dream of a{" "}
                          <em>destination wedding</em>, a traditional Indian celebration, or a
                          modern luxury wedding, our event planning experts handle everything
                          from logistics to design.
                        </p>
                        <blockquote className="blockqoute">
                          “A wedding planner doesn’t just organize an event, they craft
                          memories that last a lifetime.”
                          <h6 className="blockqoute-author">— SrsEvent Wedding Experts</h6>
                        </blockquote>
                        <p className="mb-20">
                          With years of experience in <strong>wedding management</strong>, we
                          bring together trusted vendors, innovative decoration themes, and
                          seamless coordination to make your wedding unforgettable. From
                          <strong>pre-wedding shoots</strong> and{" "}
                          <strong>mehendi ceremonies</strong> to{" "}
                          <strong>reception parties</strong>, we cover it all.
                        </p>
                        <p className="mb-20">
                          Choosing a <strong>wedding organizer in Bangalore</strong> gives you
                          access to expert event coordination, budget-friendly packages, and
                          creative wedding themes. Let us handle the stress so you can enjoy
                          every special moment.
                        </p>
                        <hr />
                        <div className="blog-details-tags pb-20">
                          <h5>Tags : </h5>
                          <ul>
                            <li>
                              <a href="#">Wedding Planner</a>
                            </li>
                            <li>
                              <a href="#">Destination Wedding</a>
                            </li>
                            <li>
                              <a href="#">Luxury Wedding</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Blog Comments */}
                    <div className="blog-comments">
                      <h3>Comments (20)</h3>
                      <div className="blog-comments-wrapper">
                        <div className="blog-comments-single">
                          <div className="blog-comments-img">
                            <img src={userimg} alt="User" />
                          </div>
                          <div className="blog-comments-content">
                            <h5>Ananya Sharma</h5>
                            <span>
                              <i className="fas fa-clock" /> 22 Aug, 2025
                            </span>
                            <p>
                              Hiring SrsEvent was the best decision we made for our wedding in
                              Bangalore. They handled everything with perfection!
                            </p>
                            <a href="#">
                              <i className="fas fa-reply" /> Reply
                            </a>
                          </div>
                        </div>
                        <div className="blog-comments-single blog-comments-reply">
                          <div className="blog-comments-img">
                            <img src={userimg} alt="User" />
                          </div>
                          <div className="blog-comments-content">
                            <h5>Rahul Verma</h5>
                            <span>
                              <i className="fas fa-clock" /> 20 Aug, 2025
                            </span>
                            <p>
                              The decoration themes and vendor management were absolutely
                              seamless. Highly recommend SrsEvent wedding planners.
                            </p>
                            <a href="#">
                              <i className="fas fa-reply" /> Reply
                            </a>
                          </div>
                        </div>
                        <div className="blog-comments-single">
                          <div className="blog-comments-img">
                            <img src={userimg} alt="User" />
                          </div>
                          <div className="blog-comments-content">
                            <h5>Priya Nair</h5>
                            <span>
                              <i className="fas fa-clock" /> 18 Aug, 2025
                            </span>
                            <p>
                              Thank you SrsEvent for making our destination wedding a dream
                              come true. The planning was flawless!
                            </p>
                            <a href="#">
                              <i className="fas fa-reply" /> Reply
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Comment Form */}
                      <div className="blog-comments-form">
                        <h3>Leave A Comment</h3>
                        <form action="#">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Your Name*"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder="Your Email*"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  rows={5}
                                  placeholder="Your Comment*"
                                  defaultValue={""}
                                />
                              </div>
                              <button type="submit" className="theme-btn">
                                Post Comment <i className="fas fa-paper-plane" />
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="col-lg-4">
                <aside className="sidebar">
                  {/* category */}
                  <div className="widget category">
                    <h5 className="widget-title">Categories</h5>
                    <div className="category-list">
                      <a href="#">
                        <i className="fas fa-arrow-right" />
                        Wedding Planning<span>(25)</span>
                      </a>
                      <a href="#">
                        <i className="fas fa-arrow-right" />
                        Destination Weddings<span>(12)</span>
                      </a>
                      <a href="#">
                        <i className="fas fa-arrow-right" />
                        Luxury Decor<span>(18)</span>
                      </a>
                      <a href="#">
                        <i className="fas fa-arrow-right" />
                        Bridal Styling<span>(15)</span>
                      </a>
                      <a href="#">
                        <i className="fas fa-arrow-right" />
                        Event Management<span>(30)</span>
                      </a>
                    </div>
                  </div>

                  {/* social share */}
                  <div className="widget social-share">
                    <h5 className="widget-title">Follow Us</h5>
                    <div className="social-share-link">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-whatsapp" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>

                  {/* Popular Tags */}
                  <div className="widget sidebar-tag">
                    <h5 className="widget-title">Popular Tags</h5>
                    <div className="tag-list">
                      <a href="#">Wedding Planner</a>
                      <a href="#">Event Organizer</a>
                      <a href="#">Luxury Wedding</a>
                      <a href="#">Bride</a>
                      <a href="#">Groom</a>
                      <a href="#">Reception</a>
                      <a href="#">Destination Wedding</a>
                      <a href="#">Bangalore Events</a>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
        {/* blog single area end */}
      </main>
      <Footer />
    </>
  );
};

export default BlogDetail;
