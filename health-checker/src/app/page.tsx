
import { Table } from "@/components/Table";

export default function Home() {
  return (
    <>
      <main className="mt-16 ">
        <div className="text-center pt-14">
          <h1 className="text-white text-4xl" id="typeWritter"><span className="text-orange-500">DNS</span> Health Checker</h1>
        </div>
        <div className="flex justify-center items-center mt-20">
          <form>
            <div className="flex gap-1 items-center">
              <input type="text" className="text-white fw-bold p-2 w-[356px] rounded-s bg-white/15 focus:border-white" placeholder="Type an URL as you wish to check"/>
              <button type="submit" className="bg-orange-500 text-white p-2 rounded-e hover:brightness-[85%]">Check</button>
            </div>
          </form>
        </div>
      </main>
      <Table />
    </>
  );
}
