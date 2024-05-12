import { OnlineIcon } from "./OnlineIcon";

export function Table() {
    return (
        <section className="flex justify-center items-center mt-20 [height: 100%]">
            <table className="border-collapse border border-slate-600 text-white bg-white/15 w-[768px]">
                <thead>
                    <tr>
                        <th className="border border-slate-600 p-6">URL</th>
                        <th className="border border-slate-600 p-6">Online</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-slate-600 p-6">google.com</td>
                        <td className="border border-slate-600 p-6 flex justify-center items-center"><OnlineIcon /></td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600 p-6">instagram.com</td>
                        <td className="border border-slate-600 p-6 flex justify-center items-center"><OnlineIcon /></td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600 p-6">nextjs.org</td>
                        <td className="border border-slate-600 p-6 flex justify-center items-center"><OnlineIcon /></td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}