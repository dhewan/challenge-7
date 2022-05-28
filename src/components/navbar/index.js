import React from 'react'
import { useNavigate } from 'react-router-dom';
import Style from './style.module.css'

export default function Navbar() {
    let navigate = useNavigate();

    function homePage() {
      navigate('/');
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid p-0">
        <a class="logo"  onClick={homePage}></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#os">Our Services</a>
            <a class="nav-link active" aria-current="page" href="#wu">Why Us</a>
            <a class="nav-link active" aria-current="page" href="#t">Testimonial</a>
            <a class="nav-link active" aria-current="page" href="#faq">FAQ</a>
            <button type="button" class="button-regis">Registrasi</button>
            </div>
        </div>
        </div>
        </nav>
            )
        }