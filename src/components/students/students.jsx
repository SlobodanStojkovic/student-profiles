import { SingleStudent } from "../SingleStudent/SingleStudent";
import "./Students.css";

export const Students = ({ students, setStudents, filteredStudents }) => {

    return (
        <div className="students">
            {
                filteredStudents.map((student) => {
                    return (
                        <div className="singleStudent" key={student.city}>
                            <SingleStudent key={student.id} student={student} students={students} setStudents={setStudents} {...student} />
                        </div>
                    )
                })
            }
        </div>
    )
}