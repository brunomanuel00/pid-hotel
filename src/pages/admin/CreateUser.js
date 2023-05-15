import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faCircleInfo,
  faVenusMars,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const navigate = useNavigate();
  const [person, setPerson] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    ci: "",
    gender: "",
    rol: "",
  });

  return (
    <div class="container-fluid m-0 p-0 sc">
      <div>
        <div class="container-fluid  admin-box">
          <div class="col-md-7 col-lg-6 ml-auto">
            <form>
              <h2 class="text-center mb-4 fw-bold"> New user</h2>
              <div class="row">
                {/*  First Name  */}
                <div class="input-group col-lg-6 mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-white  border-md  ">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                  </div>
                  <input
                    id="firstName"
                    type="text"
                    value={person.firstname}
                    onChange={(e) =>
                      setPerson({ ...person, firstname: e.target.value })
                    }
                    name="firstname"
                    placeholder="First Name"
                    class="form-control bg-white border-left-0 border-md"
                    required
                  />
                </div>
                {/* <!-- Last Name --> */}
                <div class="input-group col-lg-6 mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-white border-md ">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                  </div>
                  <input
                    id="lastName"
                    type="text"
                    value={person.lastname}
                    onChange={(e) =>
                      setPerson({ ...person, lastname: e.target.value })
                    }
                    name="lastname"
                    placeholder="Last Name"
                    class="form-control bg-white border-left-0 border-md"
                    required
                  />
                </div>
                {/* <!-- Email Address --> */}
                <div class="input-group col-lg-12 mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-white  border-md ">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={person.email}
                    onChange={(e) =>
                      setPerson({ ...person, email: e.target.value })
                    }
                    name="email"
                    placeholder="Email Address"
                    class="form-control bg-white border-left-0 border-md"
                    required
                  />
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
                  <input
                    id="phoneNumber"
                    type="tel"
                    value={person.phone}
                    onChange={(e) =>
                      setPerson({ ...person, phone: e.target.value })
                    }
                    name="phone"
                    placeholder="Phone Number"
                    class="form-control bg-white border-md border-left-0 pl-3"
                    required
                  />
                </div>
                .{/* <!-- Id --> */}
                <div class="input-group col-lg-6 mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-white  border-md  ">
                      <FontAwesomeIcon icon={faCircleInfo} />
                    </span>
                  </div>
                  <input
                    id="identification"
                    type="text"
                    value={person.ci}
                    onChange={(e) =>
                      setPerson({ ...person, ci: e.target.value })
                    }
                    name="CI"
                    placeholder="CI"
                    class="form-control bg-white border-left-0 border-md"
                    required
                  />
                </div>
                {/*  Gender*/}
                <div class="input-group col-lg-6 mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-white  border-md ">
                      <FontAwesomeIcon icon={faVenusMars} />
                    </span>
                  </div>

                  <select
                    class="form-select form-select-sm"
                    value={person.gender}
                    onChange={(e) =>
                      setPerson({ ...person, gender: e.target.value })
                    }
                    aria-label=".form-select-sm examp"
                  >
                    <option select>Choice your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                {/* Rol */}
                <div class="input-group col-lg-6 mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-white  border-md ">
                      <FontAwesomeIcon icon={faUserTie} />
                    </span>
                  </div>
                  <select
                    class="form-select form-select-sm"
                    onChange={(e) =>
                      setPerson({ ...person, rol: e.target.value })
                    }
                    aria-label=".form-select-sm examp"
                  >
                    <option select>Choice a rol</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
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
                  <a href="/admin" class="btn btn-danger btn-block py-2">
                    <span class="font-weight-bold">Cancel</span>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
