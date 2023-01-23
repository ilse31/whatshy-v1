import React from "react";
import { Route, Routes } from "react-router-dom";
import PersonalMessages from "../pages/apps/PersonalMessages";
import Auth from "../pages/auth/Auth";
import Landing from "../pages/LandingPage";
const Routed = () =>
{
  return (
    <Routes>
      <Route path='/' element={ <Landing /> } />
      <Route path="personal-messages" element={ <PersonalMessages /> } />
      <Route path="/auth/login" element={ <Auth /> } />
      <Route path="/auth/register" element={ <Auth /> } />
    </Routes >
  );
};

export default Routed;
