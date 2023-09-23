import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { getCookie, setCookie, getCookies } from 'cookies-next';
 
// This function can be marked `async` if using `await` inside
export default function middleware(request: NextRequest) {
  // return NextResponse.redirect(new URL('/home', request.url))
  console.log('middleware')
  console.log('cookezera : ',getCookies())
  return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }