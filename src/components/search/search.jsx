import { useEffect, useState } from "react";
import "./search.css";

export const Search = ({ students, filteredStudents, setFilteredStudents }) => {

    const [searchQuery, setSearchQuery] = useState("");

    console.log(students)
    console.log(searchQuery)

    useEffect(() => {
        setFilteredStudents(students)
    }, [])


    useEffect(() => {
        const filtStudents = students.filter(student => {
            return (`${student.firstName} ${student.lastName}`.toLowerCase().includes(searchQuery) || student.id === searchQuery);
        })
        setFilteredStudents(filtStudents)
        console.log("FILTERED", filteredStudents)
    }, [searchQuery])



    return (
        <div>
            <input type="text" name="" id="" placeholder="Search by name" onChange={(event) => { setSearchQuery(event.target.value.toLowerCase()) }} />
            <input type="number" name="" id="" placeholder="Search by id" onChange={(event) => { setSearchQuery(event.target.value.toLowerCase()) }} />
        </div>
    )
}