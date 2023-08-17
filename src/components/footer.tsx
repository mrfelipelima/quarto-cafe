
export default function Footer() {
    return(
        <footer className="w-full py-8 flex flex-col justify-center items-center gap-10 text-center">
            <div className="flex justify-center items-center">
                <div id="address" className="text-white">
                    <span className="font-bold">Quarto Café</span>
                    <p>Dentro da ALBUQUERQUE barbearia</p>
                    <p>Passagem Dom Bosco, 287 - Altos</p>
                    <p>Dom João VI</p>
                    <p>Capanema - PA</p>
                    <p>68701-260</p>
                </div>
                <div id="social">
                   
                </div>
            </div>
            <span className="text-white text-sm">Desenvolvido por{" "}
                <a href="https://www.felipelima.net" className="hover:underline hover:cursor-pointer">@mrfelipelima</a>
            </span>
        </footer>
    )
}