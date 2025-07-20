import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import MyDashboard from '../components/dashbord';
import MainScreenWrapper from '../components/MainScreenWrapper';
import Navbar from '../components/navbar'
import HeroSlider from '../components/HeroSlider'
import MyFooter from '../components/Myfooter'
export default function Dashboard() {

return (

  <MainScreenWrapper>
  <Navbar/>
  <MyDashboard />
 
  <br />
  <MyFooter/>
  </MainScreenWrapper>
  )
}