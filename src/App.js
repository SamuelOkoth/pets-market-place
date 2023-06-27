import React from "react";
import { Routes, Route } from "react-router-dom";
//import Custom Style scss
import "./assets/scss/themes.scss";
import Navbar from "./commonComponents/Navbar";
import Error404 from "./Pages/Error404";
import AdsList from "./Pages/Ads/AdsList"
import AdDetails from "./Pages/Ads/AdDetails";
import BlogsList from "./Pages/Blogs/BlogList";
import BlogDetails from "./Pages/Blogs/BlogDetails";
import Footer from "./commonComponents/Footer";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Contact from "./Pages/Contact/Contact";
import TopBar from "./commonComponents/TopBar";
import Subscribe from "./commonComponents/Subscribe";
import Faqs from "./Pages/Faqs/Faqs";
import PrivacyAndPolicy from "./Pages/PrivacyAndPolicy/PrivacyAndPolicy";
import ManageAds from "./Pages/Profile/ManageAds/ManageAds";
import FavoriteAds from "./Pages/Profile/FavouriteAds/FavoriteAds";
import MyProfile from "./Pages/Profile/Profile/MyProfile";
import SignOut from "./Pages/AuthPages/SignOut";
import SignUp from "./Pages/AuthPages/SignUp";
import SignIn from "./Pages/AuthPages/SignIn";
import ResetPassword from "./Pages/AuthPages/ResetPassword";
import PostAdd from "./Pages/PostYourAdd/PostAd";


function App() {
  return (
    <React.Fragment>
      <TopBar/>
      <Navbar/>
      <Routes>
        <Route exact path="*" element={<Error404 />} />
        <Route exact path="/" element={<AdsList />} />
        <Route exact path="/AdDetails" element={<AdDetails />} />
        <Route exact path="/blogs" element={<BlogsList />} />
        <Route exact path="/blogdetails" element={<BlogDetails />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/faqs" element={<Faqs />} />
        <Route exact path="/privacyandpolicy" element={<PrivacyAndPolicy />} />
        <Route exact path="/manageads" element={<ManageAds />} />
        <Route exact path="/favoriteads" element={<FavoriteAds />} />
        <Route exact path="/myprofile" element={<MyProfile />} />
        <Route exact path="/signout" element={<SignOut />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/resetpassword" element={<ResetPassword />} />
        <Route exact path="/postyourad" element={<PostAdd />} />
        {/* <Route exact path="/privacyandpolicy" element={<Signup />} /> */}
        {/* <Route exact path="/privacyandpolicy" element={<Signup />} /> */}
        {/* <Route exact path="/privacyandpolicy" element={<Signup />} /> */}
      </Routes>
      <Subscribe/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
