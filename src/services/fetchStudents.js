export const fetchStudents = () => {
    return fetch("https://api.hatchways.io/assessment/students/", {
        method: "GET"
    })
        .then((data) => data.json())
        .then((studentsInfo) => studentsInfo.students)
        .catch(err => console.error("There was an error: ", err))
}