import { ConnectDB } from '@/lib/db';
import { Student } from '@/lib/models/Students';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function PUT(request, { params }) {
  const resolvedParams = await params;
  let resolved = resolvedParams.usersId;
  const filter = { _id: resolved };
  let payload = await request.json();
  console.log(payload);
  await mongoose.connect(ConnectDB);
  const result = await Student.findByIdAndUpdate(filter, payload);
  return NextResponse.json({ result, success: true }, { status: 200 });

}

export async function GET(request, { params }) {
  const resolvedParams = await params;
  let resolved = resolvedParams.usersId;
  const filter = { _id: resolved };
  await mongoose.connect(ConnectDB);
  const result = await Student.findById(filter);
  return NextResponse.json({ result, success: true });
}

export async function DELETE(request, { params }) {
  const resolvedParams = await params;
  let resolved = resolvedParams.usersId;
  const filter = { _id: resolved };
  await mongoose.connect(ConnectDB);
  const result = await Student.deleteOne(filter);
  return NextResponse.json({ result, success: true });
}
