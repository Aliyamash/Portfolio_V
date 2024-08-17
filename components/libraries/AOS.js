"use client"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function AOSCL () {
    useEffect(() => {
        AOS.init();
      }, [])
}
