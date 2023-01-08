import React from "react"

import leftImage from '../../assets/d01.jpg';

export default function LeftContent () {
    return (
        <div className="w-1/3 relative h-[407px] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center" 
                style={{
                    background: "linear-gradient(225deg, #FFCC21 0%, #FF963C 100%)",
                    mixBlendMode: "soft-light",
                    opacity: 1
                }}>
            </div>
            <div className="absolute inset-0 flex items-center justify-center" >
                <div className="flex items-center justify-center w-[181px] h-[182px] border-2 border-left-0 border-white rounded-full" style={{
                    boxShadow: "0px 0px 6px #FC7400"
                }}>
                    <span className="text-lg text-white text-shadow">5/21</span>
                    <span className="text-2xl text-white ml-1 text-shadow">75%</span>
                </div>
            </div>
            <img className="object-none object-center" src={leftImage} />
        </div>
    )
}