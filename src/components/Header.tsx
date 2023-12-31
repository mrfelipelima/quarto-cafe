import Image from "next/image"
import logo from "../../public/logoQuartoCafe.svg"

export default function Header() {
    return(
        <header className="flex items-center justify-center flex-col gap-4 pt-10 px-6">
            <Image src={logo} alt="" className="w-44" />
            <h1 className="font-semibold text-2xl">Cardápio digital</h1>
            <span className="text-center">A mistura cultural do Brasil com os clássicos e bons caffès italianos.</span>
        </header>
    )
}