import { Link } from "react-router-dom";
import logoUrl from "../../assets/logo.png";
import iconMenu from "../../assets/icon_menu.svg";
import iconMemo from "../../assets/icon_memo.svg";
import iconChallenge from "../../assets/icon_challenge.svg";
import iconInfo from "../../assets/icon_info.svg";

interface Props {
  isTransparentHeader?: boolean;
}

export function Header(props: Props) {

    const renderBadgeMenu = (numNoti = 1) => {
        return (
            <div className="absolute flex items-center justify-center rounded-full bg-orange-400 h-[16px] w-[16px] top-0 right-0">
                <span className="text-[10px] text-white">{numNoti}</span>
            </div>
        )
    }
    
    return (
        <header className={`bg-black-200 w-full text-header`}>
            <div className="container mx-auto flex flex-row justify-between">
                <div className="font-bold text-5xl pr-8">
                    <Link to="/" className="">
                        <img src={logoUrl} className="object-contain" alt={"Logo"} width={144} height={64} />
                    </Link>
                </div>
                <div className="mr-6 flex flex-row items-center">
                    <Link to={"/my-record"} className="flex items-center space-x-2 text-white ml-6 text-base">
                        <img src={iconMemo} className="object-contain" width={32} height={32} />
                        <span>自分の記録</span>
                    </Link>
                    <Link to={"/my-record"} className="flex items-center space-x-2 text-white ml-6 text-base">
                        <img src={iconChallenge} className="object-contain" width={32} height={32} />
                        <span>チャレンジ</span>
                    </Link>
                    <Link to={"/"} className="flex items-center space-x-2 text-white ml-6 text-base">
                        <div className="relative">
                            {renderBadgeMenu()}
                            <img src={iconInfo} className="object-contain" width={32} height={32} />
                        </div>
                        <span>お知らせ</span>
                    </Link>
                    <button className="w-[32px] h-[32px] ml-6">
                        <img src={iconMenu} className="object-contain" width={32} height={32} />
                    </button>
                </div>
            </div>
        </header>
    )
};
