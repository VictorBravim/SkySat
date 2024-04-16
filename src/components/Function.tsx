// Function.tsx
import Image from "next/image";
import satelite2 from '@/assets/2.jpg'

export default function Function() {
    return (
        <div className="container mx-auto py-32 mb-16 flex items-center justify-between">
            <div className="w-1/2 pl-8 flex justify-center">
                <Image src={satelite2} alt="Imagem de Missão" width={500} height={300} />
            </div>
            <div className="w-1/2 pr-8 text-right">
                <h2 className="text-2xl text-white font-bold mb-4">SATÉLITE</h2>
                <p className="text-gray-600 mb-4 pl-80">
                Além de iluminar a noite, influencia o equilíbrio dos oceanos. Facilita a transmissão de sinais de televisão, celulares e internet, além de servir como meio para enviar e receber comunicações.
                </p>
                <button className="bg-blue-custom-2 text-white font-bold py-2 px-4 rounded">
                    View All
                </button>
                <button className="bg-blue-custom-2 text-white font-bold py-2 px-4 rounded ml-4">
                    Saiba Mais
                </button>
                <hr className="border-b-2 border-gray-500 mt-4" />
            </div>
        </div>
    );
}