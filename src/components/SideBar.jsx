const SideBar = () => {
    return (
        <>
          <div>
            <h1 className="text-3xl font-bold text-blue-600 px-6 py-6">Parkly.</h1>
                <nav className="flex flex-col space-y-2 px-6">
                    <a href="#" className="bg-blue-100 text-blue-700 rounded px-4 py-2">Nouveau</a>
                    <a href="#" className="text-gray-700 hover:bg-gray-200 rounded px-4 py-2">Mes réservations</a>
                    <a href="#" className="text-gray-700 hover:bg-gray-200 rounded px-4 py-2">Profile</a>
                </nav>
            </div>
                <div  className="px-6 py-4 pt-[59vh] " >
                        <a href="#" className="text-red-500">Se déconnecter</a>
                </div>
        </>
    );
}

export default SideBar;