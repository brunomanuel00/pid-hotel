import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag , faBed, faPenNib, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function CreateRoom() {
    const navigate = useNavigate()
    const [room, setRoom] = useState({
        roomNumber: "",
        roomType: "",
        description: "",
        infoAd: "",

    });
    return (

        <div>
            <div class="container-fluid m-0 p-0 sc" >
                {/* header */}
                <div class="container-fluid m-0 p-0">
                    <nav class="navbar navbar-expand-lg bg-primary">
                        <div class="container-fluid ">
                            <a class="navbar-brand link-light" href="/admin">Hotel Reservations</a>
                            <ul class="nav justify-content-end">
                                <button onClick={() => navigate('createuser')} class='btn btn-primary'>Create Users</button>
                                <a href='./TableUsers.js' class='btn btn-primary'>Table User</a>
                                <a href='./CreateRoom' class='btn btn-primary'>Create Room</a>
                                <a href='./TableRooms.js' class='btn btn-primary'>Table Rooms</a>
                                <a href='./TableRooms.js' class='btn btn-primary'>Log out</a>
                            </ul>
                        </div>
                    </nav>
                </div>
                {/* main */}
                <div>

                    <div class='container-fluid  admin-box'>
                        <div class="col-md-7 col-lg-6 ml-auto">
                            <form >
                                <h2 class='text-center mb-4 fw-bold'> Create New Room</h2>
                                <div class="row">
                                    {/*  Room number  */}
                                    <div class="input-group col-lg-6 mb-4">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text bg-white  border-md  ">
                                                <FontAwesomeIcon icon={faHashtag} />
                                            </span>
                                        </div>
                                        <input id="roomNumber" type="text" value={room.roomNumber} onChange={(e) => setRoom({ ...room, roomNumber: e.target.value })} name="roomNumber" placeholder="Room Number" class="form-control bg-white border-left-0 border-md" required />
                                    </div>

                                    {/* Room type */}
                                    <div class="input-group col-lg-6 mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white  border-md ">
                                            <FontAwesomeIcon icon={faBed} />
                                        </span>
                                    </div>

                                    <select class="form-select form-select-sm" value={room.roomType} onChange={(e) => setRoom({ ...room, roomType: e.target.value })} aria-label=".form-select-sm examp">
                                        <option select>Choose a room type</option>
                                        <option value="male">Single</option>
                                        <option value="male">Double</option>
                                        <option value="male">Queen-size</option>
                                        <option value="male">Junior-suite</option>
                                        <option value="female">Presidential</option>
                                    </select>
                                </div>

                                    {/* Description */}
                                    <div class="input-group col-lg-6 mb-4">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text bg-white border-md ">
                                                <FontAwesomeIcon icon={faPenNib} />
                                            </span>
                                        </div>
                                        <textarea id="description" value={room.description} onChange={(e) => setRoom({ ...room, description: e.target.value })} name="description" placeholder="Description" class="form-control bg-white border-left-0 border-md " style={{height : 233+'px',resize: 'none'}}/>
                                    </div>

                                    {/* More info */}
                                    <div class="input-group col-lg-12 mb-4">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text bg-white  border-md ">
                                                <FontAwesomeIcon icon={faInfoCircle} />
                                            </span>
                                        </div>
                                        <input id="ifno" type="text" value={room.infoAd} onChange={(e) => setRoom({ ...room, infoAd: e.target.value })} name="info" placeholder="Info" class="form-control bg-white border-left-0 border-md" />
                                    </div>
                                    {/* <!-- Submit Button --> */}
                                    <div class="form-group col-lg-12 mx-auto mb-0 ">
                                        <button
                                            type="submit"
                                            class="btn btn-primary btn-block py-2 mx-2 "
                                        >
                                            <span class="font-weight-bold">Create Room</span>
                                        </button>
                                        <a href="/admin" class="btn btn-danger btn-block py-2">
                                            <span class="font-weight-bold">Cancel</span>
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* footer */}
                <div class=''>
                    <footer class="text-center text-lg-start bg-primary text-light">
                        <div class="text-center p-3" > © 2023 Copyright: <a class="text-light" href="#"> HotelsReservations.com</a>
                        </div>
                    </footer>
                </div>
            </div>
        </div>

    )
}