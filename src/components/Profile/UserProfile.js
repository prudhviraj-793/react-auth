import { useContext } from "react";
import Context from "../Context/Context";
import ProfileForm from "./ProfileForm";
import classes from "./UserProfile.module.css";

const UserProfile = () => {
  const ctx = useContext(Context);
  return (
    ctx.token && (
      <section className={classes.profile}>
        <h1>Your User Profile</h1>
        <ProfileForm />
      </section>
    )
  );
};

export default UserProfile;
