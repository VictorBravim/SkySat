// Card.tsx
export default function Card() {
    return (
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40" style={{ marginTop: '940px' }}>
            <div className="container mx-auto flex justify-center space-x-4">
                <div className="bg-blue-custom text-white rounded-lg shadow-lg p-6 text-center w-1/3">
                    <h1 className="text-xl font-semibold mb-2">LEO</h1>
                    <h2 className="text-xl font-semibold mb-2">300-1500 KM</h2>
                    <p className="text-gray-600">(Órbita terrestre baixa)</p>
                </div>
                <div className="bg-blue-custom text-white rounded-lg shadow-lg p-6 text-center w-1/3">
                <h1 className="text-xl font-semibold mb-2">Hi-SPEED</h1>
                    <h2 className="text-xl font-semibold mb-2">22,236 MIL</h2>
                    <p className="text-gray-600">(Órbita geoestacionária)</p>
                </div>
                <div className="bg-blue-custom text-white rounded-lg shadow-lg p-6 text-center w-1/3">
                <h1 className="text-xl font-semibold mb-2">TERRA</h1>
                    <h2 className="text-xl font-semibold mb-2">365 DIAS</h2>
                    <p className="text-gray-600">(Período orbital)</p>
                </div>
            </div>
        </div>
    );
}
