'use client'

import { useState } from "react"

export default function DefaultInput() {
    const [value, setValue] = useState('')

    return (
        <div className="">
            <input 
                type="text" 
                name="TEST" 
                onChange={e => setValue(e.target.value)}
                placeholder="TEST" 
                className="bg-black text-white border-[#ffffffff] pl-[15px]" 
            />
        </div>
    )
} 