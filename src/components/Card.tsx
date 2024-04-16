// Card.tsx
export default function Card() {
    return (
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40" style={{ marginTop: '940px' }}>
            <div className="container mx-auto flex justify-center space-x-4">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-semibold mb-2">Card 1</h2>
                    <p className="text-gray-600">Conteúdo do Card 1</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-semibold mb-2">Card 2</h2>
                    <p className="text-gray-600">Conteúdo do Card 2</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-semibold mb-2">Card 3</h2>
                    <p className="text-gray-600">Conteúdo do Card 3</p>
                </div>
            </div>
        </div>
    );
}
