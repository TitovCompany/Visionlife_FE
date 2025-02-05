import React from 'react';  // 레이아웃 컴포넌트 불러오기
import TermOfService from "../data/termsOfService.json";  // JSON 파일에서 데이터 불러오기
import PageLayout from "../layout/PageLayout.tsx";  // 레이아웃 컴포넌트 불러오기

const TermsOfService: React.FC = () => {
  const { termsOfService } = TermOfService;  // JSON 파일에서 'termsOfService' 객체 추출

  if (!termsOfService) {
    return <div className="text-center text-red-500">불러오는 중 오류가 발생했습니다.</div>;
  }

  return (
    <PageLayout title={termsOfService.title}>
      <div className="terms-policy mx-auto max-w-[90%] md:max-w-[80%] p-5">
        {/* 이용 약관 제목 */}
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">{termsOfService.title}</h1>

        {/* 약관 내용 */}
        {termsOfService.articles.map((article, index) => (
          <div key={index} className="mb-6">
            {/* 번호를 없애고 title만 표시 */}
            <h2 className="text-xl font-semibold">{article.title}</h2>
            {article.content && <p className="leading-relaxed mt-2 mb-4">{article.content}</p>} {/* content가 있을 때만 렌더링 */}

            {/* 정의 섹션 */}
            {article.definitions && (
              <div>
                <h3 className="text-lg font-semibold mt-4">정의</h3>
                <ul className="list-disc pl-6">
                  {article.definitions.map((definition, idx) => (
                    <li key={idx} className="mb-2">
                      <strong>{definition.term}:</strong> {definition.definition}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 섹션 내용 */}
            {article.sections && (
              <div className="mt-4">
                {article.sections.map((section, idx) => (
                  <div key={idx}>
                    {section.subtitle && <h3 className="text-lg font-semibold mt-4">{section.subtitle}</h3>}
                    <ul className="list-decimal pl-6">
                      {section.content.map((content: string, index: number) => (
                        <li key={index} className="mb-2">{content}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* 부칙 내용 */}
        <div>
          <h2 className="text-xl font-semibold mt-6">{termsOfService.appendix.title}</h2>
          <p className="mt-2">{termsOfService.appendix.content}</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default TermsOfService;
