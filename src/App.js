import { useEffect, useState } from 'react';
import './App.css';
import { Search } from './components/search/search';
import { Students } from './components/students/students';
import { fetchStudents } from './services/fetchStudents';
import { Loading } from './components/loading/loading';


function App() {

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTag, setSearchTag] = useState("");


  useEffect(() => {
    fetchStudents()
      .then(data => {
        setStudents(data.map((student) => {
          return {
            ...student,
            tags: []
          }
        }))
      })
  }, [])


  useEffect(() => {
    if (students.length > 0) {
      setLoading(false)
    }
  }, [students])


  useEffect(() => {
    setFilteredStudents(students)
  }, [loading])


  return (

    <div className="App">

      {loading ?
        < Loading />
        :
        <>
          <Search students={students} setStudents={setStudents}
            searchQuery={searchQuery} setSearchQuery={setSearchQuery}
            filteredStudents={filteredStudents} setFilteredStudents={setFilteredStudents}
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
