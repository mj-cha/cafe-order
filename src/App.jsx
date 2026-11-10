// 오즈 카페 — 주문앱 첫화면 (JSX main 안쪽 주석: {/* */} )
function App() { // {/*[메인 메뉴판] 화면 내용을 돌려주는 함수*/}
  return (       // {/* 괄호 안 JSX가 화면에 그려짐*/}
    <main>
      <h1>「오즈 카페」</h1>   {/*[TODO 5] 가게 이름 */}
      <p>메뉴를 고르고 주문하는 동네 카페 앱입니다.</p> {/*[TODO 6] 한줄 소개*/}
    </main>
  );
}
export default App;          // main.jsx가 가져가 #root에 올림 