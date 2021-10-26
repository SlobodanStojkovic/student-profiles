import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { TestScores } from "../TestScores/TestScores";
import "./SingleStudent.css";


export const SingleStudent = ({ students, setStudents, student, filteredStudents, city, company, email, firstName, grades, id, lastName, pic, skill, tags }) => {

    const [tagArray, setTagArray] = useState([]);
    const [newTag, setNewTag] = useState("");

    let gradesArray = student.grades;
    const averageGrade = () => gradesArray.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) / gradesArray.length;


    const studentTags = () => {
        let sTags = [...tags];

        if (newTag !== "") {
            sTags = [...tags, newTag];
        }

        return students.map(person => {

            if (person.id === id) {
                return {
                    city,
                    company,
                    email,
                    firstName,
                    grades,
                    id,
                    lastName,
                    pic,
                    skill,
                    tags: sTags
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
                <h1 className="studentName">{`${student.firstName.toUpperCase()} ${student.lastName.toUpperCase()}`} </h1>
                <p className="studentEmail">{`Email: ${student.email}`}</p>
                <p className="studentCompany">{`Company: ${student.company}`}</p>
                <p className="studentSkill">{`Skill: ${student.skill}`}</p>
                <p className="studentAverage">
                    {`Average: ${averageGrade().toFixed(2)}%`}
                </p>
            </div>

            <TestScores
                student={student}
                tagArray={tagArray}
                setTagArray={setTagArray}
                filteredStudents={filteredStudents}
                newTag={newTag} setNewTag={setNewTag}
            />
        </>
    )
}