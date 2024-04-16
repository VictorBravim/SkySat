// Nav.tsx
import Image from "next/image";
import logo from '@/assets/Logo.webp'

export default function Nav() {
    return (
        <nav className="bg-transparent p-4 md:p-12 absolute w-full z-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center ml-0 lg:ml-8">
                    <Image src={logo} alt="Logo" width={32} height={32} />
                    <span className="text-white font-bold text-xl md:text-3xl ml-2 md:ml-4">SkySat</span>
                </div>
                <div className="md:flex space-x-4 mt-4 md:mt-0">
                    <a className="text-white text-base md:text-lg">Sobre</a>
                    <a className="text-white text-base md:text-lg">Tecnologia</a>
                    <a className="text-white text-base md:text-lg">Galaxia</a>
                    <a className="text-white text-base md:text-lg">Satellite</a>
                </div>
                <button className="bg-none border border-white text-white text-base md:text-lg font-bold py-2 px-4 mt-4 md:mt-0 mr-0 lg:mr-8">
                    Login
                </button>
            </div>
        </nav>
    );
}