// 메뉴 카드 하나 — 이름 · 가격 · 설명을 props로 받습니다
// [카드 틀] props 상자를 { } 로 풀어 받음. desc가 빈칸이면 「오늘의 메뉴」
function MenuCard({ name, price, desc = "오늘의 메뉴" }) {
  return (
    // [TODO 1: className] class 대신
    <article className="menu-card">
      {/* [TODO 2: name] 메뉴 이름 */}
      <h3>{name}</h3>
      {/* [TODO 3: price] 4000 → 「4000원」 */}
      <p className="price">{price}원</p>
      {/* 설명 (안 넘기면 기본값) */}
      <p className="desc">{desc}</p>
    </article>
  );
}

export default MenuCard;  // [TODO 4: default] 대표로 내보냄