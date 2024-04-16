// Nav.tsx
import Image from "next/image";
import logo from '@/assets/logo.png'

export default function Nav() {
    return (
        <nav className="bg-transparent p-12 absolute w-full z-20">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center ml-8">
                    <Image src={logo} alt="Logo" width={32} height={32} />
                    <span className="text-white font-bold text-3xl ml-4">SkySat</span>
                </div>
                <div className="hidden md:flex space-x-4">
                    <a className="text-white text-lg">Sobre</a>
                    <a className="text-white text-lg">Tecnologia</a>
                    <a className="text-white text-lg">Galaxia</a>
                    <a className="text-white text-lg">Satellite</a>
                </div>
                <button className="bg-none border border-white text-white text-lg font-bold py-2 px-4 mr-8">
                    Botão
                </button>
            </div>
        </nav>
    );
}