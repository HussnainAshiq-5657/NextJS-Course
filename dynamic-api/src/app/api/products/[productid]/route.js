import { ConnectDB } from '@/lib/db';
import { Product } from '@/lib/models/products';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function PUT(request, { params }) {
  const resolvedParams = await params;
  let resolved = resolvedParams.productid;
  const filter = { _id: resolved };
  let payload = await request.json();
  console.log(payload);
  await mongoose.connect(ConnectDB);
  const result = await Product.findByIdAndUpdate(filter, payload);
  return NextResponse.json({ result, success: true });
}

export async function GET(request, { params }) {
  const resolvedParams = await params;
  let resolved = resolvedParams.productid;
  const filter = { _id: resolved };
  await mongoose.connect(ConnectDB);
  const result = await Product.findById(filter);
  return NextResponse.json({ result, success: true });
}

export async function DELETE(request, { params }) {
  const resolvedParams = await params;
  let resolved = resolvedParams.productid;
  const filter = { _id: resolved };
  await mongoose.connect(ConnectDB);
  const result = await Product.deleteOne(filter);
  return NextResponse.json({ result, success: true });
}
