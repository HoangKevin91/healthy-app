import React, { useState } from "react"
import CalendarDiary from "../../components/CalendarDiary"
import LineChartHealthy from "../../components/LineChartHealthy"
import LogTimeList from "../../components/LogTimeList"
import MyRecordFilter from "../../components/MyRecordFilter"
import { TabActived } from "../../types/consts"

export default function MyRecord () {
    const [itemSelected, setItemSelected] = useState(TabActived.Chart)

    const onChangeSelectedTab = (boxTitle: TabActived) => {
        setItemSelected(boxTitle)
    }

    const renderTabs = () => {
        switch (itemSelected) {
            case TabActived.Chart:
                return <LineChartHealthy showFilterDateRage={true} titleOfChart={itemSelected} />
            case TabActived.Log:
                return <LogTimeList titleOfChart={itemSelected} />
            case TabActived.Calendar:
                return <CalendarDiary titleOfChart={itemSelected} />
            default:
                return <LineChartHealthy titleOfChart={itemSelected} />
        }
    }

    return (
        <div className="container mx-auto">
            <MyRecordFilter onChangeSelectedTab={onChangeSelectedTab} />
            {renderTabs()}
            <div className="h-[53px]"></div>
        </div>
    )
}