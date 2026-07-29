import { getPayload } from 'payload'
import config from '@payload-config'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { fullName, email, phone, company, country, productName, productCode, quantity, message } = body

    if (!fullName || !email || !productName) {
      return NextResponse.json(
        { success: false, error: 'Required fields are missing.' },
        { status: 400 }
      )
    }

    const payload = await getPayload({ config })

    await payload.create({
      collection: 'enquiries',
      data: {
        fullName,
        email,
        phone:       phone       || undefined,
        company:     company     || undefined,
        country:     country     || undefined,
        productName,
        productCode: productCode || undefined,
        quantity:    quantity    || undefined,
        message:     message     || undefined,
        status: 'new',
      },
      overrideAccess: true,
    })

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (error) {
    console.error('Enquiry submission error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to submit enquiry. Please try again.' },
      { status: 500 }
    )
  }
}
