import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Check file size (10MB max)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'File size exceeds 10MB limit' },
        { status: 400 }
      );
    }

    // Create FormData for the external API
    // The API expects the field name to be 'image', not 'file'
    const uploadFormData = new FormData();
    uploadFormData.append('image', file);

    // Forward the upload to the external API
    const response = await fetch('https://cdn.legendholding.com/upload.php', {
      method: 'POST',
      body: uploadFormData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `Upload failed: ${response.status} ${response.statusText}`, details: errorText },
        { status: response.status }
      );
    }

    // Get the response from the external API
    const result = await response.json();
    
    // Check if the upload was successful
    if (result.success && result.url) {
      return NextResponse.json({ 
        success: true,
        url: result.url 
      });
    } else {
      return NextResponse.json(
        { 
          success: false,
          error: result.message || 'Upload failed: No URL returned from server' 
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to upload image' },
      { status: 500 }
    );
  }
}
