import { createSlice, createSelector } from "@reduxjs/toolkit"; 
import { fetchContacts, addContact, deleteContact } from "./contactsOps"
import { selectNameFilter } from "./filtersSlice";

const handlePending = (state) => {
    state.isLoading = true;    
}

const handleRejected = (state, action) => {
    state.isLoading = false;    
    state.error = action.payload;    
}         

const contactsSlice = createSlice({ 
    name: "contacts",
    initialState: {    
        items: [],
        isLoading: false,
        error: null
    }, 
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                // console.log("action.payload", action.payload);
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, handleRejected)
        
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(action.payload);
            })
            .addCase(addContact.rejected, handleRejected)
        
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = state.items.filter(contact => contact.id !== action.payload.id);
            })
            .addCase(deleteContact.rejected, handleRejected)        
    }
});

export const contactsReducer = contactsSlice.reducer; // Reducer export

export const selectContacts = state => state.contacts.items; // Contacts selector

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const filteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, filter) => {
        const selector = contacts.filter(contact => 
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
        console.log("selector", selector);
    return selector;
})

    

