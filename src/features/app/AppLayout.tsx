import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import LogOut from "@geist-ui/icons/logOut";
import {Button} from "@geist-ui/core";
import {Session, useSupabaseClient} from "@supabase/auth-helpers-react";
import {AuthChangeEvent} from "@supabase/gotrue-js";
import Home from "@geist-ui/icons/home";
import {Book, Calendar, Settings} from "@geist-ui/icons";

const NavBarContainer = styled.div`
  display: grid;
  grid-template-columns: 4rem 1fr;
  @media(max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: calc(100vh - 4rem) 4rem;
  }
`;

const SideNavBar = styled.div`
  border-right: 1px solid #2a2b39;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  @media(max-width: 800px) {
    height: 100%;
    width: 100%;
    order: 1;
  }
`;

const SideNavBarButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  @media(max-width: 800px) {
    flex-direction: row;
  }
`;

const SideNavBarNavigationButtons = styled.div`
  display: grid;
  grid-row-gap: 1rem;
  padding-top: 3rem;
  @media(max-width: 800px) {
    padding-top: 0;
    display: flex;
  }
`;

const SideNavBarOperationalButtons = styled.div`
  padding-bottom: 3rem;
  @media(max-width: 800px) {
    padding-bottom: 0;
  }
`;

type AppLayoutProps = {
  children: any;
};
const AppLayout: FC<AppLayoutProps> = ({children}) => {
  const supabase = useSupabaseClient()
  const router = useRouter()
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }: any) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event: AuthChangeEvent, session: Session | null) => {
        setSession(session);
      }
    );

    return () => subscription.unsubscribe();
  }, []);
  function determineButtonBackgroundColor(path: string) {
    if (router.pathname === path) {
      return "#272832";
    } else {
      return "transparent";
    }
  }
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    await router.push("/");
  }
  type Route = {
    name: string,
    path: string,
    icon: any
  }
  // TODO: Add Icon
  const routes: Route[] = [{
    name: "Home",
    path: "/",
    icon: <Home />
  }, {
    name: "Schedule",
    path: "/schedule",
    icon: <Calendar />
  }, {
    name: "Courses",
    path: "/courses",
    icon: <Book />
  }, {
    name: "Settings",
    path: "/settings",
    icon: <Settings />
  }]

  if (session) {
    return (
      <>
        <NavBarContainer>
          <SideNavBar>
            <SideNavBarButtonContainer>
              <SideNavBarNavigationButtons>
                {routes.map((route: Route) => {
                  return (
                    <Button
                      key={route.name}
                      onClick={() => router.push(route.path)} style={{backgroundColor: determineButtonBackgroundColor(route.path), border: 0}}
                      auto
                      icon={route.icon}
                      scale={1} />
                  )
                })}
              </SideNavBarNavigationButtons>
              <SideNavBarOperationalButtons>
                <Button
                  onClick={signOut}
                  style={{ backgroundColor: "transparent", border: 0 }}
                  icon={<LogOut />}
                  auto
                  scale={1}
                />
              </SideNavBarOperationalButtons>
            </SideNavBarButtonContainer>
          </SideNavBar>
          {children}
        </NavBarContainer>
      </>
    );
  } else {
    return <>{children}</>;
  }
};

export default AppLayout
