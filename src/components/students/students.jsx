import { TestScores } from "../testScores/testScores";
import "./students.css";

export const Students = ({ students, setStudents, searchQuery, filteredStudents, setFilteredStudents, searchTag, setSearchTag }) => {



    return (
        <div className="students">
            {
                filteredStudents.map((student) => {

                    let gradesArray = student.grades;
                    const averageGrade = () => gradesArray.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) / gradesArray.length;

                    return (
                        <>
                            <div className="singleStudent" key={student.id}>
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
                                    key={student.id}
                                    searchQuery={searchQuery}
                                    students={students} setStudents={setStudents}
                                    filteredStudents={filteredStudents} setFilteredStudents={setFilteredStudents}
                                    student={student} {...student}
                                    searchTag={searchTag} setSearchTag={setSearchTag}
                                />

                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}