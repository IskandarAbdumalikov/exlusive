import React from "react";
import { useNavigate } from "react-router-dom";
import "./admin.scss";

const Admin = () => {
  let navigate = useNavigate();

  function handleLogOut() {
    localStorage.clear();
    navigate("/login");
  }
  return (
    <section id="admin__hero" class="container">
      <div class="admin__hero__left">
        <ul>
          <h3>Manage My Account</h3>
          <li>My Profile</li>
          <li>Address Book</li>
          <li>My Payment Options</li>
        </ul>
        <ul>
          <h3>My Orders</h3>
          <li>My Returns</li>
          <li>My Cancellations</li>
        </ul>
        <ul>
          <h3>My WishList</h3>
        </ul>
      </div>
      <div class="admin__hero__right">
        <h2>Edit Your Profile</h2>
        <form action="" class="admin__form">
          <div class="admin__form__top">
            <div class="name">
              <label for="fname__input">First name</label>
              <input
                placeholder="Md"
                class="fname__input"
                name="fname__input"
                type="text"
              />
            </div>
            <div class="name">
              <label for="lname__input">Last Name</label>
              <input
                placeholder="Rimel"
                class="fname__input"
                name="lname__input"
                type="text"
              />
            </div>
            <div class="name">
              <label for="email__input">Email</label>
              <input
                placeholder="rimel1111@gmail.com"
                class="fname__input"
                name="email__input"
                type="email"
              />
            </div>
            <div class="name">
              <label for="fname__input">Address</label>
              <input
                placeholder="Kingston, 5236, United State"
                class="fname__input"
                name="fname__input"
                type="text"
              />
            </div>
          </div>
          <div class="admin__form__bottom">
            <label>Password Changes</label>
            <input placeholder="Current password" type="text" />
            <input placeholder="New password" type="password" />
            <input placeholder="Confirm new password" type="password" />
          </div>
          <div class="admin__form__btns">
            <a href="#" class="cancel__link">
              Cancel
            </a>
            <button class="save__changes__btn" onClick={handleLogOut}>Log out</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Admin;
