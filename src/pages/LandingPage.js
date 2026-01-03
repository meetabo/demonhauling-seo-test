import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaPhone,
  FaStar,
  FaCheckCircle,
  FaTruck,
  FaHardHat,
  FaRecycle,
  FaMapMarkerAlt,
  FaClock,
  FaShieldAlt,
  FaTools,
  FaHome,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./LandingPage.css";

// Import SEO data - this file is updated by the CRM
import seoDataFile from "../seo-data.json";

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Get SEO data for this page
  const seo = seoDataFile?.pages?.["/"] || {};

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you! We will contact you shortly.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Helmet>
        <title>
          {seo.title ||
            "Demo N Hauling Guys - #1 Demolition Services Los Angeles | Licensed & Insured"}
        </title>
        <meta
          name="description"
          content={
            seo.meta_description ||
            "Professional demolition and junk removal services in Los Angeles. 20+ years experience, licensed & insured, same-day service. Call (818) 220-7356 for free quote!"
          }
        />
        <meta
          name="keywords"
          content="demolition Los Angeles, demolition contractors LA, junk removal Los Angeles, hauling services, residential demolition, commercial demolition, San Fernando Valley demolition"
        />
        <link
          rel="canonical"
          href={seo.canonical_url || "https://demonhaulingguys.com/"}
        />
        {seo.og_title && <meta property="og:title" content={seo.og_title} />}
        {seo.og_description && (
          <meta property="og:description" content={seo.og_description} />
        )}
        {seo.og_image && <meta property="og:image" content={seo.og_image} />}
        <meta name="robots" content={seo.robots || "index, follow"} />
      </Helmet>

      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <img
                src="https://demonhaulingguys.com/wp-content/uploads/2023/10/demon-hauling-logo@2x.png"
                alt="Demo N Hauling Guys Logo"
                className="logo-img"
              />
            </div>
            <nav className="nav">
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
              <Link to="/seo" className="seo-link">
                SEO Report
              </Link>
              <a href="tel:8182207356" className="phone-link">
                <FaPhone /> (818) 220-7356
              </a>
            </nav>
            <div className="mobile-cta">
              <a href="tel:8182207356" className="btn btn-primary">
                <FaPhone /> Call Now
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" itemScope itemType="https://schema.org/Service">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <div className={`hero-text ${isVisible ? "fade-in-up" : ""}`}>
              <div className="hero-badge">
                <span className="badge-text">
                  Best Demolition Contractors in Los Angeles
                </span>
              </div>

              <h1 itemProp="name">
                {seo.h1 || "Los Angeles' #1 Demolition & Junk Removal Experts"}
              </h1>

              <p className="hero-subtitle" itemProp="description">
                Professional Demolition Services for Residential & Commercial
                Properties. Licensed, Insured, and Trusted for Over 20 Years in
                Los Angeles, Ventura County and Surrounding Communities.
              </p>

              <div className="hero-features">
                <div className="feature-badge">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <span>5.0 Star Rated</span>
                </div>
                <div className="feature-badge">
                  <FaShieldAlt />
                  <span>Licensed & Insured</span>
                </div>
                <div className="feature-badge">
                  <FaClock />
                  <span>Same-Day Service</span>
                </div>
              </div>

              <div className="hero-buttons">
                <a href="tel:8182207356" className="btn btn-primary btn-large">
                  <FaPhone /> Get Free Quote: (818) 220-7356
                </a>
                <a href="#contact" className="btn btn-secondary btn-large">
                  Request Callback
                </a>
              </div>
            </div>

            <div className="hero-image">
              <img
                src="https://demonhaulingguys.com/wp-content/uploads/2023/10/demolition_contractor.jpg"
                alt="Professional Demolition Contractor in Los Angeles"
                className="hero-img"
              />
              <div className="image-badge">
                <p>Speak To Our Demolition Experts for Free Quote</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <div className="container">
          <div className="reviews-content">
            <div className="review-badges">
              <img
                src="https://demonhaulingguys.com/wp-content/uploads/2023/09/a3r2hp-pdx-junk-busters-google-my-business-reviews_10dw06y000000000000028.png"
                alt="Google 5 Star Reviews"
                className="review-badge-img"
              />
              <img
                src="https://demonhaulingguys.com/wp-content/uploads/2023/09/yelp-5-star-logo-png-1.png"
                alt="Yelp 5 Star Reviews"
                className="review-badge-img"
              />
            </div>
            <div className="review-text">
              <h3>Trusted by Hundreds of Satisfied Customers</h3>
              <p>
                5-star rated on Google and Yelp. Our customers love our
                professional service, fair pricing, and commitment to
                excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item fade-in-up">
              <h3>20+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item fade-in-up">
              <h3>500+</h3>
              <p>Satisfied Customers</p>
            </div>
            <div className="stat-item fade-in-up">
              <h3>5.0</h3>
              <p>Star Rating</p>
            </div>
            <div className="stat-item fade-in-up">
              <h3>100%</h3>
              <p>Satisfaction Guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Demolition & Hauling Services</h2>
            <p>
              We Do Demolition to Homes and Commercial Property, No Matter What
              Size
            </p>
          </div>

          <div className="services-grid">
            <article
              className="service-card"
              itemScope
              itemType="https://schema.org/Service"
            >
              <div className="service-image">
                <img
                  src="https://demonhaulingguys.com/wp-content/uploads/2023/10/household-demo.png"
                  alt="Residential Demolition Services"
                />
              </div>
              <div className="service-icon">
                <FaHome />
              </div>
              <h3 itemProp="name">Residential Demolition</h3>
              <p itemProp="description">
                Expert demolition services for homes, garages, sheds, and
                residential structures. Safe, efficient, and thorough removal.
              </p>
              <ul className="service-features">
                <li>
                  <FaCheckCircle /> House Demolition
                </li>
                <li>
                  <FaCheckCircle /> Garage & Shed Removal
                </li>
                <li>
                  <FaCheckCircle /> Interior Demolition
                </li>
                <li>
                  <FaCheckCircle /> Pool Demolition
                </li>
              </ul>
              <a href="tel:8182207356" className="btn btn-outline">
                Get Free Quote
              </a>
            </article>

            <article
              className="service-card"
              itemScope
              itemType="https://schema.org/Service"
            >
              <div className="service-image">
                <img
                  src="https://demonhaulingguys.com/wp-content/uploads/2023/10/commercial-demo.png"
                  alt="Commercial Demolition Services"
                />
              </div>
              <div className="service-icon">
                <FaHardHat />
              </div>
              <h3 itemProp="name">Commercial Demolition</h3>
              <p itemProp="description">
                Professional commercial demolition for businesses, retail
                spaces, warehouses, and industrial properties.
              </p>
              <ul className="service-features">
                <li>
                  <FaCheckCircle /> Office Buildings
                </li>
                <li>
                  <FaCheckCircle /> Retail Spaces
                </li>
                <li>
                  <FaCheckCircle /> Warehouse Demolition
                </li>
                <li>
                  <FaCheckCircle /> Strip-Out Services
                </li>
              </ul>
              <a href="tel:8182207356" className="btn btn-outline">
                Get Free Quote
              </a>
            </article>

            <article
              className="service-card"
              itemScope
              itemType="https://schema.org/Service"
            >
              <div className="service-image">
                <img
                  src="https://demonhaulingguys.com/wp-content/uploads/2023/10/junk-removal.png"
                  alt="Junk Removal Services"
                />
              </div>
              <div className="service-icon">
                <FaTruck />
              </div>
              <h3 itemProp="name">Junk Removal & Hauling</h3>
              <p itemProp="description">
                Fast, affordable junk removal and hauling services. We handle
                furniture, appliances, construction debris, and more.
              </p>
              <ul className="service-features">
                <li>
                  <FaCheckCircle /> Furniture Removal
                </li>
                <li>
                  <FaCheckCircle /> Appliance Hauling
                </li>
                <li>
                  <FaCheckCircle /> Construction Debris
                </li>
                <li>
                  <FaCheckCircle /> Estate Cleanouts
                </li>
              </ul>
              <a href="tel:8182207356" className="btn btn-outline">
                Get Free Quote
              </a>
            </article>

            <article
              className="service-card"
              itemScope
              itemType="https://schema.org/Service"
            >
              <div className="service-image">
                <img
                  src="https://demonhaulingguys.com/wp-content/uploads/2023/10/eco-friendly.png"
                  alt="Eco-Friendly Recycling Services"
                />
              </div>
              <div className="service-icon">
                <FaRecycle />
              </div>
              <h3 itemProp="name">Eco-Friendly Disposal</h3>
              <p itemProp="description">
                Responsible disposal and recycling services. We minimize
                landfill waste by recycling and donating whenever possible.
              </p>
              <ul className="service-features">
                <li>
                  <FaCheckCircle /> Material Recycling
                </li>
                <li>
                  <FaCheckCircle /> Donation Coordination
                </li>
                <li>
                  <FaCheckCircle /> Proper Disposal
                </li>
                <li>
                  <FaCheckCircle /> Green Practices
                </li>
              </ul>
              <a href="tel:8182207356" className="btn btn-outline">
                Get Free Quote
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Why Choose Demo N Hauling Guys?</h2>
              <p className="about-intro">
                With over 20 years of experience in the demolition and hauling
                industry, we've built a reputation for quality work, fair
                pricing, and exceptional customer service.
              </p>

              <div className="about-features">
                <div className="about-feature">
                  <FaShieldAlt className="feature-icon" />
                  <div>
                    <h4>Licensed & Fully Insured</h4>
                    <p>
                      Complete peace of mind with full licensing and
                      comprehensive insurance coverage.
                    </p>
                  </div>
                </div>

                <div className="about-feature">
                  <FaClock className="feature-icon" />
                  <div>
                    <h4>Same-Day Service Available</h4>
                    <p>
                      Need it done today? We offer same-day service for urgent
                      demolition and hauling needs.
                    </p>
                  </div>
                </div>

                <div className="about-feature">
                  <FaTools className="feature-icon" />
                  <div>
                    <h4>Professional Equipment</h4>
                    <p>
                      State-of-the-art equipment and tools for safe, efficient
                      demolition work.
                    </p>
                  </div>
                </div>

                <div className="about-feature">
                  <FaRecycle className="feature-icon" />
                  <div>
                    <h4>Eco-Friendly Practices</h4>
                    <p>
                      We prioritize recycling and responsible disposal to
                      minimize environmental impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-image">
              <img
                src="https://demonhaulingguys.com/wp-content/uploads/2023/10/about-team.jpg"
                alt="Demo N Hauling Guys Team"
              />
              <div className="experience-badge">
                <span className="years">20+</span>
                <span className="text">Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="areas-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Service Areas</h2>
            <p>
              Proudly serving Los Angeles, Ventura County, and surrounding
              communities
            </p>
          </div>

          <div className="areas-grid">
            <div className="area-item">
              <FaMapMarkerAlt />
              <span>Los Angeles</span>
            </div>
            <div className="area-item">
              <FaMapMarkerAlt />
              <span>San Fernando Valley</span>
            </div>
            <div className="area-item">
              <FaMapMarkerAlt />
              <span>Ventura County</span>
            </div>
            <div className="area-item">
              <FaMapMarkerAlt />
              <span>Santa Clarita</span>
            </div>
            <div className="area-item">
              <FaMapMarkerAlt />
              <span>Burbank</span>
            </div>
            <div className="area-item">
              <FaMapMarkerAlt />
              <span>Glendale</span>
            </div>
            <div className="area-item">
              <FaMapMarkerAlt />
              <span>Pasadena</span>
            </div>
            <div className="area-item">
              <FaMapMarkerAlt />
              <span>And More...</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Get Your Free Quote Today</h2>
            <p>
              Contact us now for a free, no-obligation estimate on your
              demolition or hauling project
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <div>
                    <h4>Call Us Now</h4>
                    <a href="tel:8182207356" className="contact-phone">
                      (818) 220-7356
                    </a>
                    <p>Available 7 days a week</p>
                  </div>
                </div>

                <div className="contact-item">
                  <FaClock className="contact-icon" />
                  <div>
                    <h4>Business Hours</h4>
                    <p>Monday - Saturday: 7:00 AM - 7:00 PM</p>
                    <p>Sunday: By Appointment</p>
                  </div>
                </div>

                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <div>
                    <h4>Service Area</h4>
                    <p>Los Angeles & Ventura County</p>
                    <p>All Surrounding Communities</p>
                  </div>
                </div>
              </div>

              <div className="trust-badges">
                <div className="badge">
                  <FaShieldAlt />
                  <span>Licensed & Insured</span>
                </div>
                <div className="badge">
                  <FaStar />
                  <span>5-Star Rated</span>
                </div>
                <div className="badge">
                  <FaClock />
                  <span>Same-Day Service</span>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Request Your Free Quote</h3>

                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Full Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Telephone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(818) 555-0123"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email (Optional)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us about your demolition or junk removal project..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-large">
                  Get Free Quote
                </button>

                <p className="form-note">
                  We'll respond within 1 hour during business hours. All quotes
                  are 100% free with no obligation.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>So, what are you waiting for?</h2>
            <p>Call now for immediate assistance and a free quote</p>
            <a
              href="tel:8182207356"
              className="btn btn-primary btn-large btn-cta"
            >
              <FaPhone /> CALL NOW (818) 220-7356
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <img
                src="https://demonhaulingguys.com/wp-content/uploads/2023/10/demon-hauling-logo@2x.png"
                alt="Demo N Hauling Guys"
                className="footer-logo"
              />
              <p>
                Professional demolition and junk removal services in Los Angeles
                since 2003. Licensed, insured, and trusted by hundreds of
                satisfied customers.
              </p>
              <div className="social-links">
                <a
                  href="https://www.facebook.com/demonhaulingguys"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
                <a
                  href="https://www.yelp.com/biz/demo-n-hauling-guys"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Yelp
                </a>
                <a
                  href="https://google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="#services">Residential Demolition</a>
                </li>
                <li>
                  <a href="#services">Commercial Demolition</a>
                </li>
                <li>
                  <a href="#services">Junk Removal</a>
                </li>
                <li>
                  <a href="#services">Hauling Services</a>
                </li>
                <li>
                  <a href="#services">Debris Removal</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <Link to="/seo">SEO Analysis</Link>
                </li>
                <li>
                  <a href="#contact">Free Quote</a>
                </li>
                <li>
                  <a href="tel:8182207356">Call Now</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contact Info</h4>
              <ul>
                <li>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:8182207356">(818) 220-7356</a>
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@demonhaulingguys.com">
                    info@demonhaulingguys.com
                  </a>
                </li>
                <li>
                  <strong>Service Area:</strong> Los Angeles & Ventura County
                </li>
                <li>
                  <strong>Hours:</strong> Mon-Sat 7AM-7PM
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 Demo N Hauling Guys. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
