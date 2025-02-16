const NotFoundPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col items-center justify-center flex-grow text-center px-4">

        <h1 className="text-[6rem] sm:text-[10rem] font-extrabold text-primary">
          404 ERROR
        </h1>

        <p className="mt-4 text-lg sm:text-lg text-black whitespace-pre-line">
          죄송합니다. 페이지를 찾을 수 없습니다.{"\n"}
          존재하지 않는 주소를 입력하셨거나,{"\n"}
          요청하신 페이지의 주소가 변경,삭제되어 찾을 수 없습니다.
        </p>

        <div className="mt-6">
          <button
            onClick={() => window.location.href = '/'}
            className="px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-primary text-base sm:text-lg lg:text-xl transition duration-300 ease-in-out hover:brightness-110"
          >
            메인으로 가기
          </button>
        </div>
      </main>
    </div>
  );
};

export default NotFoundPage;
