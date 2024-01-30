import { Instagram } from "lucide-react";
import React from "react";

export function BoxWithIcons(){
    return(
        <section className="flex gap-3 items-center justify-center">
        {Array.from({ length: 5 }, (_, i) => i + 1).map((icon) => {
            return (
                <div className="bg-black w-11 h-11 rounded-md flex items-center justify-center">
                    <Instagram stroke="white"/>
                </div>
            )
         })}               
       
        </section>
    )
}