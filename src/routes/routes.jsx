import React from "react";
import { Route, Routes } from "react-router-dom";
import Broadcast from "../pages/apps/Broadcast";
import Contact from "../pages/apps/Contact";
import History from "../pages/apps/History";
import PersonalMessages from "../pages/apps/PersonalMessages";
import Settings from "../pages/apps/Settings";
import Auth from "../pages/auth/Auth";
import Landing from "../pages/LandingPage";
const Routed = () =>
{
  return (
    <Routes>
      <Route path='/' element={ <Landing /> } />
      <Route path="/dashboard/personal-messages" element={ <PersonalMessages /> } />
      <Route path="/dashboard/broadcast-messages" element={ <Broadcast /> } />
      <Route path="/dashboard/contacts" element={ <Contact /> } />
      <Route path="/dashboard/history" element={ <History /> } />
      <Route path="/dashboard/settings" element={ <Settings /> } />
      <Route path="/auth/login" element={ <Auth /> } />
      <Route path="/auth/register" element={ <Auth /> } />
    </Routes >
  );
};

export default Routed;