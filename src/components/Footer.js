import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const footerSections = {
  'mettā muse': ['About Us', 'Stories', 'Artisans', 'Boutiques', 'Contact Us', 'EU Compliances Docs'],
  'QUICK LINKS': ['Orders & Shipping', 'Join/Login as a Seller', 'Payment & Pricing', 'Return & Refunds', 'FAQs', 'Privacy Policy', 'Terms & Conditions'],
  'FOLLOW US': [],
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(prev => prev === section ? null : section);
  };

  return (
    <footer className="footer">
      <div className="footer__container">

        {/* Top Row - Newsletter + Contact */}
        <div className="footer__top">
          <div className="footer__newsletter">
            <h2 className="footer__heading">BE THE FIRST TO KNOW</h2>
            <p className="footer__subtext">Sign up for updates from mettā muse.</p>
            <div className="footer__subscribe">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className="footer__email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email for newsletter"
              />
              <button className="footer__subscribe-btn">SUBSCRIBE</button>
            </div>
          </div>

          <div className="footer__contact">
            <h2 className="footer__heading">CONTACT US</h2>
            <p className="footer__subtext">+44 221 133 5360</p>
            <p className="footer__subtext">customercare@mettamuse.com</p>
            <h2 className="footer__heading footer__heading--mt">CURRENCY</h2>
            <p className="footer__currency">
              <span className="footer__currency-flag">🌐</span> USD
            </p>
            <p className="footer__currency-note">
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </div>
        </div>

        <div className="footer__divider" />

        {/* Desktop Bottom Links */}
        <div className="footer__bottom footer__bottom--desktop">
          <div className="footer__col">
            <h3 className="footer__col-title">mettā muse</h3>
            <ul className="footer__list">
              {footerSections['mettā muse'].map(item => (
                <li key={item}><a href="#" className="footer__link">{item}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer__col">
            <h3 className="footer__col-title">QUICK LINKS</h3>
            <ul className="footer__list">
              {footerSections['QUICK LINKS'].map(item => (
                <li key={item}><a href="#" className="footer__link">{item}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer__col">
            <h3 className="footer__col-title">FOLLOW US</h3>
            <div className="footer__social">
              <a href="#" className="footer__social-icon" aria-label="Instagram">IG</a>
              <a href="#" className="footer__social-icon" aria-label="LinkedIn">in</a>
            </div>
            <h3 className="footer__col-title footer__heading--mt">mettā muse ACCEPTS</h3>
            <div className="footer__payments">
              {['GPay', 'Mastercard', 'PayPal', 'Amex', 'Apple Pay', 'OPay'].map(p => (
                <span key={p} className="footer__payment-badge">{p}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Accordion Links */}
        <div className="footer__bottom footer__bottom--mobile">
          {['mettā muse', 'QUICK LINKS', 'FOLLOW US'].map((section) => (
            <div key={section} className="footer__accordion">
              <button
                className="footer__accordion-header"
                onClick={() => toggleSection(section)}
              >
                <span>{section}</span>
                {openSection === section ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {openSection === section && (
                <div className="footer__accordion-body">
                  {section === 'FOLLOW US' ? (
                    <div className="footer__social">
                      <a href="#" className="footer__social-icon" aria-label="Instagram">IG</a>
                      <a href="#" className="footer__social-icon" aria-label="LinkedIn">in</a>
                    </div>
                  ) : (
                    <ul className="footer__list">
                      {footerSections[section].map(item => (
                        <li key={item}><a href="#" className="footer__link">{item}</a></li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Mobile payments */}
          <div className="footer__mobile-payments">
            <h3 className="footer__col-title">mettā muse ACCEPTS</h3>
            <div className="footer__payments">
              {['GPay', 'Mastercard', 'PayPal', 'Amex', 'Apple Pay', 'OPay'].map(p => (
                <span key={p} className="footer__payment-badge">{p}</span>
              ))}
            </div>
          </div>
        </div>

        <p className="footer__copy">
          Copyright © 2023 mettamuse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}