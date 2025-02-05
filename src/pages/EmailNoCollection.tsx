import React from "react";
import PrivacyData from "../data/emailNoCollection.json";
import PageLayout from "../layout/PageLayout.tsx";

const EmailNoCollection: React.FC = () => {
    const { emailNoCollectionPolicy } = PrivacyData;

    if (!emailNoCollectionPolicy) {
        return <div className="text-center text-red-500">불러오는 중 오류가 발생했습니다.</div>;
    }

    return (
        <PageLayout title={emailNoCollectionPolicy.title}>
            <div className="email-policy mx-auto max-w-[90%] md:max-w-[80%] p-5">
                {/* 제목 */}
                <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">{emailNoCollectionPolicy.title}</h1>

                {/* 정책 내용 */}
                {emailNoCollectionPolicy.content.map((paragraph: string, index: number) => (
                    <p key={index} className="leading-relaxed mb-3">{paragraph}</p>
                ))}

                {/* 관련 법률 */}
                <section className="mt-6">
                    <h2 className="text-xl md:text-2xl font-semibold mb-2">{emailNoCollectionPolicy.law.title}</h2>

                    {/* 제 50조의 2 */}
                    <h3 className="text-lg font-semibold mt-4">
                        {emailNoCollectionPolicy.law.article.number} {emailNoCollectionPolicy.law.article.title}
                    </h3>
                    <ol className="list-decimal pl-6 md:pl-8">
                        {emailNoCollectionPolicy.law.article.content.map((item: string, index: number) => (
                            <li key={index} className="mb-1">{item}</li>
                        ))}
                    </ol>

                    {/* 제 65조의 2 (벌칙) */}
                    <h3 className="text-lg font-semibold mt-6">
                        {emailNoCollectionPolicy.law.punishment.article.number} {emailNoCollectionPolicy.law.punishment.article.title}
                    </h3>
                    <ol className="list-decimal pl-6 md:pl-8 mt-2">
                        {emailNoCollectionPolicy.law.punishment.article.content.map((violation: string, index: number) => (
                            <li key={index} className="mb-1">{violation}</li>
                        ))}
                    </ol>
                </section>
            </div>
        </PageLayout>
    );
};

export default EmailNoCollection;
