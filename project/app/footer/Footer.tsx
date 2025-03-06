import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-medium text-gray-900">التصنيفات</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/" className="text-sm text-gray-600 hover:text-gray-900">جميع المنتجات</Link></li>
              <li><Link href="/" className="text-sm text-gray-600 hover:text-gray-900">سويشرتات</Link></li>
              <li><Link href="/" className="text-sm text-gray-600 hover:text-gray-900">بنطلونات</Link></li>
              <li><Link href="/" className="text-sm text-gray-600 hover:text-gray-900">فانيلات</Link></li>
              <li><Link href="/" className="text-sm text-gray-600 hover:text-gray-900">ملابس داخلية قطنية</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900">تابعونا</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-center text-gray-500">&copy; 2025 VIEW STORE. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 