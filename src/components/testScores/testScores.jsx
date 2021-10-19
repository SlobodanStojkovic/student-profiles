import { useState } from "react";
import "./testScores.css";


export const TestScores = ({ student }) => {

    const [showTestScores, setShowTestScores] = useState(false);

    return (
        <>  {showTestScores ?
            <div className="testScores">
                <br />
                <p className="testScore">{`Test 1: ${student.grades[0]}%`}</p>
                <p className="testScore">{`Test 2:  ${student.grades[1]}%`}</p>
                <p className="testScore">{`Test 3:  ${student.grades[2]}%`}</p>
                <p className="testScore">{`Test 4:  ${student.grades[3]}%`}</p>
                <p className="testScore">{`Test 5:  ${student.grades[4]}%`}</p>
                <p className="testScore">{`Test 6:  ${student.grades[5]}%`}</p>
                <p className="testScore">{`Test 7:  ${student.grades[6]}%`}</p>
                <p className="testScore">{`Test 8:  ${student.grades[7]}%`}</p>
            </div>
            :
            null
        }
            <button className="showHideButton" onClick={() => setShowTestScores(!showTestScores)}>{showTestScores ? "-" : "+"}</button>
        </>
    )
}