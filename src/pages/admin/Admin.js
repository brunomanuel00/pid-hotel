// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faEnvelope, faPhone, faCircleInfo, faVenusMars,faUserTie } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'
import './Admin.css'
// import { useState } from 'react'

export default function Admin() {
    // const [page, setPage] = useState(1);
    const navigate = useNavigate()

    return (
        <div class="container-fluid m-0 p-0 sc" >
            <div class="container-fluid m-0 p-0">
                <nav class="navbar navbar-expand-lg bg-primary">
                    <div class="container-fluid ">
                        <a class="navbar-brand link-light" href="/admin">Hotel Reservations</a>
                        <ul class="nav justify-content-end">
                            <button onClick={()=>navigate('createuser')} class='btn btn-primary'>Create Users</button>
                            <a href='./TableUsers.js' class='btn btn-primary'>Table User</a>
                            <a href='./CreateRoom' class='btn btn-primary'>Create Room</a>
                            <a href='./TableRooms.js' class='btn btn-primary'>Table Rooms</a>
                            <a href='./TableRooms.js' class='btn btn-primary'>Log out</a>
                        </ul>
                    </div>
                </nav>
            </div>
            <div class='container-main'>
                <main>
                    <h1 class='h1-admin'> <b>Welcome to Hotel</b> <br /><b> Reservation Administrator</b></h1>
                </main>
            </div>
            {/* footer */}
            <div class=''>
                    <footer class="text-center text-lg-start bg-primary text-light">
                        <div class="text-center p-3" > © 2023 Copyright: <a class="text-light" href="#"> HotelsReservations.com</a>
                        </div>
                    </footer>
                </div>
        </div>
    )
}