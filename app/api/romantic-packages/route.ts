import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongoose';
import Package from '@/lib/models/Package';

// GET all romantic packages for public website
export async function GET() {
  try {
    await connectDB();
    
    // Valid romantic package types
    const validRomanticTypes = ['Honeymoon', 'Proposal', 'Candle Night', 'Beach Romance', 'Anniversary', 'Romantic'];
    
    // Fetch romantic packages from MongoDB
    const packages = await Package.find({ 
      category: 'romantic', 
      isActive: true,
      type: { $in: validRomanticTypes }
    }).sort({ createdAt: -1 });
    
    // Transform to match the expected format
    const transformedPackages = packages.map(pkg => ({
      id: pkg._id,
      image: pkg.image,
      days: pkg.duration,
      title: pkg.name,
      location: pkg.destination,
      destination: pkg.destination,
      price: `₹${pkg.price.toLocaleString()}/-`,
      type: pkg.type || 'Romantic',
      hotelRating: 5,
      features: pkg.features || [],
      highlights: Array.isArray(pkg.highlights) ? pkg.highlights.join(' • ') : pkg.highlights || pkg.description,
      createdAt: pkg.createdAt,
      updatedAt: pkg.updatedAt
    }));
    
    return NextResponse.json(transformedPackages);
  } catch (error) {
    console.error('Error reading romantic packages:', error);
    return NextResponse.json({ error: 'Failed to fetch romantic packages' }, { status: 500 });
  }
}
