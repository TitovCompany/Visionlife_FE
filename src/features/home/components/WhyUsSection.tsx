import { CheckCircle, Leaf, ShieldCheck } from "lucide-react";

const WhyUsSection = () => {
 const features = [
  { icon: Leaf, title: "친환경", description: "99% 무폐수 생산 공정" },
  { icon: ShieldCheck, title: "고품질", description: "최신 기술 적용" },
  { icon: CheckCircle, title: "B2B 맞춤 지원", description: "기업 맞춤형 솔루션 제공" },
 ];

 return (
  <section className="w-full bg-white py-32">
   <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-5xl font-bold">Why Choose Us?</h2>
    <p className="mt-4 text-xl text-gray-600">지속 가능성과 품질을 동시에 제공합니다.</p>

    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
     {features.map((feature, index) => (
      <div key={index} className="flex flex-col items-center text-center">
       <feature.icon className="w-16 h-16 text-primary" />
       <h3 className="mt-4 text-2xl font-semibold">{feature.title}</h3>
       <p className="mt-2 text-gray-600">{feature.description}</p>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
};

export default WhyUsSection;