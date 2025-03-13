const ServerErrorPage = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <main className='flex flex-grow flex-col items-center justify-center px-4 text-center'>
        <h1 className='text-primary text-[6rem] font-extrabold sm:text-[10rem]'>
          500 ERROR
        </h1>

        <p className='mt-4 text-lg whitespace-pre-line text-black sm:text-xl'>
          서버에 문제가 발생했습니다.{'\n'}
          잠시 후 다시 시도해 주시거나,{'\n'}
          문제가 지속될 경우 고객센터에 문의해 주세요.
        </p>

        <div className='mt-6'>
          <button
            onClick={() => window.location.reload()}
            className='bg-primary px-4 py-2 text-base transition duration-300 ease-in-out hover:brightness-110 sm:px-6 sm:py-3 sm:text-lg lg:px-8 lg:py-4 lg:text-xl'>
            다시 시도하기
          </button>
        </div>
      </main>
    </div>
  );
};

export default ServerErrorPage;
