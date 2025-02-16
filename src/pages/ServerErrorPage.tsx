const ServerErrorPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col items-center justify-center flex-grow text-center px-4">
        <h1 className="text-[6rem] sm:text-[10rem] font-extrabold text-primary">
          500 ERROR
        </h1>

        <p className="mt-4 text-lg sm:text-xl text-black whitespace-pre-line">
          서버에 문제가 발생했습니다.{"\n"}
          잠시 후 다시 시도해 주시거나,{"\n"}
          문제가 지속될 경우 고객센터에 문의해 주세요.
        </p>

        <div className="mt-6">
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-primary text-base sm:text-lg lg:text-xl transition duration-300 ease-in-out hover:brightness-110"
          >
            다시 시도하기
          </button>
        </div>
      </main>
    </div>
  );
};

export default ServerErrorPage;
