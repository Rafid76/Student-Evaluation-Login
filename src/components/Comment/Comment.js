import React, { useState, useEffect } from "react";
import auth from "../../auth/auth";
import { useNavigate } from "react-router-dom";
import "./Comment.css";

export default function Comment(props) {
  let navigate = useNavigate();

  const [comment, setComment] = useState("");
  const [email, setEmail] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [courseName, setCourseName] = useState("");
  const [favoriteTopic, setFavoriteTopic] = useState("");
  const [strongestSkill, setStrongestSkill] = useState("");

  useEffect(() => {
    const loggedInUser = auth.getToken();
    if (auth.isLoggedIn) setEmail(loggedInUser);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/thank", {
      state: {
        email: email,
        comment: comment,
        courseCode: courseCode,
        courseName: courseName,
        favoriteTopic: favoriteTopic,
        strongestSkill: strongestSkill,
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
                <input
                  type="text"
                  value={courseCode}
                  onChange={(e) => setCourseCode(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Course Name:</td>
              <td>
                <input
                  type="text"
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Student Email:</td>
              <td>
                <input type="text" value={email} disabled={true} />
              </td>
            </tr>
            <tr>
              <td>Favorite Topic:</td>
              <td>
                <input
                  type="text"
                  onChange={(e) => setFavoriteTopic(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Strongest Technical Skill:</td>
              <td>
                <input
                  type="text"
                  onChange={(e) => setStrongestSkill(e.target.value)}
                />
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
