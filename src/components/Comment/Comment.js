import React, { useState, useEffect } from "react";
import auth from "../../auth/auth";
import { useNavigate } from "react-router-dom";
import "./Comment.css";

export default function Comment(props) {
  let navigate = useNavigate();

  const [comment, setComment] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    const loggedInUser = auth.getToken();
    if (auth.isLoggedIn) setEmail(loggedInUser);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/thank", {
      state: {
        email: email,
        comment: comment
      },
    });
  };

  return (
    <div className="comment-wrapper">
      <h1>Enter Your Comments</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Course Code:</td>
              <td>
                <input type="text" defaultValue={"COMP308"} disabled={true} />
              </td>
            </tr>
            <tr>
              <td>Course Name:</td>
              <td>
                <input
                  type="text"
                  defaultValue={"Emerging Technologies"}
                  disabled={true}
                />
              </td>
            </tr>
            <tr>
              <td>Student Email:</td>
              <td>
                <input type="text" defaultValue={email} disabled={true} />
              </td>
            </tr>
            <tr>
              <td>Comment:</td>
              <td>
                <textarea
                  onChange={(e) => setComment(e.target.value)}
                  rows={5}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
