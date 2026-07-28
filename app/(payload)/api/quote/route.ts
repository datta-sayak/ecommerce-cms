import { getPayload } from 'payload';
import config from '@payload-config';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phone, company, country, productType, quantity, message } = body;

    // Basic validation
    if (!fullName || !email || !productType || !quantity) {
      return NextResponse.json(
        { success: false, error: 'Required fields are missing.' },
        { status: 400 }
      );
    }

    const payload = await getPayload({ config });

    await payload.create({
      collection: 'quote-requests',
      data: {
        fullName,
        email,
        phone: phone || undefined,
        company: company || undefined,
        country: country || undefined,
        productType,
        quantity,
        message: message || undefined,
        status: 'new',
      },
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error('Quote submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit quote request. Please try again.' },
      { status: 500 }
    );
  }
}
