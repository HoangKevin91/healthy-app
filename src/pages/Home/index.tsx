import React from "react"
import ListCategory from "../../components/ListCategory";

import LeftContent from "./LeftContent";

export default function Home () {
    const listCategory = [
        {
            title: "Food"
        }
    ]
    return (
        <>
            <div>
                <LeftContent />
                <div className="w-2/3"></div>
            </div>
            <div>
                <ListCategory listCategory={listCategory} />
            </div>
        </>
    )
}