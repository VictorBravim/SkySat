// Footer.tsx
import Image from "next/image";
import logo from '@/assets/logo.png'

export default function Footer() {
    return (
        <footer className="bg-black text-white p-8">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                <Image src={logo} alt="Logo" width={32} height={32} />
                    <span className="font-bold">SkySat</span>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="#" className="hover:text-blue-500">Link 1</a>
                    <a href="#" className="hover:text-blue-500">Link 2</a>
                    <a href="#" className="hover:text-blue-500">Link 3</a>
                    <a href="#" className="hover:text-blue-500">Link 4</a>
                </div>
                <div className="text-center">
                    <p>Todos os direitos reservados &copy; {new Date().getFullYear()}</p>
                </div>
            </div>
        </footer>
    );
}