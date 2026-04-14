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
    data: {
      success: false;
    }
  }

  return NextResponse.json({ result: data });
}
