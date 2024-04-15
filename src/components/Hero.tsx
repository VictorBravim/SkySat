// Hero.tsx

export default function Hero() {
    return (
        <div className="block h-screen flex items-center justify-center">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpg')", }}></div>
            <div className="relative z-10 text-white w-1/3">
                <div className="text-left">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">ÓRBITA DA TERRA</h1>
                    <p className="text-2xl md:text-xl font-bold mb-4">Segundo a página da NASA, um satélite é um objeto que orbita ou cerca outro objeto no espaço. Existem dois tipos diferentes de satélites, a saber, naturais e artificiais. Conforme citado pelo Science Learn, de acordo com o Dr. Allan McInnes, um satélite é qualquer coisa que orbita ao redor de um objeto maior.</p>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Mais
                </button>
            </div>
            <div className="w-1/2"></div>
        </div>
    );
}
