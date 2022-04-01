import './App.css';
import React, { useState, useEffect } from "react";
import UserDisplay from './component/UserDisplay';
import SearchBar from 'material-ui-search-bar';
import axios from 'axios';
import { Box, Grid, NativeSelect } from '@material-ui/core';

function App() {

  const [searchVal, setSearchValue] = useState(''); // holds current input in the search bar
  const [filteredData, setFilteredData] = useState([]); //holds the list of users that hold the substring in the search value
  const [userList, setUserList] = useState([]); //holds all the users
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState('id');

  async function getUsers() {
    return axios.get("https://jsonplaceholder.typicode.com/users").then(json => (json.data));
  }
//deletes user based on id
function deleteUser(id) {
    const newUserList= [...userList];
    // Find and delete specified task
    for (let i = 0; i < newUserList.length; i++) {
        if (newUserList[i].id === id) {
            newUserList.splice(i, 1);
        }
    }
    setUserList(newUserList);
  }

  //this useEffect only runs once when rendered since the array does not include any variables
  useEffect(() => {
    setLoading(true);
    getUsers()
      .then(result => {
        setUserList(result); 
        setLoading(false);})
      .catch(() => []);
    }, []);


    //this useEffect runs any time searchVal or userList is updated
    useEffect(() => {
      setFilteredData(
        userList.filter(
          (user) =>
          user.name.toLowerCase().includes(searchVal.toLowerCase()) ||
          user.address.city.toLowerCase().includes(searchVal.toLowerCase())
        )
      );
     }, [searchVal, userList]);

  /*
    Filters according to the the search value. 
    Display all users with the name and/or city that possess the substring in the search bar

    runs ONCE after initial rendering
    and after every rendering ONLY IF 'prop' or 'state' changes
  */

 function clearSearch() {
   setSearchValue('');
 }
 function handleChange(event) {
  setSortBy(event.target.value);
 }

 if (sortBy !== "city") filteredData.sort((a,b) => a[sortBy] > b[sortBy] ? 1 : -1)
 else filteredData.sort((a,b) => a["address"][sortBy] > b["address"][sortBy] ? 1 : -1)

 if (loading) {
   return <p> Loading Users...</p>;
 }
// if you set state in the body of the component (or in render) you’ll have an infinite loop.
  return (
    <Box width = {4/5} m="auto" mt = {5}>
    <Grid className="App" width = {4/5}>
      <Grid container direction="row" alignItems="center">
      <Grid item xs={9}>
      <SearchBar border={1} justify="left" width = {3/5}
          variant="filled"
          placeholder="Search by Name or City"
          onChange={(newValue) => setSearchValue(newValue)}
          onCancelSearch={clearSearch}
        />
        </Grid>
        <Grid item xs={3}>
        <Box>
          <label className="sortText">Sort By: </label>
          <NativeSelect justify="right"  value={sortBy} onChange={handleChange}> 
            <option value="id">Default</option>
            <option value="name">Name</option>
            <option value="city">City</option>
          </NativeSelect>
          </Box>
          </Grid>
          </Grid>
      <UserDisplay filteredData = {filteredData} deleteUser = {deleteUser}/> 
    </Grid>
    </Box>
  );
}
export default App;