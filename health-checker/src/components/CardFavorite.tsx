import { OfflineIcon } from "./OfflineIcon";
import { OnlineIcon } from "./OnlineIcon";
import { FaRegTrashAlt } from "react-icons/fa";

interface ICardProps {
    url: string;
    isOnline: boolean;
}

export function CardFavorite(props: ICardProps) {
    return(
        <div className="bg-sky-900 w-60 h-56 p-4 rounded-lg flex flex-col gap-2 justify-between items-center text-white">
            <div className="w-full text-end">
                <button className="hover:scale-110">
                    <FaRegTrashAlt color="red"/>
                </button>
            </div>
            <h2 className="text-center text-lg font-bold">{props.url}</h2>
            <div className="bg-zinc-400/25 w-1/3 rounded-lg flex justify-center items-center p-3">
                {props.isOnline ? <OnlineIcon /> : <OfflineIcon />}
            </div>
            <div className="flex items-center justify-end w-full">
                <span className="text-sm">Status: <span className={props.isOnline ? "text-lime-500" : "text-red-600"}>{props.isOnline ? "Online" : "Offline"}</span></span>
            </div>
        </div>
    )
}