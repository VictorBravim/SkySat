// Mission.tsx
import Image from "next/image";
import satelite1 from '@/assets/1.jpg'

export default function Mission() {
    return (
        <div className="container mx-auto mt-64 mb-8 flex items-center justify-between">
            <div className="w-1/2 pr-8">
                <h2 className="text-2xl text-white font-bold mb-4">SATÉLITE</h2>
                <p className="text-gray-600 mb-4">
                Fornece luz à noite. Afeta o equilíbrio da água do mar. Transmite sinais de televisão, celulares e internet. Transmite e recebe sinais de comunicação.
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    View All
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Saiba Mais
                </button>
            </div>
            <div className="w-1/2 pl-8">
                <Image src={satelite1} alt="Imagem de Missão" width={500} height={300} />
            </div>
        </div>
    );
}