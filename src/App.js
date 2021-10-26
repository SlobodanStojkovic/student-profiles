import { useEffect, useState } from 'react';
import { Search } from './components/Search/Search';
import { Students } from './components/Students/Students';
import { fetchStudents } from './services/fetchStudents';
import { Loading } from './components/Loading/Loading';
import './App.css';


function App() {

  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTag, setSearchTag] = useState("");


  const averageGrade = (gradesArray) =>
    gradesArray.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) /
    gradesArray.length;

  useEffect(() => {
    fetchStudents()
      .then(data => {
        setStudents(data.map((student) => {
          return {
            ...student,
            average: averageGrade(student.grades).toFixed(2),
            tags: []
          }
        }))
      })
    setFilteredStudents(students)
  }, [])


  return (

    <div className="App">

      {students.length !== 25 ?
        < Loading />
        :
        <>
          <Search students={students} setStudents={setStudents}
            searchQuery={searchQuery} setSearchQuery={setSearchQuery}
            filteredStudents={filteredStudents} setFilteredStudents={setFilteredStudents}
            searchTag={searchTag} setSearchTag={setSearchTag}
          />

          <Students
            students={students} setStudents={setStudents}
            filteredStudents={filteredStudents} setFilteredStudents={setFilteredStudents}
            searchTag={searchTag} setSearchTag={setSearchTag}
          />
        </>
      }
    </div>
  );
}

export default App;
