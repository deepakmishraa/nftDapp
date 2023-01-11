import create from "zustand";
import {devtools, persist} from 'zustand/middleware'

const loginStore=(set)=>({
    loginDetails:{},
    loginHandler:(email,passoword)=>{
        console.log("email",":-",email)
        console.log("passoword",":-",passoword)

    }
})

const useLoginStore=create(
    devtools(
        persist(loginStore,{
            name:"loginDetails",
        })
    )
)
export default useLoginStore;