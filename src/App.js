import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'
import './App.css'
import {Login, Register, Admin, User} from './pages/address'
import 'bootstrap/dist/css/bootstrap.css';
import CreateUser from './pages/admin/CreateUser';
import CreateRoom from './pages/admin/CreateRoom';


export default function EditProfile() {


  function Begin() {
    return (
      <div  class="container-fluid m-0 p-0" >
        <div class="container-fluid m-0 p-0">
          <nav class="navbar navbar-expand-lg bg-primary">
            <div class="container-fluid ">
              <a class="navbar-brand link-light" href="/">Hotel Reservations</a>
              <ul class="nav justify-content-end">
                <li class="nav-item">
                  <a href="/login" class='nav-link link-light'>Login</a>
                </li>
                <li class="nav-item ">
                  <a href="/register" class='nav-link link-light '>Register</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <img src="https://www.insidehook.com/wp-content/uploads/2022/12/besthotels2022_1500x800-1.jpg" class='w-100' style={{ height: 39.7 + 'vw' }} />
        <footer class="text-center text-lg-start" style={{ backgroundColor: '#ced4da' }}>
          <div class="text-center p-3" style={{ backgroundColor: 'rgba' + (0, 0, 0, 0.2) }}> © 2023 Copyright:<a class="text-dark" href="#">HotelsReservations.com</a>
          </div>
        </footer>
      </div>
    )
  }


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Begin />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/admin' element={<Admin />}></Route>
            <Route path='/createroom' element={<CreateRoom/>}></Route>
          <Route path='/user' element={<User />}/>
        </Routes>
      </BrowserRouter>
    </>
  )

}
