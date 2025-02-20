import React from 'react';
import PrivacyData from '../data/policies/emailNoCollection.json';
import PageLayout from '../layout/PageLayout.tsx';

const EmailNoCollection: React.FC = () => {
  const {emailNoCollectionPolicy} = PrivacyData;

  if (!emailNoCollectionPolicy) {
    return (
      <div className="text-center text-red-500">
        불러오는 중 오류가 발생했습니다.
      </div>
    );
  }

  return (
    <PageLayout title={emailNoCollectionPolicy.title}>
      <div className="mx-auto max-w-4xl p-5">
        <h1 className="mb-4 text-2xl font-bold">
          {emailNoCollectionPolicy.title}
        </h1>

        {emailNoCollectionPolicy.content.map(
          (paragraph: string, index: number) => (
            <p key={index} className="mb-3 leading-relaxed">
              {paragraph}
            </p>
          )
        )}

        <section className="mt-6">
          <h2 className="mb-2 text-lg font-semibold">
            {emailNoCollectionPolicy.law.title}
          </h2>

          {/* 제 50조의*/}
          <h3 className="mt-4 text-sm font-semibold">
            {emailNoCollectionPolicy.law.article.number}{' '}
            {emailNoCollectionPolicy.law.article.title}
          </h3>
          <div className="mt-2">
            {emailNoCollectionPolicy.law.article.content.map(
              (item: string, index: number) => (
                <p key={index}>
                  {index + 1}. {item}
                </p>
              )
            )}
          </div>

          {/* 제 65조의 2*/}
          <h3 className="mt-6 text-sm font-semibold">
            {emailNoCollectionPolicy.law.punishment.article.number}{' '}
            {emailNoCollectionPolicy.law.punishment.article.title}
          </h3>
          <div className="mt-2">
            {emailNoCollectionPolicy.law.punishment.article.content.map(
              (violation: string, index: number) => (
                <p key={index}>
                  {index + 1}. {violation}
                </p>
              )
            )}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default EmailNoCollection;
