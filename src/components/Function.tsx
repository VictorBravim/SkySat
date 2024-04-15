// Function.tsx
import Image from "next/image";

export default function Function() {
    return (
        <div className="container mx-auto py-8 flex items-center justify-between">
            <div className="w-1/2 pl-8">
                <Image src="/mission-image.jpg" alt="Imagem de Missão" width={500} height={300} />
            </div>
            <div className="w-1/2 pr-8">
                <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
                <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                    fringilla magna et aliquam convallis. Vestibulum vitae quam nec mi
                    convallis efficitur sed ut ipsum.
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Saiba Mais
                </button>
            </div>
        </div>
    );
}