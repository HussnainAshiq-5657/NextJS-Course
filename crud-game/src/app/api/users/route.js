import { ConnectDB } from '@/lib/db';
import { Student } from '@/lib/models/Students';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await mongoose.connect(ConnectDB);
    const data = await Student.find();
    console.log(data);

    return NextResponse.json({ result: data, success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ result: error.message, success: false }, { status: 500 });
  }
}

export async function POST(req) {
  let payload = await req.json();
  await mongoose.connect(ConnectDB);
  let student = new Student(payload);
  const request = await student.save();
  return NextResponse.json({ request, success: true });
}
