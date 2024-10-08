import myImage from './f4ce0b459d900fa5a56b6f70add72fcd.jpg'; // Ajusta la ruta según donde esté la imagen

function App() {
  return (
    <div className="bg-sky-400 bg-clouds h-screen flex justify-center items-center">
      <div className="bg-rosa3 bg-opacity-80 p-10 rounded-3xl border border-pink-700 shadow-lg">
        <div className="text-center">
          <img className="rounded-3xl mb-4" src={myImage} alt="Descripción de la imagen" />
          <p className="text-white mb-4 text-4xl">Te invito a invitarme haciendo esto:</p>
          <a href="https://www.instagram.com/reel/DAcZHgGA49m/?igsh=MWxkcHgxa2w2aGIzcQ==" target="_blank" rel="noopener noreferrer">
            <button className="bg-pink-700 text-white font-bold py-2 px-4 rounded-full hover:bg-pink-900 transition duration-200 text-2xl">
              ¿El qué?
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
