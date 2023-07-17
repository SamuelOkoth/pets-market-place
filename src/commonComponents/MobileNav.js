import React, { useState, useEffect } from "react";
import {
  Container,
  Collapse,
  NavbarToggler,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { Link } from "react-router-dom";
import withRouter from "./withRouter";

//import images
import flagUs from "../assets/images/flags/us.jpg";
import flagSp from "../assets/images/flags/spain.jpg";
import flagGr from "../assets/images/flags/germany.jpg";
import flagIt from "../assets/images/flags/italy.jpg";
import flagRu from "../assets/images/flags/russia.jpg";

import lightLogo from "../assets/images/main-logo.png";
import userImage2 from "../assets/images/user/img-02.jpg";
import jobImage4 from "../assets/images/featured-job/img-04.png";
import userImage1 from "../assets/images/user/img-01.jpg";
import jobImage from "../assets/images/featured-job/img-01.png";
import profileImage from "../assets/images/profile.jpg";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  //Notification Dropdown
  const [notification, setNotification] = useState(false);
  const dropDownnotification = () => setNotification((prevState) => !prevState);

  //user Profile Dropdown
  const [userProfile, setUserProfile] = useState(false);
  const dropDownuserprofile = () => setUserProfile((prevState) => !prevState);

  // Lanuage Drpdown
  const [dropDownlang, setDropDownlang] = useState(false);
  const dropDownlangswitcher = () => setDropDownlang((prevState) => !prevState);

  //scroll navbar
  const [navClass, setnavClass] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true);
  });

  function scrollNavigation() {
    var scrollup = window.pageYOffset;
    if (scrollup > 0) {
      setnavClass("nav-sticky");
    } else {
      setnavClass("");
    }
  }
  //menu activation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const pathName = props.router.location.pathname;
    var matchingMenuItem = null;
    var ul = document.getElementById("navbarCollapse");
    var items = ul.getElementsByTagName("a");
    removeActivation(items);
    for (var i = 0; i < items.length; ++i) {
      if (pathName === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  }, [props.router.location.pathname]);

  const removeActivation = (items) => {
    for (var i = 0; i < items.length; ++i) {
      var item = items[i];
      const parent = items[i].parentElement;
      if (item && item.classList.contains("active")) {
        item.classList.remove("active");
      }
      if (parent) {
        if (parent.classList.contains("active")) {
          parent.classList.remove("active");
        }
      }
    }
  };

  function activateParentDropdown(item) {
    item.classList.add("active");
    const parent = item.parentElement.parentElement.parentElement;

    if (parent) {
      parent.classList.add("active"); // li
      const parent2 = parent.parentElement;
      parent2.classList.add("active"); // li
      const parent3 = parent2.parentElement;
      if (parent3) {
        parent3.classList.add("active"); // li
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add("active"); // li
          const parent5 = parent4.parentElement;
          if (parent5) {
            parent5.classList.add("active"); // li
            const parent6 = parent5.parentElement;
            if (parent6) {
              parent6.classList.add("active"); // li
            }
          }
        }
      }
    }
    return false;
  }

  return (
    <React.Fragment>
      <nav
        className={
          "navbar navbar-expand-lg d-md-none p-0 mobile-nav " + navClass
        }
        id="navigation"
      >
        <Container fluid className="custom-container">
          <Link className="navbar-brand text-dark fw-bold me-auto" to="/">
            <img src={lightLogo} height="70" alt="" className="logo-dark" />
            {/* <img src={lightLogo} height="22" alt="" className="logo-light" /> */}
          </Link>
          <ul className="header-menu list-inline d-flex align-items-center mb-0">
            <Link to="/postyourad" className="btn btn-primary w-100">
              Post Your Ad
            </Link>
          </ul>
        </Container>
        <Container fluid className="custom-container">
          <div>
            <NavbarToggler
              className="me-3"
              type="button"
              onClick={() => toggle()}
            >
              <i className="mdi mdi-menu"></i>
            </NavbarToggler>
          </div>
          <Collapse
            isOpen={isOpen}
            className="navbar-collapse"
            id="navbarCollapse"
          >
            <ul className="navbar-nav mx-auto navbar-center">
              <NavItem>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/blogs">
                  Blog
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/signup">
                  <i className="uil uil-lock"></i>
                  Sign Up
                </Link>
              </NavItem>
            </ul>
          </Collapse>

          <ul className="header-menu list-inline d-flex align-items-center mb-0">
            <Link className=" list-inline-item  me-4" to="/chat">
              <div className="header-item noti-icon position-relative">
                <i className="mdi mdi-message-processing fs-22"></i>
                <div className="count position-absolute">3</div>
              </div>
            </Link>
            
            <li className="list-inline-item align-middle">
              <Dropdown
                // isOpen={dropdownOpenFlag}
                // toggle={toggle2}
                onClick={() => setDropDownlang(!dropDownlang)}
                isOpen={dropDownlang}
                toggle={dropDownlangswitcher}
                className="d-inline-block language-switch"
              >
                <DropdownToggle
                  tag="button"
                  type="button"
                  id="dropDownlang"
                  className="btn"
                >
                  <img src={flagUs} alt="" height="16" />
                </DropdownToggle>

                <DropdownMenu className="dropdown-menu-end" end>
                  <DropdownItem
                    to="/"
                    className="dropdown-item notify-item language"
                    data-lang="eng"
                  >
                    <img src={flagUs} alt="" className="me-1" height="12" />
                    <span className="align-middle">English</span>
                  </DropdownItem>
                  <DropdownItem
                    to="/"
                    className="dropdown-item notify-item language"
                    data-lang="sp"
                  >
                    <img src={flagSp} alt="" className="me-1" height="12" />
                    <span className="align-middle">Spanish</span>
                  </DropdownItem>
                  <DropdownItem
                    to="/"
                    className="dropdown-item notify-item language"
                    data-lang="gr"
                  >
                    <img src={flagGr} alt="" className="me-1" height="12" />
                    <span className="align-middle">German</span>
                  </DropdownItem>
                  <DropdownItem
                    to="/"
                    className="dropdown-item notify-item language"
                    data-lang="it"
                  >
                    <img src={flagIt} alt="" className="me-1" height="12" />
                    <span className="align-middle">Italian</span>
                  </DropdownItem>
                  <DropdownItem
                    to="/"
                    className="dropdown-item notify-item language"
                    data-lang="ru"
                  >
                    <img src={flagRu} alt="" className="me-1" height="12" />
                    <span className="align-middle">Russian</span>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>

            
            <Dropdown
              onClick={() => setUserProfile(!userProfile)}
              isOpen={userProfile}
              toggle={dropDownuserprofile}
              className="list-inline-item"
            >
              <DropdownToggle
                to="#"
                className="header-item"
                id="userdropdown"
                type="button"
                tag="a"
                aria-expanded="false"
              >
                <img
                  src={profileImage}
                  alt="mdo"
                  width="35"
                  height="35"
                  className="rounded-circle me-1"
                />{" "}
                {/* <span className="d-none d-md-inline-block fw-medium">
                Hi, Jennifer
              </span> */}
              </DropdownToggle>
              <DropdownMenu
                className="dropdown-menu-end"
                aria-labelledby="userdropdown"
                end
              >
                <li>
                  <Link className="dropdown-item" to="/manageads">
                    Manage Ads
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/favoriteads">
                    Favorite Ads
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/myprofile">
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/signout">
                    Logout
                  </Link>
                </li>
              </DropdownMenu>
            </Dropdown>
        
          </ul>
        </Container>
      </nav>
    </React.Fragment>
  );
};

export default withRouter(NavBar);
