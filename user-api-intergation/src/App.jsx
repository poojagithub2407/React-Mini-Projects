import { useEffect, useState } from "react";
import UserList from "./components/UserList";

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchParams, setSearchParams] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' or 'desc'

  // Fetch users on mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://dummyjson.com/users");
        const data = await res.json();
        setUsers(data.users);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchUsers();
  }, []);

  // Filter + Sort logic
  useEffect(() => {
    let filtered = users.filter((user) =>
      user.firstName.toLowerCase().includes(searchParams.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchParams.toLowerCase()) ||
      user.email.toLowerCase().includes(searchParams.toLowerCase())
    );


    if (sortBy) {
      filtered.sort((a, b) => {
        const valA = a[sortBy];
        const valB = b[sortBy];
        if (typeof valA === 'string' && typeof valB === 'string') {
          return sortOrder === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA)
        } else {
          return sortOrder === 'asc' ? valA - valB : valB - valA
        }
      })
    }

    // if (sortBy) {
    //   filtered.sort((a, b) => {
    //     if (sortBy === 'age') {
    //       return a.age - b.age
    //     } else {
    //       return a[sortBy].toLowerCase().localeCompare(b[sortBy].toLowerCase())
    //     }
    //   })
    // }


    setFilteredUsers(filtered);
  }, [users, searchParams, sortBy, sortOrder]);

  // Handle sort icon clicks
  const handleSort = (field, order) => {
    setSortBy(field);
    setSortOrder(order);
  };

  return (
    <div>
      <UserList
        users={filteredUsers}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        sortBy={sortBy}
        sortOrder={sortOrder}
        setSortBy={setSortBy}
        setSortOrder={setSortOrder}
        handleSort={handleSort}
      />
    </div>
  );
};

export default App;
