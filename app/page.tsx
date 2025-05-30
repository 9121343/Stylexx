// Use your existing homepage content but remove <html>, <head>, <body> tags
// Keep only the content starting from <div className="relative flex...">
// Add this import at the top:
import Link from 'next/link';

// Then replace all shop buttons with:
<Link href="/shop" className="...">Shop Now</Link>