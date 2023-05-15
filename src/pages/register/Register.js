import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser,faEnvelope,faPhone,faCircleInfo,faVenusMars,} from "@fortawesome/free-solid-svg-icons";
import "./Register.css";
import { useState } from "react";

export default function Register() {
  const [reg, setReg] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    ci: "",
    gender: "male",
    rol:'user'
  });
  const [sent, setSent] = useState(false);

  function Succes() {
    return (
      <div class="alert alert-success" role="alert">
        Account create successfully. Go
        <a href="/" class="alert-link">
          {" "}
          back
        </a>{" "}
        or
        <a href="/login" class="alert-link">
          {" "}
          Login
        </a>
      </div>
    );
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true);
  }

  

  return (
    <div>

      {sent && <Succes/>}
      <div class="container-fluid m-0 p-0">
        <header class="header">
          <nav class="navbar navbar-expand-lg navbar-light py-3">
            <div class="container">
              {/* <!-- Navbar Brand --> */}
              <a href="/" class="navbar-brand fw-bold">
                Hotel Resevation
              </a>
            </div>
          </nav>
        </header>

        <div class="container">
          <div class="row py-5 mt-4 align-items-center">
            {/*Visual photo */}
            <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
              <img
                src="https://bootstrapious.com/i/snippets/sn-registeration/illustration.svg"
                alt=""
                class="img-fluid mb-3 d-none d-md-block"
              />
              <h1>Create an Account</h1>
              <p class="font-italic text-muted">
                Complete the fields to create a new account
              </p>
            </div>

            {/*  Registeration Form  */}
            <div class="col-md-7 col-lg-6 ml-auto">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div class="row">
                  {/*  First Name  */}
                  <div class="input-group col-lg-6 mb-4">
                    <div class="input-group-prepend">
                      <span class="input-group-text bg-white  border-md  ">
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                    </div>
                    <input id="firstName" type="text" value={reg.firstname} onChange={(e) =>  setReg({ ...reg, firstname: e.target.value })} name="firstname" placeholder="First Name" class="form-control bg-white border-left-0 border-md" required/>
                  </div>

                  {/* <!-- Last Name --> */}
                  <div class="input-group col-lg-6 mb-4">
                    <div class="input-group-prepend">
                      <span class="input-group-text bg-white border-md ">
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                    </div>
                    <input id="lastName" type="text" value={reg.lastname} onChange={(e) =>   setReg({ ...reg, lastname: e.target.value }) } name="lastname" placeholder="Last Name" class="form-control bg-white border-left-0 border-md" required/>
                  </div>
                  
                  {/* <!-- Email Address --> */}
                  <div class="input-group col-lg-12 mb-4">
                    <div class="input-group-prepend">
                      <span class="input-group-text bg-white  border-md ">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                    </div>
                    <input id="email" type="email" value={reg.email} onChange={(e) => setReg({ ...reg, email: e.target.value })} name="email" placeholder="Email Address" class="form-control bg-white border-left-0 border-md" required />
                  </div>
                  {/* <!-- Phone Number --> */}
                  <div class="input-group col-lg-12 ">
                    <div class="input-group-prepend">
                      <span class="input-group-text bg-white  border-md ">
                        <FontAwesomeIcon icon={faPhone} />
                      </span>
                    </div>
                    <div class="input-group-prepend">
                      <span class="input-group-text bg-white  border-md ">
                        +53
                      </span>
                    </div>
                    <input id="phoneNumber" type="tel" value={reg.phone} onChange={(e) => setReg({ ...reg, phone: e.target.value })} name="phone" placeholder="Phone Number" class="form-control bg-white border-md border-left-0 pl-3" required />
                  </div>
                  .{/* <!-- Id --> */}
                  <div class="input-group col-lg-6 mb-4">
                    <div class="input-group-prepend">
                      <span class="input-group-text bg-white  border-md  ">
                        <FontAwesomeIcon icon={faCircleInfo} />
                      </span>
                    </div>
                    <input id="identification" type="text" value={reg.ci} onChange={(e) => setReg({ ...reg, ci: e.target.value })} name="CI" placeholder="CI" class="form-control bg-white border-left-0 border-md" required />
                  </div>
                  {/*  Gender*/}
                  <div class="input-group col-lg-6 mb-4">
                    <div class="input-group-prepend">
                      <span class="input-group-text bg-white  border-md ">
                        <FontAwesomeIcon icon={faVenusMars} />
                      </span>
                    </div>

                    <select class="form-select form-select-sm" onChange={(e) => setReg({ ...reg, gender: e.target.value })} aria-label=".form-select-sm examp">
                      <option select>Choice your gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  {/* <!-- Submit Button --> */}
                  <div class="form-group col-lg-12 mx-auto mb-0 ">
                    <button
                      type="submit"
                      class="btn btn-primary btn-block py-2 mx-2 "
                    >
                      <span class="font-weight-bold">Create your account</span>
                    </button>
                    <a href="/" class="btn btn-danger btn-block py-2">
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
                    <p class="text-muted font-weight-bold">Already Registered?{" "}
                      <a href="/login" class="text-primary ml-2">
                        Login
                      </a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
