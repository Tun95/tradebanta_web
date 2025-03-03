import { useState } from "react";
import userIcon from "../../../assets/icons/user.png";
import { CountryDropdown } from "react-country-region-selector";
import { HugeiconsCamera01 } from "../../../common/icons/Icons";

function Profile() {
  const [country, setCountry] = useState("");
  return (
    <div className="profile_component account_tab_component mt">
      <div className="content light_shadow">
        <div className="header">
          <div className="head">
            <h4>Edit Basic Details</h4>
          </div>
          <div className="text">
            <small>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </small>
          </div>
        </div>
        <form action="" className="form_box">
          <div className="img_icon">
            <img src={userIcon} alt="" />
            <div className="_icon l_flex">
              <HugeiconsCamera01 className="icon" />
            </div>
          </div>
          <div className="inner_form">
            <div className="form_group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Name" />
            </div>
            <div className="form_group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="username" />
            </div>
            <div className="form_group">
              <label htmlFor="country">Country</label>
              <CountryDropdown
                id="country"
                name="country"
                value={country}
                onChange={(value) => setCountry(value)}
                classes={`select`}
                defaultOptionLabel="Country"
              />
            </div>
            <div className="form_group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="email" />
            </div>
            <div className="form_group">
              <label htmlFor="phone">Mobile Number</label>
              <input type="number" id="phone" placeholder="phone" />
            </div>
          </div>{" "}
          <div className="btn">
            <button className="main_btn">Update Profile</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
