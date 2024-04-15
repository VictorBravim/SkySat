// Mission.tsx
import Image from "next/image";

export default function Mission() {
    return (
        <div className="container mx-auto py-8 flex items-center justify-between">
            <div className="w-1/2 pr-8">
                <h2 className="text-2xl text-white font-bold mb-4">RAPIDSCAT</h2>
                <p className="text-gray-600 mb-4">
                Melhora a previsão do tempo na Terra, fornece a calibração cruzada para todos os satélites internacionais que monitoram os ventos oceânicos e aprimora as estimativas de como os ventos oceânicos mudam ao longo do dia, em todo o mundo.
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Saiba Mais
                </button>
            </div>
            <div className="w-1/2 pl-8">
                <Image src="/mission-image.jpg" alt="Imagem de Missão" width={500} height={300} />
            </div>
        </div>
    );
}