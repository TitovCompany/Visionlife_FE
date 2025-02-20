import React from 'react';
import TermOfService from '../data/policies/termsOfService.json';
import PageLayout from '../layout/PageLayout.tsx';

const TermsOfService: React.FC = () => {
  const {termsOfService} = TermOfService;

  if (!termsOfService) {
    return (
      <div className="text-center text-red-500">
        불러오는 중 오류가 발생했습니다.
      </div>
    );
  }

  const renderContent = (content: string | string[]) => {
    if (Array.isArray(content)) {
      return (
        <ul className="mt-4 mb-6 list-inside list-decimal space-y-3 pl-0">
          {content.map((item, idx) => (
            <li key={idx} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
    }
    return <p className="mt-2 mb-4 leading-relaxed">{content}</p>;
  };

  return (
    <PageLayout title={termsOfService.title}>
      <div className="mx-auto max-w-4xl p-5">
        <h1 className="mb-4 text-2xl font-bold">{termsOfService.title}</h1>

        {termsOfService.articles.map((article, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-l font-semibold">{article.title}</h2>
            {article.content && renderContent(article.content)}
            {article.definitions && (
              <div className="mt-6">
                <h3 className="mt-4 text-lg font-semibold">정의</h3>
                <ul className="list-inside list-disc pl-0">
                  {article.definitions.map((def, idx) => (
                    <li key={idx} className="mb-2">
                      {def.definition}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {article.sections && (
              <div className="mt-4">
                {article.sections.map((section, idx) => (
                  <div key={idx}>
                    {section.subtitle && (
                      <h3 className="text-l mt-4 font-semibold">
                        {section.subtitle}
                      </h3>
                    )}
                    {renderContent(section.content)}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        <div>
          <h1 className="text-l mt-6 font-semibold">
            {termsOfService.appendix.title}
          </h1>
          <p className="mt-2">{termsOfService.appendix.content}</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default TermsOfService;
