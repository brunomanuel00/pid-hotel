// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faEnvelope, faPhone, faCircleInfo, faVenusMars,faUserTie } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Outlet, Link } from "react-router-dom";
import "./Admin.css";
// import { useState } from 'react'

export default function Admin() {
  return (
    <div class="container-fluid m-0 p-0 sc">
      <div class="container-fluid m-0 p-0">
        <nav class="navbar navbar-expand-lg bg-primary">
          <div class="container-fluid ">
            <a class="navbar-brand link-light" href="/admin">
              Hotel Reservations
            </a>
            <ul class="nav justify-content-end">
              <Link class="btn btn-primary" to="create-user">
                Create Users
              </Link>
              <Link to="users" class="btn btn-primary">
                Table User
              </Link>
              <Link to="create-room" class="btn btn-primary">
                Create Room
              </Link>
              <Link to="rooms" class="btn btn-primary">
                Table Rooms
              </Link>
              <Link to="/" class="btn btn-primary">
                Log out
              </Link>
            </ul>
          </div>
        </nav>
      </div>
      <div class="container-main">
        <main>
          <Outlet />
        </main>
      </div>
      {/* footer */}
      <div class="">
        <footer class="text-center text-lg-start bg-primary text-light">
          <div class="text-center p-3">
            {" "}
            © 2023 Copyright:{" "}
            <Link class="text-light" to="/">
              {" "}
              HotelsReservations.com
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
