import React from "react";
import { Link } from "react-router-dom"

function Home() {
  return (
    <div class="container-fluid m-0 p-0">
      <div class="container-fluid m-0 p-0">
        <nav class="navbar navbar-expand-lg bg-primary">
          <div class="container-fluid ">
            <Link class="navbar-brand link-light" to="/">
              Hotel Reservations
            </Link>
            <ul class="nav justify-content-end">
              <li class="nav-item">
                <Link to="/login" class="nav-link link-light">
                  Login
                </Link>
              </li>
              <li class="nav-item ">
                <Link to="/register" class="nav-link link-light ">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <img
        src="https://www.insidehook.com/wp-content/uploads/2022/12/besthotels2022_1500x800-1.jpg"
        class="w-100"
        style={{ height: "39.7 vw" }}
        alt=""
      />
      <footer
        class="text-center text-lg-start"
        style={{ backgroundColor: "#ced4da" }}
      >
        <div
          class="text-center p-3"
          style={{ backgroundColor: "rgba" + (0, 0, 0, 0.2) }}
        >
          {" "}
          © 2023 Copyright:
          <a class="text-dark" href="#">
            HotelsReservations.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
