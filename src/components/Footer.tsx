// Footer.tsx
import Image from "next/image";
import logo from '@/assets/logo.png'

export default function Footer() {
    return (
        <footer className="bg-black text-white p-8">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                <div className="flex items-center mb-2 lg:mb-0">
                <Image src={logo} alt="Logo" width={32} height={32} />
                    <span className="font-bold ml-2 md:ml-4">SkySat</span>
                </div>
                <div className="flex items-center space-x-4 mb-2 lg:mb-0">
                    <a href="#" className="hover:text-blue-500">Sobre</a>
                    <a href="#" className="hover:text-blue-500">Tecnologia</a>
                    <a href="#" className="hover:text-blue-500">Galaxia</a>
                    <a href="#" className="hover:text-blue-500">Satellite</a>
                </div>
                <div className="text-center">
                    <p>Todos os direitos reservados &copy; {new Date().getFullYear()}</p>
                </div>
            </div>
        </footer>
    );
}