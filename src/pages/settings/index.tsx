import React, {useEffect, useState} from "react";
import {Session} from "@supabase/auth-helpers-react";
import {supabase} from "@/lib/supabaseClient";
import {Avatar, Input} from "@geist-ui/core";
import styled from "styled-components";

const SettingsContainer = styled.div`
  padding: 1rem;
`

const SettingsHeader = styled.div`
  display: grid;
  grid-template-columns: 6rem 3rem;
  vertical-align: center;
  padding-bottom: 2rem;
`

const SettingsForm = styled.div`
  display: grid;
  grid-template-rows: 3rem 3rem 3rem;
  row-gap: 1rem;
`
const Settings = () => {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase?.auth?.getSession().then(({data: {session}}: any) => {
      setSession(session)
    })
  }, [])
  return (
    <SettingsContainer>
      <SettingsHeader>
        <h3>Settings</h3>
        <Avatar h={1.5} w={1.5} src={session?.user?.user_metadata?.avatar_url} />
      </SettingsHeader>
      <SettingsForm>
        <Input disabled label="Email" initialValue={session?.user?.user_metadata?.email} />
        <Input disabled label="Full Name" initialValue={session?.user?.user_metadata?.full_name} />
      </SettingsForm>
    </SettingsContainer>
  );
}

export default Settings;