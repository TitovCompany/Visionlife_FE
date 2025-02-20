import React from 'react';
import PrivacyPolicyData from '../data/policies/privacyPolicy.json';
import PageLayout from '../layout/PageLayout';

const ContentRenderer: React.FC<{content: string | string[]}> = ({content}) => {
  if (Array.isArray(content)) {
    return (
      <ul className="mt-2 mb-4 list-inside list-disc pl-0">
        {content.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    );
  }
  return <p className="mt-2 mb-4">{content}</p>;
};

const TableRenderer: React.FC<{headers: string[]; rows: any[]}> = ({
  headers,
  rows,
}) => (
  <table className="mb-4 min-w-full border border-gray-300">
    <thead>
      <tr>
        {headers.map((header, idx) => (
          <th
            key={idx}
            className="border border-gray-300 bg-gray-100 px-4 py-2 text-center">
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map((row, idx) => (
        <tr key={idx}>
          {headers.map((header, i) => (
            <td
              key={i}
              className="border border-gray-300 px-4 py-2 text-center">
              {row[header]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

const SectionTitle: React.FC<{index: number; title: string}> = ({
  index,
  title,
}) => (
  <h2 className="mb-2 text-xl font-semibold">
    {index}. {title}
  </h2>
);

const PrivacyPolicy: React.FC = () => {
  const data = PrivacyPolicyData;

  if (!data || !data.privacyPolicy) {
    return (
      <div className="text-center text-red-500">
        불러오는 중 오류가 발생했습니다.
      </div>
    );
  }
  return (
    <PageLayout title="개인정보처리방침">
      <div className="mx-auto max-w-4xl p-5">
        {/* 0. 소개 (메인 타이틀, 번호 없음) */}
        <section id={data.privacyPolicy.introduction.id}>
          <h1 className="mb-4 text-2xl font-bold">개인정보처리방침</h1>
          <ContentRenderer content={data.privacyPolicy.introduction.notice} />
        </section>

        {/* 1. 개인정보처리방침 용어의 정의 */}
        <section id={data.privacyPolicy.definitions.id}>
          <SectionTitle
            index={1}
            title={data.privacyPolicy.definitions.subtitle}
          />
          <ContentRenderer
            content={data.privacyPolicy.definitions.description}
          />
        </section>

        {/* 2. 개인정보 수집에 대한 동의 */}
        <section id={data.privacyPolicy.consentToCollect.id}>
          <SectionTitle
            index={2}
            title={data.privacyPolicy.consentToCollect.subtitle}
          />
          <ContentRenderer
            content={data.privacyPolicy.consentToCollect.description}
          />
        </section>

        {/* 3. 수집하는 개인정보의 항목 및 수집방법 */}
        <section id={data.privacyPolicy.collectedInformation.id}>
          <SectionTitle
            index={3}
            title={data.privacyPolicy.collectedInformation.subtitle}
          />
          <ContentRenderer
            content={data.privacyPolicy.collectedInformation.description}
          />
          {data.privacyPolicy.collectedInformation.collectedItems && (
            <div className="mb-4">
              <ul className="list-inside list-disc">
                {data.privacyPolicy.collectedInformation.collectedItems.map(
                  (item: any, idx: number) => (
                    <li key={idx}>
                      {item.category} : {item.details}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </section>

        {/* 4. 아동의 개인정보보호 */}
        <section id={data.privacyPolicy.childProtection.id}>
          <SectionTitle
            index={4}
            title={data.privacyPolicy.childProtection.subtitle}
          />
          <ContentRenderer
            content={data.privacyPolicy.childProtection.description}
          />
        </section>

        {/* 5. 개인정보의 수집 및 이용목적 */}
        <section id={data.purposeOfCollection.id}>
          <SectionTitle index={5} title={data.purposeOfCollection.subtitle} />
          <ContentRenderer content={data.purposeOfCollection.description} />
        </section>

        {/* 6. 개인정보의 보유 및 이용기간 */}
        <section id={data.retentionPeriod.id}>
          <SectionTitle index={6} title={data.retentionPeriod.subtitle} />
          <ContentRenderer content={data.retentionPeriod.description} />
          <p className="mb-2">{data.retentionPeriod.legalBasis}</p>
          {data.retentionPeriod.retentionDetails && (
            <div className="mb-4">
              <ul className="list-inside list-disc">
                {data.retentionPeriod.retentionDetails.map(
                  (item: any, idx: number) => (
                    <li key={idx}>
                      {item.dataType}: {item.duration}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </section>

        {/* 7. 개인정보 파기절차 및 그 방법 */}
        <section id={data.dataDestruction.id}>
          <SectionTitle index={7} title={data.dataDestruction.subtitle} />
          <ContentRenderer content={data.dataDestruction.description} />
          {data.dataDestruction.destructionProcess && (
            <div className="mb-4">
              <h3 className="text-lg font-medium">
                {data.dataDestruction.destructionProcess.title}
              </h3>
              <ContentRenderer
                content={data.dataDestruction.destructionProcess.steps}
              />
            </div>
          )}
          {data.dataDestruction.destructionMethods && (
            <div className="mb-4">
              <h3 className="text-lg font-medium">
                {data.dataDestruction.destructionMethods.title}
              </h3>
              <ContentRenderer
                content={data.dataDestruction.destructionMethods.methods}
              />
            </div>
          )}
        </section>

        {/* 8. 개인정보의 제 3자 제공 및 공유 */}
        <section id={data.thirdPartySharing.id}>
          <SectionTitle index={8} title={data.thirdPartySharing.subtitle} />
          <ContentRenderer content={data.thirdPartySharing.description} />
          {data.thirdPartySharing.thirdPartyProvision && (
            <div className="mb-4">
              <h3 className="text-lg font-medium">
                {data.thirdPartySharing.thirdPartyProvision.title}
              </h3>
              <ContentRenderer
                content={data.thirdPartySharing.thirdPartyProvision.details}
              />
            </div>
          )}
          {data.thirdPartySharing.exceptions && (
            <div className="mb-4">
              <h3 className="text-lg font-medium">
                {data.thirdPartySharing.exceptions.title}
              </h3>
              <ContentRenderer
                content={data.thirdPartySharing.exceptions.cases}
              />
            </div>
          )}
        </section>

        {/* 9. 개인정보의 처리위탁 */}
        <section id={data.dataProcessingDelegation.id}>
          <SectionTitle
            index={9}
            title={data.dataProcessingDelegation.subtitle}
          />
          <ContentRenderer
            content={data.dataProcessingDelegation.description}
          />
          {data.dataProcessingDelegation.delegatedTasksTable && (
            <div className="mb-4">
              <TableRenderer
                headers={
                  data.dataProcessingDelegation.delegatedTasksTable.headers
                }
                rows={data.dataProcessingDelegation.delegatedTasksTable.rows}
              />
            </div>
          )}
          {data.dataProcessingDelegation.contractRegulations && (
            <div className="mb-4">
              <ContentRenderer
                content={data.dataProcessingDelegation.contractRegulations}
              />
            </div>
          )}
          {data.dataProcessingDelegation.changePolicy && (
            <div className="mb-4">
              <ContentRenderer
                content={data.dataProcessingDelegation.changePolicy}
              />
            </div>
          )}
        </section>

        {/* 10. 이용자 권리와 그 행사방법 */}
        <section id={data.userRights.id}>
          <SectionTitle index={10} title={data.userRights.subtitle} />
          <div>
            {data.userRights.description.map((item, index) => (
              <p key={index} className="text-gray-700">
                {index + 1}. {item}
              </p>
            ))}
          </div>
        </section>

        {/* 11. 쿠키(cookie)의 설치/운영 및 거부에 관한 사항 */}
        <section id={data.cookiePolicy.id}>
          <SectionTitle index={11} title={data.cookiePolicy.subtitle} />
          <ContentRenderer content={data.cookiePolicy.description} />
          {data.cookiePolicy.cookieUsagePurpose && (
            <div className="mb-4">
              <h3 className="text-lg font-medium">쿠키 사용 목적</h3>
              <ContentRenderer content={data.cookiePolicy.cookieUsagePurpose} />
            </div>
          )}
          {data.cookiePolicy.cookieSettings && (
            <div className="mb-4">
              <h3 className="text-lg font-medium">쿠키의 설치/운영 및 거부</h3>
              <ContentRenderer
                content={data.cookiePolicy.cookieSettings.description}
              />
              {data.cookiePolicy.cookieSettings.browserSettings && (
                <div className="mt-2">
                  <h4 className="text-md font-medium">쿠키설정 방법</h4>
                  <ul className="list-inside list-disc">
                    {Object.entries(
                      data.cookiePolicy.cookieSettings.browserSettings
                    ).map(([key, value], idx) => {
                      if (key === 'id') return null;
                      return (
                        <li key={idx}>
                          {key}:{' '}
                          <a
                            href={value as string}
                            className="text-blue-500"
                            target="_blank"
                            rel="noreferrer">
                            {value}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          )}
        </section>

        {/* 12. 개인정보의 기술적/관리적 보호 대책 */}
        <section id={data.protectionMeasures.id}>
          <SectionTitle index={12} title={data.protectionMeasures.subtitle} />
          <ContentRenderer content={data.protectionMeasures.description} />
          {data.protectionMeasures.technicalMeasures && (
            <div className="mb-4">
              <h3 className="text-lg font-medium">기술적 대책</h3>
              <ContentRenderer
                content={data.protectionMeasures.technicalMeasures}
              />
            </div>
          )}
          {data.protectionMeasures.managerialMeasures && (
            <div className="mb-4">
              <h3 className="text-lg font-medium">관리적 대책</h3>
              <ContentRenderer
                content={data.protectionMeasures.managerialMeasures}
              />
            </div>
          )}
        </section>

        {/* 13. 개인정보관리책임자 및 담당자의 연락처 */}
        <section id={data.contactInfo.id}>
          <SectionTitle index={13} title={data.contactInfo.subtitle} />
          <ContentRenderer content={data.contactInfo.description} />
          {data.contactInfo.responsiblePerson && (
            <div className="mb-4">
              <h3 className="text-lg font-medium">개인정보 관리 책임자</h3>
              <p>이름: {data.contactInfo.responsiblePerson.name}</p>
              <p>부서: {data.contactInfo.responsiblePerson.department}</p>
              <p>직책: {data.contactInfo.responsiblePerson.position}</p>
              <p>연락처: {data.contactInfo.responsiblePerson.contact}</p>
            </div>
          )}
        </section>

        {/* 14. 정보주체의 권익 침해에 대한 구제방법 */}
        <section id={data.remedyMethods.id}>
          <SectionTitle index={14} title={data.remedyMethods.subtitle} />
          <ContentRenderer content={data.remedyMethods.description} />
          {data.remedyMethods.contacts && (
            <div className="mb-4">
              <ul className="list-inside list-disc">
                {data.remedyMethods.contacts.map(
                  (contact: any, idx: number) => (
                    <li key={idx}>
                      {contact.name}{' '}
                      {contact.phone && <span>{contact.phone}</span>}
                      {contact.website && (
                        <span>
                          {' '}
                          (
                          <a
                            href={contact.website}
                            className="text-blue-500"
                            target="_blank"
                            rel="noreferrer">
                            {contact.website}
                          </a>
                          )
                        </span>
                      )}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </section>

        {/* 15. 개인정보처리방침의 변경에 관한 고지의 의무 */}
        <section id={data.policyChangeNotice.id}>
          <SectionTitle index={15} title={data.policyChangeNotice.subtitle} />
          <ContentRenderer content={data.policyChangeNotice.description} />
          {data.policyChangeNotice.noticeDates && (
            <div className="mb-4">
              <p>공고일자: {data.policyChangeNotice.noticeDates['공고일자']}</p>
              <p>시행일자: {data.policyChangeNotice.noticeDates['시행일자']}</p>
            </div>
          )}
        </section>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicy;
