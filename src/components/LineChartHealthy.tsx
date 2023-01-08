import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';

type Props = {
    titleOfChart?: string,
    showFilterDateRage?: boolean
}

export default function LineChartHealthy(props: Props) {
    const nowDate = new Date().toISOString().slice(0, 10).replaceAll("-", ".");
    const {showFilterDateRage} = props;
    return (
        <>
            {!!props.titleOfChart && 
            <div className='bg-black-500 pt-[16px] px-[24px]'>
                <h1 className='flex text-white text-[15px] leading-[18px]'>
                    <span className="">BODY<br/> RECORD</span>
                    <span className='ml-4 text-[22px]'>{nowDate}</span>
                </h1>
            </div>}
            <ResponsiveContainer className={"bg-black-500"} width="100%" aspect={3}>
                <LineChart data={pdata} margin={{ right: 110, left: 61, top: 12, bottom: 10 }}>
                    <CartesianGrid  horizontal={false} />
                    <XAxis dataKey="name" 
                        interval={'preserveStartEnd'} />
                    <Tooltip />
                    <Line dataKey="weight" strokeWidth={4}
                        stroke="#FFCC21" activeDot={{ r: 8 }} />
                    <Line dataKey="fat" strokeWidth={4}
                        stroke="#8FE9D0" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
            {showFilterDateRage && <div className='flex space-x-4 bg-black-500 p-4 px-8 pt-2'>
                <div className='h-[22px] bg-white text-yellow-400 px-[20px] rounded-xl'>日</div>
                <div className='h-[22px] bg-white text-yellow-400 px-[20px] rounded-xl'>週</div>
                <div className='h-[22px] bg-white text-yellow-400 px-[20px] rounded-xl'>月</div>
                <div className='h-[22px] bg-yellow-400 text-white px-[20px] rounded-xl'>年</div>
            </div>}
        </>
    )
}

const pdata = [
    {
        name: '6 月',
        weight: 11,
        fat: 80
    },
    {
        name: '7 月',
        weight: 15,
        fat: 70
    },
    {
        name: '8 月',
        weight: 20,
        fat: 60
    },
    {
        name: '9 月',
        weight: 21,
        fat: 50
    },
    {
        name: '10 月',
        weight: 22,
        fat: 30
    },
    {
        name: '11 月',
        weight: 26,
        fat: 18
    },
    {
        name: '12 月',
        weight: 30,
        fat: 12
    },
    {
        name: '1 月',
        weight: 40,
        fat: 10
    },
    {
        name: '2 月',
        weight: 44,
        fat: 5
    },
    {
        name: '3 月',
        weight: 45,
        fat: 4
    },
    {
        name: '4 月',
        weight: 50,
        fat: 8
    },
    {
        name: '5 月',
        weight: 51,
        fat: 8
    },
];