import AddBlocks from "@/widgets/form/addBlocks";
import DefaultInput from "@/shared/input/templates/default";

export default function HomePage() {
    return (
        <main className="w-screen h-screen bg-black">
            <div className="container h-screen flex justify-center items-center">
                <form className="bg-[#101010] px-[20px] py-[20px]">
                    <DefaultInput />

                    <AddBlocks />

                    {/* <button>Отправить</button> */}
                </form>
            </div>
        </main>
    )
}