import { create } from "zustand";


export const modalStore=create((set)=>({

    isVisible:false,

    open:()=>{
        set({isVisible:true})
        localStorage.setItem('isVisible', true);
    },
    close:()=>{
        set({isVisible:false})
        localStorage.setItem('isVisible', false);
    }
}))