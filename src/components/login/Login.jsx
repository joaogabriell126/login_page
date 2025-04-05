import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate()

    const irParaRegister = () => {
        navigate("/register")
    };

    return (
        <>
            <main className="flex justify-center items-center h-screen bg-gray-400">
                <form className="flex justify-evenly flex-col items-center w-110 h-100  border rounded-md bg-white">
                    <h1 className="font-['Inter'] text-3xl font-bold">Login</h1>
                    <div className="flex justify-between flex-col w-90 h-65">
                        <div className="flex flex-col">
                            <label htmlFor="username">Usuário</label>
                            <input className="border blue-red-700 h-12 border-gray-500 rounded-md p-2" type="text" name="username" placeholder="Digite o seu usuário" required />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password">Senha</label>
                            <input className="border blue-red-700 h-12 border-gray-500 rounded-md p-2" type="password" name="password" placeholder="Digite o seu email" required />
                        </div>
                        <button className="border border-none rounded-md w-full h-12 bg-blue-300 duration-400 hover:bg-blue-400 hover:scale-102 cursor-pointer">Entrar</button>

                        <div className="w-90 flex justify-between text-sm">
                            <p>Esqueceu sua senha?</p>
                            <p onClick={irParaRegister} className="text-blue-600 hover:text-blue-400 cursor-pointer">Ainda não tem uma conta?</p>
                        </div>
                    </div>
                </form>
            </main>
        </>
    )
}

export default Login