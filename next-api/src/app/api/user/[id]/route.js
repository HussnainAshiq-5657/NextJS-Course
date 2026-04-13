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

export async function PUT(request, { params }) {
  console.log('PUT API HIT');
  const resolvedParams = await params;
  let payload = await request.json();
  payload.id = resolvedParams.id;
  console.log(payload);
  if (!payload.id || !payload.name || !payload.age || !payload.email) {
    return NextResponse.json({ result: 'Error in Data Updating', success: false }, { status: 400 });
  }

  return NextResponse.json({ result: payload, success: true }, { status: 200 });
}


export async function DELETE(request, { params }) {
  const { id } = await params;

  console.log(id);

  if (id) {
    return NextResponse.json(
      { result: 'User Deleted Successfully!', success: true },
      { status: 200 }
    );
  } else {
    return NextResponse.json({ result: 'User not deleted!', success: false }, { status: 400 });
  }
}
