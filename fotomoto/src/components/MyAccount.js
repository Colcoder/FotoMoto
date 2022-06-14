import React, { useEffect, useState } from "react";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';
//sx attribute styles materialUI components


//import { loadProfile } from "../redux/actions/userActions";
//import { connect } from "react-redux";

const MyAccount = (props) => {
  const [currentUser, setCurrentUser] = useState({});

  const handleImageUpload = (event) => {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = () => {
      setCurrentUser({
        ...currentUser,
        [event.target.name]: reader.result,
      });
    };
  };


  useEffect(() => {
    if (props.profile) {
      setCurrentUser(props.profile);
    }
  }, [props.profile]);

  return (
   
    <>
    <div>
      <form className="post-form">
             <div className="post-inputs" >
             <input
                type="file"
                name="post"
                id="avatar"
                onChange={handleImageUpload}
                accept="image/png, image/jpeg"
                //hidden
                className="post-upload"
              />

             <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Say something about your post"
                style={
                  { width: 200,
                  marginTop: '15px',
                }
              }
              />
              <Button sx={
                  {
                    display: 'block',
                    marginTop:3,
                    color:'#44158f'
                  }
                } variant="text">
                  Post
                  </Button>
             </div>
      </form>
    </div>
    </>  
         
  );
};

/*const mapStateToProps = ({ users }) => ({ profile: users.profile });
const mapDispatchToProps = {
  loadProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);*/
export default MyAccount;