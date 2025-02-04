import { FaList, FaLightbulb } from "react-icons/fa"; // 새로운 아이콘 추가
import overview from "../../../data/businessOverview.json";
import OverviewList from "../components/OverviewList.tsx";
import SectionLayout from "../../../layout/SectionLayout.tsx";

const Overview = () => {
  return (
      <div className="flex flex-col min-h-screen bg-gray-100"> {/* 배경을 단색 회색으로 변경 */}
        {/* 메인 컨텐츠 */}
        <div className="flex-grow">
          <SectionLayout
              title={overview.title}
              className="grid place-items-center py-20 px-6"
              titleClassName="mb-6 max-w-3xl text-4xl sm:text-5xl font-bold leading-tight text-gray-900 text-center"
              titlePadding="p-0"
          >
            {/* 설명 부분 */}
            <div className="w-full sm:max-w-xl md:max-w-2xl bg-white rounded-xl p-6 sm:p-10 mt-4">
              <article className="text-lg sm:text-xl leading-8 sm:leading-9 text-gray-800 text-center">
                <p>{overview.description}</p>
              </article>
            </div>

            {/* 주요 특징 및 혜택 섹션 */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 mt-12 w-full max-w-5xl">
              <div className="p-6 sm:p-8 bg-white rounded-xl">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
                  <FaList className="text-gray-700" /> 주요 특징
                </h2>
                <OverviewList data={overview.features} />
              </div>

              <div className="p-6 sm:p-8 bg-white rounded-xl">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
                  <FaLightbulb className="text-gray-700" /> 혜택
                </h2>
                <OverviewList data={overview.benefits} />
              </div>
            </div>
          </SectionLayout>
        </div>

        {/* 푸터와의 간격 추가 */}
        <div className="pb-64"></div>
      </div>
  );
};

export default Overview;
