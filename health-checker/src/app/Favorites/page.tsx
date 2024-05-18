'use-client'

import { CardFavorite } from "@/components/CardFavorite";

export default function Favorites() {
    function isOnline() {
        return true;
    }
    return (
        <div className="p-6">
            <div className="text-center text-4xl mt-14">
                <h1 className="text-white"><span className="text-orange-500">|</span> Favorites <span className="text-sky-500">|</span></h1>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-2/3 flex flex-wrap gap-5 p-4 mt-16 justify-center">
                    <CardFavorite 
                        url="google.com"
                        isOnline={isOnline()}
                    />
                </div>
            </div>
        </div>
    )
}