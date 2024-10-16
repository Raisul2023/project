import { LuShirt } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { TbDiscount2 } from "react-icons/tb";
import { CiBadgeDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import newsLetterImg from "../../assets/images/newsletter.png";
import Button from "@mui/material/Button";
import { IoMailOutline } from "react-icons/io5";
import Banners from "../banners/index";
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../../utils/api";

const Footer = () => {
  const [bannerList, setBannerList] = useState([]);

  return (
    <>
      <div className="container">
        
      </div>
      <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-1">
                $20 discount for your first order
              </p>
              <h3 className="text-white">Join our newsletter and get...</h3>
              <p className="text-light">
                Join our email subscription now to get updates on
                <br /> promotions and coupons.
              </p>

              <form className="mt-4">
                <IoMailOutline />
                <input type="text" placeholder="Your Email Address" />
                <Button>Subscribe</Button>
              </form>
            </div>

            <div className="col-md-6">
              <img src={newsLetterImg} />
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="topInfo row">
            <div className="col d-flex align-items-center">
              <span>
                <LuShirt />
              </span>
              <span className="ml-2">Everyday fresh products</span>
            </div>

            <div className="col d-flex align-items-center">
              <span>
                <TbTruckDelivery />
              </span>
              <span className="ml-2">Free delivery for order over $70</span>
            </div>

            <div className="col d-flex align-items-center">
              <span>
                <TbDiscount2 />
              </span>
              <span className="ml-2">Daily Mega Discounts</span>
            </div>

            <div className="col d-flex align-items-center">
              <span>
                <CiBadgeDollar />
              </span>
              <span className="ml-2">Best price on the market</span>
            </div>
          </div>

          <div className="row mt-5 linksWrap text-transform-center">

            <div className="col-md-5">
              <h5>About Us</h5>
              <h6>Welcome to TrendifyStore, your go-to destination for the latest trends and must-have products across a wide range of categories. We are committed to bringing you a curated selection of fashion, electronics, home essentials, beauty products, and much more — all at competitive prices.</h6>
              
            </div>

            <div className="col-md-5">
              <h5>Contact Us</h5>
              <p>Head Office</p>
              <p className="my-0">Kusholi Bhaban, 4th Floor, 238/1 Begum Rokeya Sharani, Agargaon, Dhaka-1207</p>
              <p className="mb-0">Phone: 01995487213</p>
              <p>Email: trendifystore247@gmail.com</p>
              
            </div>

            <div className="col-md-2">
              <h5>Useful links</h5>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/my-account">My Account</Link>
                </li>
                <li>
                  <Link to="/orders">Orders</Link>
                </li>
                <li>
                  <Link to="my-list">Wishlist</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="copyright pt-3 pb-3 d-flex">
            <p className="mb-0">Copyright 2024. All rights reserved</p>
            <ul className="list list-inline ml-auto mb-0 socials">
              <li className="list-inline-item">
                <Link to="#">
                  <FaFacebookF />
                </Link>
              </li>

              <li className="list-inline-item">
                <Link to="#">
                  <FaTwitter />
                </Link>
              </li>

              <li className="list-inline-item">
                <Link to="#">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
