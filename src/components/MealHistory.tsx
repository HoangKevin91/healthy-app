import {useNavigate} from "react-router-dom";
import mockImage from '../assets/m01.jpg';

type FoodMenu = {
    title: string
}

type Props = {
    listOfMealHistory: HistoryItem[]
}

export type HistoryItem = {
    imgSrc: string,
    date: string,
    foodMenu : FoodMenu
}

type MealHistoryItems = {
    item: HistoryItem
}

export default function MealHistory(props: Props) {
    const nav = useNavigate();
    const goToMyRecord = () => {
        nav("/my-record", {})
    }

    return (
        <>
            <div className="grid grid-cols-4 gap-2 mx-auto my-[25px] container">
                {props.listOfMealHistory.map((x, y) => {
                    return <div key={y}>
                        <MealHistoryItem item={x} />
                    </div>
                })}
            </div>
            <div className="text-center mx-auto container mb-[64px]">
                <button 
                    onClick={goToMyRecord}
                    className="h-[56px] w-[296px] rounded"
                    style={{background: "linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)"}}>
                    <span className="text-lg text-white">記録をもっと見る</span>
                </button>
            </div>
        </>
    )
}

function MealHistoryItem(props: MealHistoryItems) {
    const {item} = props; 
    return (
        <div className="flex mx-auto relative">
            {/* <img 
                className="object-cover"
                src={item.imgSrc ? require(item.imgSrc) : mockImage} /> */}
            <img 
                className="object-cover" 
                src={mockImage} />
            <div className="absolute bg-[#FFCC21] p-2 bottom-0 left-0">
                <span className="text-white text-[15px] tracking-wide">
                {item.date}
                {item.foodMenu.title}
                </span>
            </div>
        </div>
    )
}