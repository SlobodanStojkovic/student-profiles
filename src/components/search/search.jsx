import { useEffect, useState } from "react";
import "./search.css";

export const Search = ({ searchQuery, setSearchQuery, students, filteredStudents, setFilteredStudents }) => {

    const [tagSearchQuery, setTagSearchQuery] = useState("");

    useEffect(() => {
        const filtStudents = students.filter(student => {
            return (`${student.firstName} ${student.lastName}`.toLowerCase().includes(searchQuery));
        })
        setFilteredStudents(filtStudents)
    }, [searchQuery])


    useEffect(() => {
        const filtByTags = students.filter(student => {
            return student.tags.some(tag => tag.toLowerCase().includes(tagSearchQuery));
        })
        setFilteredStudents(filtByTags)
    }, [tagSearchQuery])


    return (
        <div>
            <input type="text" placeholder="Search by name" onChange={(event) => setSearchQuery(event.target.value.toLowerCase())} />
            <input type="text" placeholder="Search by tag" onChange={(event) => setTagSearchQuery(event.target.value.toLowerCase())} />
        </div>
    )
}