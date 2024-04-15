// Nav.tsx
import Image from "next/image";
import logo from '@/assets/logo.png'

export default function Nav() {
    return (
        <nav className="bg-transparent p-4 absolute w-full z-20">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <Image src={logo} alt="Logo" width={32} height={32} />
                    <span className="text-white font-bold text-lg">SkySat</span>
                </div>
                <div className="hidden md:flex space-x-4">
                    <a className="text-white">Sobre</a>
                    <a className="text-white">Tecnologia</a>
                    <a className="text-white">Galaxia</a>
                    <a className="text-white">Satellite</a>
                </div>
                <button className="bg-none border border-white hover:bg-blue-600 text-white font-bold py-2 px-4">
                    Botão
                </button>
            </div>
        </nav>
    );
}