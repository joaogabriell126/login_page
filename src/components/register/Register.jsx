function Register (){
    return(
        <>
            <main className="flex justify-center items-center h-screen bg-gray-400">
            <form className="flex justify-evenly flex-col items-center w-110 h-120  border rounded-md bg-white">
                    <h1 className="font-['Inter'] text-3xl font-bold">Registre-se</h1>
                    <div className="flex justify-between flex-col w-90 h-85">
                        <div className="flex flex-col">
                            <label htmlFor="username">Usuário</label>
                            <input className="border blue-red-700 h-12 border-gray-500 rounded-md p-2" type="text" name="username" placeholder="Digite o seu usuário" required />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email">Email</label>
                            <input className="border blue-red-700 h-12 border-gray-500 rounded-md p-2" type="email" name="email" placeholder="Digite o seu email" required />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password">Senha</label>
                            <input className="border blue-red-700 h-12 border-gray-500 rounded-md p-2" type="password" name="password" placeholder="Digite o seu email" required />
                        </div>
                        <button className="border border-none rounded-md w-full h-12 bg-blue-300 duration-400 hover:bg-blue-400 hover:scale-102 cursor-pointer">Criar</button>
                    </div>
                </form>
            </main>
        </>
    )
}

export default Register