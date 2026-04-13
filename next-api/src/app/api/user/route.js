import { user } from '@/utils/db';
import { NextResponse } from 'next/server';

export function GET() {
  const data = user;
  return NextResponse.json(data, { status: 200 });
}

export async function POST(request) {
  const payload = await request.json();
  console.log(payload.name);
  if (!payload.name || !payload.age || !payload.email) {
    return NextResponse.json({ result: 'All Field are Required', success: false }, { status: 404 });
  } else {
    return NextResponse.json(
      { result: 'User Added SuccessFully!', success: true },
      { status: 200 }
    );
  }
}
