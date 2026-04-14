import { ConnectDB } from '@/lib/db';
import { Product } from '@/lib/models/products';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function GET() {
  let data = [];
  try {
    await mongoose.connect(ConnectDB);
    data = await Product.find();
  } catch (error) {
    data = {
      success: false,
    };
  }

  return NextResponse.json({ result: data });
}

export async function POST(req) {
  let payload = await req.json()
  await mongoose.connect(ConnectDB);
  let product = new Product(payload);
  const request = await product.save();
  return NextResponse.json({ request, success: true });
}
