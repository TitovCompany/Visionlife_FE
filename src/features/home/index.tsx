import PageLayout from "../../layout/PageLayout.tsx";
import DummyImgBox from "../../components/DummyImgBox.tsx";

const Home = () => {
  return (
      <PageLayout title="서비스 페이지 본문">
        <section className="w-full h-full">
          <article className="mx-32 h-96 grid grid-cols-5 grid-rows-2">
            <div className="col-span-4 row-span-2">
              <DummyImgBox width="w-full" height="h-full" isCircle={false}/>
            </div>
            <div className="col-span-1 row-span-1">
              <DummyImgBox width="w-full" height="h-full" isCircle={false}/>
              <DummyImgBox width="w-full" height="h-full" isCircle={false}/>
            </div>
          </article>
          <article className="mx-32 py-20 text-center">
            <h2 className="mb-3 text-4xl font-semibold">Vision Life</h2>
            <p className="text-2xl">
              지속 가능한 미래를 그리며, 세상을 연결하는 친환경 기술을 만들어갑니다.
            </p>
          </article>

          {/* 제품 */}
          <div className="max-w-4xl mx-auto">
            <article className="mx-32 h-96 py-20">
              <div className="h-full flex gap-5">
                <div>
                  <h2>고객과 함께 하는 친환경 녹색 미래</h2>
                  <p>
                    비젼라이프는 지속 가능한 미래를 위해 친환경 기술을 연구하며,
                    혁신적인 솔루션으로 녹색 산업을 선도합니다.
                  </p>
                </div>
                <DummyImgBox width="w-full" height="h-full" isCircle={false}/>
              </div>
            </article>

            <article className="mx-32 h-96 py-20">
              <div className="h-full flex gap-5">
                <div>
                  <h2>섬유 염색의 미래, UTEX에서 시작됩니다.</h2>
                  <p>
                    UTEX는 전·후처리 공정 없이 깨끗한 염색을 실현하는 혁신적인 기술로,
                    친환경 섬유 산업의 새로운 기준을 만들어갑니다.
                  </p>
                </div>
                <DummyImgBox width="w-full" height="h-full" isCircle={false}/>
              </div>
            </article>
          </div>
          
          {/* 뉴스 */}
          <article className="mx-32 h-96 py-20">
            <h2 className="mb-2">비전라이프 최신 소식</h2>
            <div className="h-full flex justify-between gap-5">
              <div className="w-full">
                <DummyImgBox width="w-full" height="h-full" isCircle={false}/>
                <h2>title</h2>
                <div>article</div>
              </div>
              <div className="w-full">
                <DummyImgBox width="w-full" height="h-full" isCircle={false}/>
                <h2>title</h2>
                <div>article</div>
              </div>
              <div className="w-full">
                <DummyImgBox width="w-full" height="h-full" isCircle={false}/>
                <h2>title</h2>
                <div>article</div>
              </div>
              <div className="w-full">
                <DummyImgBox width="w-full" height="h-full" isCircle={false}/>
                <h2>title</h2>
                <div>article</div>
              </div>
            </div>
          </article>

          <article className="max-w-3xl h-96 mx-auto py-20">
            <div className="w-full h-full flex justify-between gap-5">
              <div className="w-1/2">
                <h3>더 많은 소식 확인하기</h3>
                <button>모든 소식 보기</button>
              </div>
              <div className="w-1/2">
                <DummyImgBox width="w-full" height="h-full" isCircle={false}/>
              </div>
            </div>
          </article>
        </section>
     </PageLayout>
  );
};

export default Home;