// Footer.tsx

export default function Footer() {
    return (
        <footer className="bg-black text-white p-8">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <img src="/logo.png" alt="Logo" className="h-8 mr-2" />
                    <span className="font-bold">Nome da Empresa</span>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="#" className="hover:text-blue-500">Link 1</a>
                    <a href="#" className="hover:text-blue-500">Link 2</a>
                    <a href="#" className="hover:text-blue-500">Link 3</a>
                    <a href="#" className="hover:text-blue-500">Link 4</a>
                </div>
                <div className="text-center">
                    <p>Todos os direitos reservados &copy; {new Date().getFullYear()}</p>
                </div>
            </div>
        </footer>
    );
}