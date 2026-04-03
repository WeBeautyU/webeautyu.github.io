import { NextResponse } from 'next/server';

export async function middleware(request) {
  // 루트 접속 시 백그라운드에서 Affise 호출
  if (request.nextUrl.pathname === '/') {
    fetch("https://quantmediahub.trk2afse.com/click?pid=4&offer_id=3")
      .catch(() => {});
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/',
};