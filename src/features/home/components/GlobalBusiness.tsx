import ThreeDScene from '../../../components/ThreeDScene.tsx';

const GlobalBusiness = () => {
 return (
  <section>
   <div>
    <h2 className='text-5xl font-bold'>Global Business</h2>
    <article className='w-screen h-screen'><ThreeDScene /></article>
    <article>유럽</article>
    <article>중국</article>
    <article>인도네시아</article>
    <article>방글라데시</article>
   </div>
   <p>i’m with you</p>
  </section>
 );
};

export default GlobalBusiness;