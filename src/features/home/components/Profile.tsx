import React from "react";
import styled from "styled-components";
import {Image} from "@geist-ui/icons"

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
  border: 1px solid;
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
`

const UserName = styled.p``
const UserLevel = styled.p``

const Profile = () => {
  return (
    <ProfileContainer>
      <h3>Profile</h3>
      <UserContainer>
        <Avatar><Image /></Avatar>
        <UserName>Doug Cooper</UserName>
        <UserLevel>Elementary</UserLevel>
      </UserContainer>
    </ProfileContainer>
  );
};

export default Profile;
