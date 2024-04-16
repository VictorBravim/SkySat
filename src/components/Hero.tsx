// Hero.tsx

export default function Hero() {
    return (
        <div className="block h-screen flex items-center justify-center px-16">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/bg.webp')", }}></div>
            <div className="relative z-10 text-white w-full lg:w-1/3">
                <div className="text-left mb-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ letterSpacing: '0.1em' }}>ÓRBITA DA TERRA</h1>
                    <p className="text-sm md:text-2xl text-gray-500 font-bold mb-4 pr-0 lg:pr-24">Segundo a página da NASA, um satélite é um objeto que orbita ou cerca outro objeto no espaço. Existem dois tipos diferentes de satélites, a saber, naturais e artificiais. Conforme citado pelo Science Learn, de acordo com o Dr. Allan McInnes, um satélite é qualquer coisa que orbita ao redor de um objeto maior.</p>
                </div>
                <button className="bg-blue-custom-2 text-white text-2xl font-bold py-3 px-12 rounded">
                    Mais
                </button>
            </div>
            <div className="w-none lg:w-1/2"></div>
        </div>
    );
}
