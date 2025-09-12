import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import blogimg from "../assets/img/common/bdr-1.jpg";
import blogven from "../assets/img/common/vn-b.jpg";
import blogfl from "../assets/img/common/fl-1.jpg";
import blogphoto from "../assets/img/common/ph-2.jpg";
import blogpvd from "../assets/img/common/vn-d.jpg";
import blogpwed from "../assets/img/common/ser-wedlive.png";
import blogsl from "../assets/img/common/sl-3.jpg";
import blogfurn from "../assets/img/common/ser-furn.jpg";


const BlogList = () => {
    const blogPosts = [
        { 
            id: 1, 
            img: blogven, 
            title: "Perfect Venue Management for Your Dream Wedding", 
            desc: "Discover how expert venue management ensures a flawless wedding day with the right location, décor setup, and seamless coordination.",
            author: "Srs Event", 
            date: "May 12, 2025" 
        },
        { 
            id: 2, 
            img: blogfl, 
            title: "Floral Décor Ideas to Add Elegance to Weddings", 
            desc: "From traditional roses to exotic blooms, explore trending floral décor concepts that transform your wedding into a magical celebration.",
            author: "Srs Event", 
            date: "May 12, 2025" 
        },
        { 
            id: 3, 
            img: blogphoto, 
            title: "Capturing Memories with Professional Wedding Photography", 
            desc: "Learn why hiring skilled wedding photographers is the best investment to preserve your special moments forever.",
            author: "Srs Event", 
            date: "May 12, 2025" 
        },
        { 
            id: 4, 
            img: blogpvd, 
            title: "Cinematic Wedding Videography Trends in 2025", 
            desc: "Relive every emotion of your wedding with cinematic videography that tells your love story beautifully.",
            author: "Srs Event", 
            date: "May 12, 2025" 
        },
        { 
            id: 5, 
            img: blogpwed, 
            title: "Exquisite Catering Services for Every Wedding", 
            desc: "From multi-cuisine spreads to personalized menus, know how the right catering makes your wedding feast memorable.",
            author: "Srs Event", 
            date: "May 12, 2025" 
        },
        { 
            id: 6, 
            img: blogimg, 
            title: "Bridal Makeover Trends Every Bride Should Try", 
            desc: "Check out bridal makeover styles that combine tradition and modern elegance for your big day.",
            author: "Srs Event", 
            date: "May 12, 2025" 
        },
        { 
            id: 7, 
            img: blogsl, 
            title: "Sounds & Lights Setup for a Magical Wedding Ambience", 
            desc: "Lighting and music play a vital role in setting the wedding mood—learn how professionals create the perfect vibe.",
            author: "Srs Event", 
            date: "May 12, 2025" 
        },
        { 
            id: 8, 
            img: blogfurn, 
            title: "Stylish Furniture & Fabrications for Wedding Décor", 
            desc: "Add sophistication and style to your wedding setup with trending furniture and fabric design concepts.",
            author: "Srs Event", 
            date: "May 12, 2025" 
        },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = blogPosts.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(blogPosts.length / itemsPerPage);

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
                <meta
                    name="keywords"
                    content="wedding planner Bangalore, wedding venues, floral décor, wedding photography, wedding videography, bridal makeover, catering services, wedding lights and sounds"
                />
                <link rel="canonical" href="https://srsevent.com/blog" />
                <link rel="icon" type="image/x-icon" href="assets/img/common/favicon.jpg" />
            </Helmet>

            <Header />
            <main className="main">
                {/* breadcrumb */}
                <div
                    className="site-breadcrumb "
                    style={{ background: "url(assets/img/breadcrumb/01.jpg)" }}
                >
                    <div className="container">
                        <h2 className="breadcrumb-title">Our Blog</h2>
                    </div>
                </div>

                {/* blog-area */}
                <div className="blog-area py-5">
                    <div className="container">
                        <div className="row">
                            {currentItems.map((post) => (
                                <div className="col-md-6 col-lg-4 mb-3" key={post.id}>
                                    <div className="blog-item bg-light p-2 h-100">
                                        <div className="blog-item-img">
                                            <img src={post.img} alt={post.title} className="img-fit2" />
                                        </div>
                                        <div className="blog-item-info">
                                            <div className="blog-item-meta">
                                                <ul>
                                                    <li><i className="fas fa-user-circle" /> {post.author}</li>
                                                    <li><i className="fas fa-calendar-alt" /> {post.date}</li>
                                                </ul>
                                            </div>
                                            <h4 className="blog-title blg-title">
                                                <a href="/blogdetail">{post.title}</a>...
                                            </h4>
                                            <p className=" blog-desc">{post.desc}</p>
                                            <a className="theme-btn" href="/blogdetail">
                                                Read More <i className="fas fa-arrow-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* pagination */}
                        <div className="pagination-area mt-4">
                            <ul className="pagination justify-content-center">
                                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                                    <button className="page-link" onClick={() => handleClick(currentPage - 1)}>
                                        <i className="fas fa-fast-backward" />
                                    </button>
                                </li>

                                {Array.from({ length: totalPages }, (_, i) => (
                                    <li
                                        key={i + 1}
                                        className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
                                    >
                                        <button className="page-link" onClick={() => handleClick(i + 1)}>
                                            {i + 1}
                                        </button>
                                    </li>
                                ))}

                                <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                                    <button className="page-link" onClick={() => handleClick(currentPage + 1)}>
                                        <i className="fas fa-fast-forward" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default BlogList;
