const UserList = ({ users, searchParams, setSearchParams,  setSortBy,setSortOrder }) => {

  // Accept field and order explicitly
  const handleSort = (field, order) => {
    setSortBy(field);
    setSortOrder(order);
  };

  return (
    <div className="mx-24 my-12">
      {/* Search Input */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Search here..."
          value={searchParams}
          onChange={(e) => setSearchParams(e.target.value)}
          className="border py-2 px-4 w-64"
        />
      </div>

      {/* User Table */}
      <table className="table-auto border w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 border text-left cursor-pointer">
              First Name{" "}
              <span onClick={() => handleSort('firstName', 'asc')} className="px-1 hover:text-blue-600">↾</span>
              <span onClick={() => handleSort('firstName', 'desc')} className="px-1 hover:text-blue-600">⇃</span>
            </th>
            <th className="py-2 border text-left cursor-pointer">
              Last Name{" "}
              <span onClick={() => handleSort('lastName', 'asc')} className="px-1 hover:text-blue-600">↾</span>
              <span onClick={() => handleSort('lastName', 'desc')} className="px-1 hover:text-blue-600">⇃</span>
            </th>
            <th className="py-2 border text-left cursor-pointer">
              Email{" "}
              <span onClick={() => handleSort('email', 'asc')} className="px-1 hover:text-blue-600">↾</span>
              <span onClick={() => handleSort('email', 'desc')} className="px-1 hover:text-blue-600">⇃</span>
            </th>
            <th className="py-2 border text-left cursor-pointer">
              Age{" "}
              <span onClick={() => handleSort('age', 'asc')} className="px-1 hover:text-blue-600">↾</span>
              <span onClick={() => handleSort('age', 'desc')} className="px-1 hover:text-blue-600">⇃</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, firstName, lastName, email, age }) => (
            <tr key={id} className="text-center odd:bg-slate-100">
              <td className="py-2 border">{firstName}</td>
              <td className="py-2 border">{lastName}</td>
              <td className="py-2 border">{email}</td>
              <td className="py-2 border">{age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
