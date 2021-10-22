import { useEffect, useState } from "react";
import "./search.css";

export const Search = ({ searchQuery, setSearchQuery, students, filteredStudents, setFilteredStudents }) => {



    useEffect(() => {
        console.log("FILTER START JUST STUDENTS", students)
        const filtStudents = students.filter(student => {
            const nameSearch = (`${student.firstName} ${student.lastName}`.toLowerCase().includes(searchQuery));
            const tagSearch = (student.tags.filter(tag => {
                console.log("student.tags", student.tags.filter(tag => { tag.includes(searchQuery) }))

                tag.includes(searchQuery)
            }));
            return nameSearch && tagSearch;
        })
        setFilteredStudents(filtStudents)

    }, [searchQuery])



    return (
        <div>
            <input type="text" placeholder="Search by name" onChange={(event) => setSearchQuery(event.target.value.toLowerCase())} />
            <input type="text" placeholder="Search by tag" onChange={(event) => setSearchQuery(event.target.value.toLowerCase())} />
        </div>
    )
}