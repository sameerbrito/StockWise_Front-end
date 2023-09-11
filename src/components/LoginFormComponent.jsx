const LoginFormComponent = () => {
  return (
    <div className="container mx-auto mt-5">
      <div className="max-w-md mx-auto bg-[#cbd5e1] p-5 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Inicio de Sesión</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Usuario</label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Contraseña</label>
            <input
              type="password"
              id="password" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginFormComponent