// components/Footer.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiInstagram, FiFacebook, FiYoutube, FiLinkedin } from 'react-icons/fi';
import { SiPinterest } from 'react-icons/si';
import styles from '../styles/Footer.module.css';

const MyFooter = () => {
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerColumns}>
          
          {/* Collections Column */}
          <div className={styles.footerCol}>
            <h4>Collections</h4>
            <ul className={styles.columnList}>
              <li><Link href="/kitchen">Kitchen</Link></li>
              <li><Link href="/systems">Systems</Link></li>
              <li><Link href="/day">Day</Link></li>
              <li><Link href="/sofas">Sofas</Link></li>
              <li><Link href="/night">Night</Link></li>
              <li><Link href="/outdoor">Outdoor</Link></li>
              <li><Link href="/office">Office</Link></li>
              <li><Link href="/dining">Dining</Link></li>
            </ul>
          </div>

          {/* Products Column */}
          <div className={styles.footerCol}>
            <h4>Products</h4>
            <ul className={styles.columnList}>
              <li><Link href="/restaurant-furniture">Restaurant Furniture</Link></li>
              <li><Link href="/bar-furniture">Bar Furniture</Link></li>
              <li><Link href="/hotel-furniture">Hotel Furniture</Link></li>
              <li><Link href="/cane-furniture">Cane Furniture</Link></li>
              <li><Link href="/wooden-furniture">Wooden Furniture</Link></li>
              <li><Link href="/industrial-furniture">Industrial Furniture</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className={styles.footerCol}>
            <h4>Services</h4>
            <ul className={styles.columnList}>
              <li><Link href="/custom-design">Custom Design</Link></li>
              <li><Link href="/bulk-orders">Bulk Orders</Link></li>
              <li><Link href="/installation">Installation</Link></li>
              <li><Link href="/maintenance">Maintenance</Link></li>
              <li><Link href="/warranty">Warranty</Link></li>
              <li><Link href="/shipping">Shipping</Link></li>
              <li><Link href="/support">Customer Support</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className={styles.footerCol}>
            <h4>Company</h4>
            <ul className={styles.columnList}>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Social & Legal Column */}
          <div className={styles.footerCol}>
            <h4>Connect</h4>
            <ul className={styles.columnList}>
              <li><Link href="https://instagram.com" target="_blank"><FiInstagram className={styles.icon} />Instagram</Link></li>
              <li><Link href="https://facebook.com" target="_blank"><FiFacebook className={styles.icon} />Facebook</Link></li>
              <li><Link href="https://pinterest.com" target="_blank"><SiPinterest className={styles.icon} />Pinterest</Link></li>
              <li><Link href="https://youtube.com" target="_blank"><FiYoutube className={styles.icon} />Youtube</Link></li>
              <li><Link href="https://linkedin.com" target="_blank"><FiLinkedin className={styles.icon} />LinkedIn</Link></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContent}>
            <div className={styles.copyright}>
              © {currentYear} Aado Designs. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
