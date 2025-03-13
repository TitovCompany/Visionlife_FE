const NotFoundPage = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <main className='flex flex-grow flex-col items-center justify-center px-4 text-center'>
        <h1 className='text-primary text-[6rem] font-extrabold sm:text-[10rem]'>
          404 ERROR
        </h1>

        <p className='mt-4 text-lg whitespace-pre-line text-black sm:text-lg'>
          죄송합니다. 페이지를 찾을 수 없습니다.{'\n'}
          존재하지 않는 주소를 입력하셨거나,{'\n'}
          요청하신 페이지의 주소가 변경,삭제되어 찾을 수 없습니다.
        </p>

        <div className='mt-6'>
          <button
            onClick={() => (window.location.href = '/')}
            className='bg-primary px-4 py-2 text-base transition duration-300 ease-in-out hover:brightness-110 sm:px-6 sm:py-3 sm:text-lg lg:px-8 lg:py-4 lg:text-xl'>
            메인으로 가기
          </button>
        </div>
      </main>
    </div>
  );
};

export default NotFoundPage;
