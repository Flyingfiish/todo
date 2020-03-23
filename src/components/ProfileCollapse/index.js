import React, { Component } from "react";
import { Modal, Button } from "bootstrap-4-react";
import GoogleLogin from "react-google-login";
import {name, email, url, googleId} from "../accountData";

/*const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [url, setUrl] = useState("");
const [googleId, setGoogleId] = useState("");*/

const responseGoogle = response => {
  console.log(response);
  name = response.profileObj.name;
  
  /*setName(response.profileObj.name);
  setEmail(response.profileObj.email);
  setUrl(response.profileObj.imageUrl);
  setGoogleId(response.profileObj.googleId);*/
};

export default class ProfileCollapse extends Component {
  render() {
    return (
      <div>
        {/* Modal */}
        <Modal id="profileModal" fade>
          <Modal.Dialog>
            <Modal.Content>
              <Modal.Header>
                <Modal.Title>Профиль</Modal.Title>
                <Modal.Close>
                  <span aria-hidden="true">&times;</span>
                </Modal.Close>
              </Modal.Header>
              <Modal.Body>
                <GoogleLogin
                  clientId="540732885391-d9fah5jpk41a6io5l4shsmrbhblcrqk3.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              </Modal.Body>
              <Modal.Footer>
                <Button secondary data-dismiss="modal">
                  Close
                </Button>
                <Button primary>Save changes</Button>
              </Modal.Footer>
            </Modal.Content>
          </Modal.Dialog>
        </Modal>
      </div>
    );
  }
}
