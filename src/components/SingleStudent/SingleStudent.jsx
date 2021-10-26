import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { TestScores } from "../TestScores/TestScores";
import "./SingleStudent.css";

export const SingleStudent = ({
  students,
  setStudents,
  student,
  filteredStudents,
}) => {
  const [tagArray, setTagArray] = useState([]);
  const [newTag, setNewTag] = useState("");

  const studentTags = () => {
    let sTags = [...student.tags];

    if (newTag !== "") {
      sTags = [...student.tags, newTag];
    }

    return students.map((person) => {
      if (person.id === student.id) {
        return {
          ...person,
          tags: sTags,
        };
      } else return person;
    });
  };

  useEffect(() => {
    setStudents(studentTags());
  }, [tagArray]);

  return (
    <>
      <img src={student.pic} alt="Profile" className="profilePicture" />
      <div className="studentInfo">
        <h1 className="studentName">
          {`${student.firstName.toUpperCase()} ${student.lastName.toUpperCase()}`}{" "}
        </h1>
        <p className="studentEmail">{`Email: ${student.email}`}</p>
        <p className="studentCompany">{`Company: ${student.company}`}</p>
        <p className="studentSkill">{`Skill: ${student.skill}`}</p>
        <p className="studentAverage">
          {`Average: ${student.average}%`}
        </p>
      </div>

      <TestScores
        student={student}
        tagArray={tagArray}
        setTagArray={setTagArray}
        filteredStudents={filteredStudents}
        newTag={newTag}
        setNewTag={setNewTag}
      />
    </>
  );
};
