import { create } from "zustand";
const userStore = create((set, get) => ({
    users: [],
    isLoading: false,
    error: null,
    getUsers : async() =>{
        try {
            set({isLoading : true})
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            if(!res.ok)throw new Error("Failed to fetch");
            const data = await res.json();
            set({users : data});
        } catch (error) {
            set({isLoading : true,error : error.message})
        }finally{
            set({isLoading : false})
        }
    },
    getUser : (id) => get().users.find(el => el.id === id),
}))

export default userStore