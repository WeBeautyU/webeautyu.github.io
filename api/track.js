export default async function handler(req, res) {
  try {
    await fetch("https://quantmediahub.trk2afse.com/click?pid=4&offer_id=3");
  } catch (e) {
    // 실패해도 페이지엔 영향 없음
  }
  res.status(200).end();
}