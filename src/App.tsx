import Navigation from "./components/Navigation.tsx";
import Footer from "./components/Footer.tsx";
import SectionLayout from "./layout/SectionLayout.tsx";

function App() {

  return (
    <>
      <Navigation/>
      <main className="w-full h-full block">
        {/* 메인 이미지 */}
        <SectionLayout/>
        {/* About */}
        <SectionLayout/>
        {/* Vision */}
        <SectionLayout/>
        {/* News */}
        <SectionLayout/>
        {/* Contact Us */}
        <SectionLayout/>
      </main>
      <Footer/>
    </>
  )
}

export default App
