import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

function MessageForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
     await axios
        .post(
          "http://localhost:4000/api/v1/message/send",
          {
            firstName,
            lastName,
            phone,
            email,
            message,
          },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
        });
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="container form-component message-form">
      <h2>Send Us Message</h2>
      <form action="" onSubmit={handleMessage}>
        <div>
          <input
            type="text"
            placeholder="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="lasttName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <textarea
          placeholder="Message"
          value={message}
          rows="7"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <div style={{ justifyContent: "center", alignItems: "center" }}>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}

export default MessageForm;
