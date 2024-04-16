// Mission.tsx
import Image from "next/image";
import satelite1 from '@/assets/1.jpg'

export default function Mission() {
    return (
        <div className="container mx-auto mt-128 lg:mt-80 mb-8 flex items-center justify-between">
        <div className="w-full lg:w-1/2 pr-0 lg:pr-8">
            <h2 className="text-2xl text-white font-bold mb-4">RAPIDSCAN</h2>
            <p className="text-gray-600 mb-4 pr-80">
            Aprimorar a previsão do tempo na Terra, fornecer a calibração cruzada para todos os satélites internacionais que monitoram os ventos oceânicos e melhorar as estimativas de como os ventos oceânicos mudam ao longo do dia, em todo o mundo.
            </p>
            <button className="bg-blue-custom-2 text-white font-bold py-2 px-4 rounded">
                View All
            </button>
            <hr className="border-b-2 border-gray-500 mt-4"/>
        </div>
        <div className="w-1/2 pl-8 flex justify-center">
            <Image src={satelite1} alt="Imagem de Missão" width={500} height={300} />
        </div>
    </div>
    );
}