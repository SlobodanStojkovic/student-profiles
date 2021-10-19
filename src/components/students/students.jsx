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

                        let arr = student.grades;
                        const averageGrade = () => arr.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) / arr.length;

                        return (
                            <div className="singleStudent" key={student.id}>
                                <img src={student.pic} alt="Profile" className="profilePicture"/>
                                <div className="studentInfo">
                                    <h1 className="studentName">{`${student.firstName.toUpperCase()} ${student.lastName.toUpperCase()}`}</h1>
                                    <p className="studentEmail">{`Email: ${student.email}`}</p>
                                    <p className="studentCompany">{`Company: ${student.company}`}</p>
                                    <p className="studentSkill">{`Skill: ${student.skill}`}</p>
                                    <p className="studentAverage">{`Average: ${averageGrade().toFixed(2)}%`}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                )
            }
        </div>
    )
}