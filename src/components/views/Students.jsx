import { useState, useEffect } from "react";
import "./Students.scss";
import { CardContainer, Card } from "../UI/Card.jsx";

function Students() {


  
  // Initialisation  | --------------------------------
  const newStudent = {
    UserFirstname: "Nathan",
    UserLastname: "Olsson",
    UserEmail: "k0999999@kingston.ac.uk",
    UserRegistered: 0,
    UserLevel: 4,
    UserYearID: 1,
    UserUsertypeID: 2,
    UserImageURL:
      "https://images.generated.photos/vnopGiDivHG6UKp3AgGkY44U3nOfR3lLsWNKdA-KEyQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjAzMjQyLmpwZw.jpg",
    UserUsertypeName: "student",
    UserYearName: "2022-23",
  };

  const loggedInUserGroup = 1;
  const apiURL = "https://softwarehub.uk/unibase/api";
  const myGroupEndpoint = `${apiURL}/users/groups/${loggedInUserGroup}`;



  // State           | --------------------------------
  const [students, setStudents] = useState(null);

  const apiGet = async (endpoint) => {
    const response = await fetch(endpoint);
    const result = await response.json();
    setStudents(result);
  };

  useEffect(() => {
    apiGet(myGroupEndpoint);
  }, [myGroupEndpoint]);



  // Handlers        | --------------------------------
  const handleAdd = (student) => {
    student.UserID = Math.floor(10000 * Math.random());
    setStudents([...students, student]);
    console.log(`Length of students: ${students.length}`);
  };



  // View            | --------------------------------
  return (
    <>
      <h1>Students</h1>
      {!students ? (
        <p>Loading Records...</p>
      ) : (
        <>
          <CardContainer>
            {students.map((student) => (
              <div className="studentCard" key={student.UserEmail}>
                <Card>
                  <p>{student.UserEmail.substring(0, 8)}</p>
                  <p>{`${student.UserFirstname} ${student.UserLastname}`}</p>
                  <img src={student.UserImageURL} />
                </Card>
              </div>
            ))}
          </CardContainer>
          <button onClick={() => handleAdd(newStudent)}>Add Student</button>
        </>
      )}
    </>
  );
}

export default Students;
