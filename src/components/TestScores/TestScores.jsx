import { useState } from "react";
import { Tags } from "../Tags/Tags";
import "./TestScores.css";

export const TestScores = ({ student, tagArray, setTagArray, filteredStudents }) => {

    const [showTestScores, setShowTestScores] = useState(false);

    let newTag = "";


    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
            addTag()
            e.target.value = "";
        }
    }


    const addTag = () => {
        if (tagArray.includes(newTag)) return
        setTagArray([...tagArray, newTag])
    }


    return (
        <>
            <Tags tagArray={tagArray} filteredStudents={filteredStudents} />
            {
                showTestScores ?
                    <div className="testScores">
                        <br />
                        <p className="testScore">Test 1:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`${student.grades[0]}%`}</p>
                        <p className="testScore">Test 2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`${student.grades[1]}%`}</p>
                        <p className="testScore">Test 3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`${student.grades[2]}%`}</p>
                        <p className="testScore">Test 4:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`${student.grades[3]}%`}</p>
                        <p className="testScore">Test 5:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`${student.grades[4]}%`}</p>
                        <p className="testScore">Test 6:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`${student.grades[5]}%`}</p>
                        <p className="testScore">Test 7:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`${student.grades[6]}%`}</p>
                        <p className="testScore">Test 8:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`${student.grades[7]}%`}</p>
                    </div>
                    :
                    null
            }

            <button className="showHideButton" onClick={() => setShowTestScores(!showTestScores)}>{showTestScores ? "-" : "+"}</button>

            <input className="tagInput" type="text" placeholder="Add a tag" onChange={(e) => newTag = e.target.value} onKeyDown={handleKeyDown} />
        </>
    )
}