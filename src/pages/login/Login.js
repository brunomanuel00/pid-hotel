import './Login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [found,setFound] = useState(true)
    const [user, setUser] = useState({
        email: "",
        ci: "",
        rol: ''
    });

    const [service, setService] = useState([{
        id: 1,
        email: 'admin@gmail',
        ci: '0000',
        rol:'admin'
    },
    {
        id: 2,
        email: 'user@gmail',
        ci: '1111',
        rol:'user'
    }])

    function handleSubmit(e) {
        e.preventDefault();
        for (let i = 0; i < service.length; i++) {
            if (user.email === service[i].email && user.ci === service[i].ci && user.rol === 'user' ) {
                navigate("/user")
            }else if (user.email === service[i].email && user.ci === service[i].ci && user.rol === 'admin' ) {
                navigate("/admin")
            }
        }
          return setFound(false)

    }


    function NotFounded() {
        return (
          <div class="alert alert-danger my-3 " role="alert">
            You have entered some information incorrectly, rectify and try again
          </div>
        );
      }

    return (
        <div>
            {!found && <NotFounded/>}
            <div class='container-fluid login-box '>

                <div class="col-md-7 col-lg-4 m-auto">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div class="row">
                            <div class='mb-3'>
                                <h1 class='fw-bold text-center h1-login'>Login</h1>
                            </div>
                            {/* <!-- Email Address --> */}
                            <div class="input-group col-lg-12 mb-4">
                                <div class="input-group-prepend">
                                    <span class="input-group-text bg-white  border-md ">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </span>
                                </div>
                                <input id="email" type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} name="email" placeholder="Email Address" class="form-control bg-white border-left-0 border-md" required />
                            </div>

                            {/* <!-- Id --> */}
                            <div class="input-group col-lg-6 mb-4">
                                <div class="input-group-prepend">
                                    <span class="input-group-text bg-white  border-md  ">
                                        <FontAwesomeIcon icon={faCircleInfo} />
                                    </span>
                                </div>
                                <input id="identification" type="text" value={user.ci} onChange={(e) => setUser({ ...user, ci: e.target.value })} name="CI" placeholder="CI" class="form-control bg-white border-left-0 border-md" required />
                            </div>

                            <div class='input-group col-lg-6 mb-4'>
                            <select class="form-select form-select-sm" onChange={(e) => setUser({ ...user, rol: e.target.value })} aria-label=".form-select-sm examp">
                                <option select>Choice your rol</option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </select>
                            </div>




                            {/* <!-- Submit Button --> */}
                            <div class="form-group col-lg-12 mx-auto mb-0 ">
                                <button type='submit' class="btn btn-primary btn-block py-2 mx-2 ">
                                    <span class="font-weight-bold">Login</span>
                                </button>
                                <a href="/" class="btn btn-secondary btn-block py-2">
                                    <span class="font-weight-bold">Cancel</span>
                                </a>
                            </div>

                            {/* <!-- Divider Text --> */}
                            <div class="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                                <div class="border-bottom w-100 ml-5"></div>
                                <div class="border-bottom w-100 mr-5"></div>
                            </div>

                            {/* <!-- Already Registered --> */}
                            <div class="text-center w-100">
                                <p class="text-muted font-weight-bold">You don't have an account? <a href="/register" class="text-primary ml-2">Register</a></p>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}