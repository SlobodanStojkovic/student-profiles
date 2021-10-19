import "./students.css";

export const Students = ({ students }) => {

    console.log("students COMP", students)

    return (
        <div className="students">
            {(students.length === undefined)
                ? (
                    <div>Loading</div>
                )
                :
                (
                    students.map((student) => {
                        return (
                            <div className="singleStudent">
                                <h1>{`${student.firstName} ${student.lastName}`}</h1>
                                <p>{`Email: ${student.email}`}</p>
                                <p>{`Company: ${student.company}`}</p>
                                <p>{`Skill: ${student.skill}`}</p>
                                <p>{`Average: ${student.grades.map((grade) => {
                                    let sum = 0; sum += parseInt(grade); console.log(sum)
                                    return (sum / student.grades.length)
                                })}`}</p>
                            </div>
                        )
                    })
                )
            }
        </div>
    )
}