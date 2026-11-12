// [부품 3개 입고] 간판 · 카드 틀 · 꼬리말
import Header from "./components/Header.jsx";
// [TODO 5: MenuCard.jsx] 확장자까지
import MenuCard from "./components/MenuCard.jsx";
import Footer from "./components/Footer.jsx";

// 메뉴판 — 카드 컴포넌트 하나를 props만 바꿔 네 번 씁니다
function App() {
  return (
    <>
      <Header />
      <main>
        <h2>메뉴</h2>
        <div className="menu-list">
          {/* [TODO 6: 4000] 숫자는 따옴표 없이 { } 안에 (값은 예시) */}
          <MenuCard name="아메리카노" price={4000} desc="깊고 고소한 기본 커피" />
          <MenuCard name="카페 라테" price={4500} desc="우유를 넉넉히 넣은 커피" />
          <MenuCard name="자몽 에이드" price={5000} desc="상큼한 자몽과 탄산" />
          {/* desc를 안 넘김 → 카드 틀의 기본값 「오늘의 메뉴」 */}
          <MenuCard name="소금빵" price={3500} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;