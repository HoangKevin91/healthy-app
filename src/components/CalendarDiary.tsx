
export default function CalendarDiary(props: any) {
    const nowDate = new Date().toISOString().slice(0, 16).replaceAll("-", ".").replace("T", " ");
    const dummyData = Array.from({length: 8}, (_, i) => pdata);
    return (
        <div className=''>
            <h1 className='flex text-black-200 text-[22px]'>
                <span className="">MY DIARY</span>
            </h1>
            <div className="grid grid-cols-4 gap-3">
                {dummyData.map(x => {
                    return <div className="flex flex-col p-4 border-2 border-gray-300">
                        <span className="text-lg text-black-200">{nowDate}</span>
                        <span className="text-xs text-black-200 mt-2">{x.content}</span>
                    </div>
                })}
            </div>
            <div className="text-center mx-auto container mt-[30px]">
                <button 
                    onClick={() => {}}
                    className="h-[56px] w-[296px] rounded"
                    style={{background: "linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)"}}>
                    <span className="text-lg text-white">自分の日記をもっと見る</span>
                </button>
            </div>
        </div>
    )
}

const pdata =
    {
        name: '家事全般（立位・軽い',
        calo: '11kcal',
        content: `私の日記の記録が一部表示されます。
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`
    }
;