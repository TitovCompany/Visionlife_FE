import news from '../../../data/news.json';
import GridArticle from '../../../layout/Grid/GridArticle.tsx';
import {Link} from 'react-router-dom';

const Media = () => {
 return (
  <GridArticle colStart={2} colEnd={12} className='h-screen flex flex-col items-center justify-center gap-20 overflow-x-visible'>
   <div className='text-primary text-lg text-left w-full min-w-fit'>
    <h2 className='w-full mb-5 text-5xl font-bold '>NEWS</h2>
    <p>친환경 기술과 지속 가능한 변화를 만드는</p>
    <p>PROUTEX의 최신 소식을 만나보세요.</p>
   </div>
   <div className='flex gap-5 overflow-x-visible'>
    {/* Media Carousel */}
    <div className='min-w-[380px] relative border-color flex flex-col items-start justify-around border-2 p-8'>
     <img src='/img/logo.webp' alt='test' className='h-full w-full' />
     <div className='border-color mt-10 mr-10 w-full text-left'>
      <h3 className='mb-5 text-xl'>
        {news.items[0].title}
      </h3>
     </div>
    </div>
    <div className='relative border-color flex flex-col min-w-[380px] items-start justify-around border-2 p-8'>
     <img src='/img/logo.webp' alt='test' className='h-full w-full' />
     <div className='border-color mt-10 mr-10 w-full text-left'>
      <h3 className='mb-5 text-xl'>
       {news.items[0].title}
      </h3>
     </div>
    </div>
    <div className='relative border-color flex flex-col min-w-[380px] items-start justify-around border-2 p-8'>
     <img src='/img/logo.webp' alt='test' className='h-full w-full' />
     <div className='border-color mt-10 mr-10 w-full text-left'>
      <h3 className='mb-5 text-xl'>
       {news.items[0].title}
      </h3>
     </div>
    </div>
   </div>
   <div className='w-full h-full mx-auto text-xl'>
    <Link to='/' className='py-4 px-10 w-fit border'>VIEW ALL</Link>
   </div>
  </GridArticle>
 );
};

export default Media;