// import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import LowHeader from "./LowHeader";
import { BiSearch } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import { DataContext } from "../DataProvider/DataProvider";
import React, { useContext } from "react";
import { auth } from "../../Utility/firebase";
import { Type } from "../../Utility/action.type";
function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  // console.log(basket);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header__container}>
          <div className={classes.logo__container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
            </div>
            <div>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <BiSearch size={38} className={classes.search_img} />
          </div>
          <div className={classes.order__container}>
            <Link to="" className={classes.language}>
              <img src="/flag.ico" alt="" />
              <select>
                <option value="">EN</option>
              </select>
            </Link>
            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello{user?.email?.split("@")[0]}</p>
                    <span
                      onClick={() => {
                        auth.signOut()
                        // dispatch({
                        //   type:Type.SET_USER,
                        //   user:null
                        // });
                      }}
                    >
                      Sign Out
                    </span>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>
            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowHeader />
    </section>
  );
}

export default Header;
