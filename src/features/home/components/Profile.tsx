import React from "react";
import styled from "styled-components";

const ProfileContainer = styled.div`
  display: grid;
  grid-template-rows: 4rem 1fr;
  align-items: center;
`

const UserContainer = styled.div`
  display: grid;
  grid-template-rows: 10rem 3rem 3rem;
  justify-content: center;
  text-align: center;
`

const Avatar = styled.div`
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  background-color: lightcoral;
`

const UserName = styled.p``
const UserLevel = styled.p``

const Profile = () => {
  return (
    <ProfileContainer>
      <h3>Profile</h3>
      <UserContainer>
        <Avatar />
        <UserName>Doug Cooper</UserName>
        <UserLevel>Elementary</UserLevel>
      </UserContainer>
    </ProfileContainer>
  );
};

export default Profile;
