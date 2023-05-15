import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHashtag,
  faBed,
  faPenNib,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function CreateRoom() {
  const [room, setRoom] = useState({
    roomNumber: "",
    roomType: "",
    description: "",
    infoAd: "",
  });
  return (
    <div>
      <div>
        <div class="container-fluid  admin-box">
          <div class="col-md-7 col-lg-6 ml-auto">
            <form>
              <h2 class="text-center mb-4 fw-bold"> Create New Room</h2>
              <div class="row">
                <div class="input-group col-lg-6 mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-white  border-md  ">
                      <FontAwesomeIcon icon={faHashtag} />
                    </span>
                  </div>
                  <input
                    id="roomNumber"
                    type="text"
                    value={room.roomNumber}
                    onChange={(e) =>
                      setRoom({ ...room, roomNumber: e.target.value })
                    }
                    name="roomNumber"
                    placeholder="Room Number"
                    class="form-control bg-white border-left-0 border-md"
                    required
                  />
                </div>

                {/* Room type */}
                <div class="input-group col-lg-6 mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-white  border-md ">
                      <FontAwesomeIcon icon={faBed} />
                    </span>
                  </div>

                  <select
                    class="form-select form-select-sm"
                    value={room.roomType}
                    onChange={(e) =>
                      setRoom({ ...room, roomType: e.target.value })
                    }
                    aria-label=".form-select-sm examp"
                  >
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
                  <textarea
                    id="description"
                    value={room.description}
                    onChange={(e) =>
                      setRoom({ ...room, description: e.target.value })
                    }
                    name="description"
                    placeholder="Description"
                    class="form-control bg-white border-left-0 border-md "
                    style={{ height: 233 + "px", resize: "none" }}
                  />
                </div>

                {/* More info */}
                <div class="input-group col-lg-12 mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-white  border-md ">
                      <FontAwesomeIcon icon={faInfoCircle} />
                    </span>
                  </div>
                  <input
                    id="ifno"
                    type="text"
                    value={room.infoAd}
                    onChange={(e) =>
                      setRoom({ ...room, infoAd: e.target.value })
                    }
                    name="info"
                    placeholder="Info"
                    class="form-control bg-white border-left-0 border-md"
                  />
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
    </div>
  );
}
