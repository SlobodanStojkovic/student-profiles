import { useEffect } from "react";
import "./Search.css";

export const Search = ({
  students,
  searchQuery,
  setSearchQuery,
  searchTag,
  setSearchTag,
  setFilteredStudents,
}) => {
  const searchFunction = () =>
    students.filter((student) => {
      const filterByName = () => {
        if (searchQuery.length > 0) {
          return `${student.firstName} ${student.lastName}`
            .toLowerCase()
            .includes(searchQuery);
        } else return true;
      };

      const filterByTags = () => {
        if (searchTag.length > 0) {
          return student.tags.some((tag) =>
            tag.toLowerCase().includes(searchTag)
          );
        } else return true;
      };
      return filterByName() && filterByTags();
    });

  useEffect(() => {
    setFilteredStudents(searchFunction());
  }, [students, searchQuery, searchTag]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        onChange={(event) => setSearchQuery(event.target.value.toLowerCase())}
      />
      <input
        type="text"
        placeholder="Search by tag"
        onChange={(event) => setSearchTag(event.target.value.toLowerCase())}
      />
    </div>
  );
};
