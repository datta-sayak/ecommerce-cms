import { getPayload } from 'payload';
import config from '@payload-config';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const payload = await getPayload({ config });
    const result = await payload.count({
      collection: 'enquiries',
      overrideAccess: true,
    });
    return NextResponse.json({ count: result.totalDocs });
  } catch (error) {
    console.error('Enquiry count error:', error);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}
