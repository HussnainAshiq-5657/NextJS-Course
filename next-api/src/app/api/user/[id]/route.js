import { user } from '@/utils/db';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const resolvedParams = await params;
  console.log(resolvedParams.id);

  const UserData = user.filter((items) => items.id == resolvedParams.id);

  return NextResponse.json(
    UserData.length === 0
      ? { result: 'No Data Found of this user', success: false }
      : { result: UserData[0], success: true },
    { status: 200 }
  );
}
