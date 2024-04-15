// Nav.tsx

export default function Nav() {
    return (
        <nav className="bg-none p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <img src="/logo.png" alt="Logo" className="h-8 mr-2" />
                    <span className="text-white font-bold text-lg">Space</span>
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
