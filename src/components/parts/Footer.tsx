import { Link } from "react-router-dom";

interface Props {
  isTransparentFooter?: boolean;
}

export function Footer(props: Props) {
    
    return (
        <footer className={`bg-black-200 w-full py-[56px]`}>
            <div className="container mx-auto flex flex-row justify-between">
                <div className="mr-6 flex flex-row items-center">
                    <Link to={"/my-record"} className="flex items-center space-x-2 text-white text-base">
                        <span>会員登録</span>
                    </Link>
                    <Link to={"/"} className="flex items-center space-x-2 text-white ml-6 text-base">
                        <span>運営会社</span>
                    </Link>
                    <Link to={"/"} className="flex items-center space-x-2 text-white ml-6 text-base">
                        <span>利用規約</span>
                    </Link>
                    <Link to={"/"} className="flex items-center space-x-2 text-white ml-6 text-base">
                        <span>個人情報の取扱について</span>
                    </Link>
                    <Link to={"/"} className="flex items-center space-x-2 text-white ml-6 text-base">
                        <span>特定商取引法に基づく表記</span>
                    </Link>
                    <Link to={"/"} className="flex items-center space-x-2 text-white ml-6 text-base">
                        <span>お問い合わせ</span>
                    </Link>
                </div>
            </div>
        </footer>
    )
};
