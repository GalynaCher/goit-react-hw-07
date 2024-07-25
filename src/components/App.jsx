// import React from 'react'; 
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectIsLoading, selectError } from "../redux/contactsSlice.js";
import { fetchContacts } from "../redux/contactsOps.js";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox.jsx";
import ContactForm from "./ContactForm/ContactForm.jsx";

function App() {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

//   useEffect(() => {
//   console.log("from useEffect");
//   dispatch(fetchContacts())
//     .unwrap()
//     .then((data) => {
//       console.log("Data fetched successfully:", data);
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//     });
// }, [dispatch]);

  return (
    <div style={{ padding: 20 }}>
      <h1>Phonebook</h1>
      <ContactForm /> 
      <SearchBox />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
}

export default App;
