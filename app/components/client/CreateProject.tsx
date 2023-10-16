"use client";
import { useState } from "react";

export default function (){
    const [showcreateForm, setShowCreateForm] = useState(false);
    return (<>
            <button 
            className="bg-slate-300  h-[32px] w-[32px]"  
            onClick={()=> setShowCreateForm(true)}>
                +</button>

        {showcreateForm && (
            <form> 
                <input placeholder="Title" className="w-full p-[0.5rem]" type="text" />
            </form>
        )}
        </>
    );
} 