import { NextResponse } from 'next/server';

export async function GET(request) {
  return NextResponse.json({ name: 'ALi', age: 20, city: 'Lahore' }, { status: 200 });
}
