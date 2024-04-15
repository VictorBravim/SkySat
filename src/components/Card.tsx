// Card.tsx

export default function Card() {
    return (
        <div className="absolute w-full z-30 bottom-0">
      <div className="container mx-auto flex justify-center space-x-4">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Card 1</h2>
          <p className="text-gray-600">Conteúdo do Card 1</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Card 2</h2>
          <p className="text-gray-600">Conteúdo do Card 2</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Card 3</h2>
          <p className="text-gray-600">Conteúdo do Card 3</p>
        </div>
      </div>
    </div>
    );
}