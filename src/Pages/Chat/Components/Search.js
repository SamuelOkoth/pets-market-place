import React from 'react'

const Search = () => {
  return (
    <div className="search">
    <div className="searchForm">
      <input
        type="text"
        placeholder="Find a user"
      />
    </div>
    {/* {err && <span>User not found!</span>} */}
    {/* {user && (
      <div className="userChat" onClick={handleSelect}>
        <img src={user.photoURL} alt="" />
        <div className="userChatInfo">
          <span>{user.displayName}</span>
        </div>
      </div>
    )} */}
  </div>
  )
}

export default Search