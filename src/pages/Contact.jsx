import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHero from '../sections/PageHero';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | InteriorFinisher</title>
        <meta name="description" content="Contact us for professional painting and interior finishing services. Let's bring your vision to life!" />
      </Helmet>

      <PageHero
        title="Contact"
        backgroundImage="/images/contact-hero.jpg"
        breadcrumbs={[
          { name: 'Home', link: '/' },
          { name: 'Contact' },
        ]}
      />

      {/* Let’s Connect */}
      <section className="bg-white py-5 text-dark">
        <div className="container">
          <h2 className="mb-4">Let’s Paint Something Beautiful</h2>
          <p className="fs-5">
            Have a space in need of transformation? We’d love to help you make it happen. Reach out to us with your ideas, and let’s start planning your next project.
          </p>
        </div>
      </section>

      {/* Info + Form */}
      <section className="py-lg-5 position-relative contact-section">
        <div className="container">
          <div className="row border-0 rounded overflow-hidden shadow-lg">
            {/* Contact Info */}
            <div className="col-lg-4 py-5 px-4 text-white position-relative bg-orange contact-box">
              <h4 className="mb-4 position-relative z-1">Get in Touch</h4>
              <p>Got walls that need a refresh or a room waiting for a new look? Our expert painters are here to bring colour, precision, and life to your space. Share your vision with us—and let’s turn it into a beautifully finished reality.</p>

              <div className="mb-3 d-flex align-items-start">
                <FaEnvelope className="text-white me-3 mt-1 fs-5" />
                <div>
                  <h6 className="mb-1">Email</h6>
                  <p className="mb-0"><a href="mailto:kontakt@malarzstudio.pl" className="text-white">kontakt@malarzstudio.pl</a></p>
                </div>
              </div>

              <div className="mb-3 d-flex align-items-start">
                <FaPhoneAlt className="text-white me-3 mt-1 fs-5" />
                <div>
                  <h6 className="mb-1">Phone</h6>
                  <p className="mb-0"><a href="tel:+48123456789" className="text-white">+48 123 456 789</a></p>
                </div>
              </div>

              <div className="mb-4 d-flex align-items-start">
                <FaMapMarkerAlt className="text-white me-3 mt-1 fs-5" />
                <div>
                  <h6 className="mb-1">Studio</h6>
                  <address className="mb-0">
                    ul. Przykładowa 12<br />
                    00-001 Warszawa, Polska
                  </address>
                </div>
              </div>

              <div className="d-flex gap-3">
                <a href="#" className="text-white fs-5"><FaFacebookF /></a>
                <a href="#" className="text-white fs-5"><FaInstagram /></a>
                <a href="#" className="text-white fs-5"><FaLinkedinIn /></a>
              </div>
            </div>

            {/* Form */}
            <div className="col-lg-8 bg-white text-dark py-5 px-5">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                action="/thank-you"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">First Name</label>
                    <input type="text" name="firstName" className="form-control" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Last Name</label>
                    <input type="text" name="lastName" className="form-control" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Phone</label>
                    <input type="text" name="phone" className="form-control" />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Message</label>
                    <textarea name="message" rows="5" className="form-control" required></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-paint">Send message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-orange py-5">
        <div className="container">
          <h4 className="mb-4 text-white">You'll find us here</h4>
          <div className="ratio ratio-16x9 rounded shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.570969498742!2d21.01222841598993!3d52.22967577975965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc6698c28e6f%3A0xd8a7c294db7a4a2!2sWarszawa!5e0!3m2!1spl!2spl!4v1717433530387!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
