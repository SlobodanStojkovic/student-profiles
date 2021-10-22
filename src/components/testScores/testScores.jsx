import { useEffect, useState } from "react";
import "./testScores.css";
import { Tags } from "../tags/tags";

export const TestScores = ({ students, searchQuery, setStudents, student, filteredStudents, setFilteredStudents, searchTag, setSearchTag, city, company, email, firstName, grades, id, lastName, pic, skill }) => {

    const [showTestScores, setShowTestScores] = useState(false);
    const [tagArray, setTagArray] = useState([]);

    let newTag = "";

    const addTag = () => {
        if (tagArray.includes(newTag)) return
        setTagArray([...tagArray, newTag])
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            addTag()
            e.target.value = "";
        }
    }

    const studentTags = () => {
        const sTags = [...tagArray]

        return filteredStudents.map(student => (
            student.id !== id ?
                student
                :
                {
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
                }
        ))
    }

    useEffect(() => {
        setFilteredStudents(studentTags)
    }, [searchQuery, searchTag, tagArray])



    return (
        <>
            <Tags tagArray={tagArray} />
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