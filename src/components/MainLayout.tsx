import { useState } from "react";
import {useCounter} from "ahooks";
import {Outlet} from "react-router";
import IconLoading from "./icons/IconLoading"
import { Header } from "./parts/Header";
import { Footer } from "./parts/Footer";

export function MainLayout() {
    const [isLoading, setIsLoading] = useState(false);
    const [reloadCounter, setReloadCounter] = useCounter();
    const LoadingFrame = (
        <div className="w-screen h-screen flex justify-center items-start pt-20">
            <IconLoading className="text-black2 w-6 h-6" />
        </div>
    )

    return <>
        <Header />
        <div className="mx-auto">
        {(!isLoading) ?
            <Outlet context={[reloadCounter]} /> :
            LoadingFrame
        }
        </div>
        <Footer />
    </>
}