
export default function LogTimeList(props: any) {
    const nowDate = new Date().toISOString().slice(0, 10).replaceAll("-", ".");
    const dummyData = Array.from({length: 20}, (_, i) => pdata);
    return (
        <div className='bg-black-500 py-[16px] px-[24px]'>
            <h1 className='flex text-white text-[15px] leading-[18px]'>
                <span className="">MY<br/> EXERCISE</span>
                <span className='ml-4 text-[22px]'>{nowDate}</span>
            </h1>
            <div id={'style-scrollbar'} className="grid grid-cols-2 gap-x-10 max-h-48 overflow-y-scroll scroll-smooth mt-1 pr-10">
                {dummyData.map(x => {
                    return <div className="flex flex-row justify-between pt-2 border-b-[1px]">
                        <div className="flex flex-col">
                            <span className="text-white text-[15px]">{x.name}</span>
                            <span className="text-lg text-yellow-400">{x.calo}</span>
                        </div>
                        <span className="text-lg text-yellow-400">{x.time}</span>
                    </div>
                })}
            </div>
        </div>
    )
}


const pdata =
    {
        name: '家事全般（立位・軽い',
        calo: '11kcal',
        time: 80
    }
;