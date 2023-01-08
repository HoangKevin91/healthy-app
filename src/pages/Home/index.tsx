import React from "react"
import LineChartHealthy from "../../components/LineChartHealthy";
import ListCategory from "../../components/ListCategory";
import MealHistory, { HistoryItem } from "../../components/MealHistory";

import LeftContent from "./LeftContent";

export default function Home () {
    const listCategory = [
        {
            title: "Morning"
        },
        {
            title: "Lunch"
        },
        {
            title: "Dinner",
        },
        {
            title: "Snack"
        }
    ]
    const PropsItem = {
        imgSrc: './assets/m01.jpg',
        date: '05.21',
        foodMenu: {
            title: "Morning"
        }
    }
    const listOfMealHistory: HistoryItem[] = new Array(8)
    for (var i = 0; i < listOfMealHistory.length; i++) {
        listOfMealHistory[i] = {
            ...PropsItem
        };
    }
    return (
        <>
            <div className="flex">
                <LeftContent />
                <div className="w-2/3">
                    <LineChartHealthy />
                </div>
            </div>
            <ListCategory listCategory={listCategory} />
            <MealHistory listOfMealHistory={listOfMealHistory} />
        </>
    )
}