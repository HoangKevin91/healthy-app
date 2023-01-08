import { TabActived } from "../types/consts"
import { BoxItem } from "../types/records"

export default function MyRecordFilter(props: any) {

    const objRecord = {
        id: TabActived.Chart,
        title: 'BODY RECORD',
        description: '自分のカラダの記録',
        backgroundUrl: 'bg-bodyRecord-pattern'
    }
    const objLog = {
        id: TabActived.Log,
        title: 'MY EXERCISE',
        description: '自分の運動の記録',
        backgroundUrl: 'bg-exerciseRecord-pattern'
    }
    const objCalendar = {
        id: TabActived.Calendar,
        title: 'MY DIARY',
        description: '自分の日記',
        backgroundUrl: 'bg-diaryRecord-pattern'
    }

    const onClickBox = (idTab: string) => {
        props.onChangeSelectedTab(idTab)
    }

    const renderBox = (box: BoxItem) => {
        return <div className="bg-yellow-400 p-6 cursor-pointer" onClick={() => onClickBox(box.id)}>
            <div className={`flex flex-col items-center justify-center box-item relative h-[240px] bg-black bg-cover ${box.backgroundUrl}`}>
                <div className="relative z-10 flex flex-col items-center">
                    <h1 className="text-[25px] text-yellow-400">{box.title}</h1>
                    <p className="flex items-center justify-center bg-orange-300 mt-[10px] h-[20px] w-[160px]">{box.description}</p>
                </div>
            </div>
        </div>
    }

    return (
        <div className="grid grid-cols-3 space-x-6 justify-between my-[56px]">
            {renderBox(objRecord)}
            {renderBox(objLog)}
            {renderBox(objCalendar)}
        </div>
    )
}