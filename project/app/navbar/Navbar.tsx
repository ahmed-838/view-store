import { Menu, Search, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = ({ setSelectedCategory }: { setSelectedCategory: (category: string) => void }) => {
  const [selectedCategory, setSelectedCategoryState] = useState("all");
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    console.log(`Selected category: ${selectedCategory}`);
  }, [selectedCategory]);

  return (
    <div className="border-b" style={{ zIndex: 1000 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16" style={{ zIndex: 1000 }}>
          {/* Left - Menu (Mobile) */}
          <div className="lg:hidden" style={{ zIndex: 1000 }}>
            <button 
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Center - Logo */}
          <div className="flex-1 flex items-center justify-center lg:justify-start">
            <Link href="/" className="text-2xl font-serif tracking-wider">
              VIEW STORE
            </Link> 
          </div>

          {/* Right - Navigation */}
          <nav className={`lg:flex items-center space-x-8 ${isMenuOpen ? "block" : "hidden"} lg:block`} style={{ zIndex: 1000 }}>
            <div className={`absolute top-16 left-0 w-full bg-white shadow-lg rounded-lg transition-transform duration-300 ${isMenuOpen ? "transform translate-y-0" : "transform -translate-y-full"} lg:hidden`}>
              <button 
                onClick={() => setSelectedCategory("all")}
                className={`block w-full text-left text-sm ${selectedCategory === "all" ? "text-black font-medium" : "text-gray-600"} hover:text-gray-900 px-4 py-2`}
              >
                جميع المنتجات
              </button>
              <button 
                onClick={() => setSelectedCategory("clothing")}
                className={`block w-full text-left text-sm ${selectedCategory === "clothing" ? "text-black font-medium" : "text-gray-600"} hover:text-gray-900 px-4 py-2`}
              >
                سويشرت
              </button>
              <button 
                onClick={() => setSelectedCategory("bags")}
                className={`block w-full text-left text-sm ${selectedCategory === "bags" ? "text-black font-medium" : "text-gray-600"} hover:text-gray-900 px-4 py-2`}
              >
                بنطلون
              </button>
              <button 
                onClick={() => setSelectedCategory("shoes")}
                className={`block w-full text-left text-sm ${selectedCategory === "shoes" ? "text-black font-medium" : "text-gray-600"} hover:text-gray-900 px-4 py-2`}
              >
                فانيلات
              </button>
              <button 
                onClick={() => setSelectedCategory("accessories")}
                className={`block w-full text-left text-sm ${selectedCategory === "accessories" ? "text-black font-medium" : "text-gray-600"} hover:text-gray-900 px-4 py-2`}
              >
                ملابس داخلية قطن
              </button>
              <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 px-4 py-2">عن المتجر</a>
            </div>
            <button 
              onClick={() => setSelectedCategory("all")}
              className={`hidden lg:block text-sm ${selectedCategory === "all" ? "text-black font-medium" : "text-gray-600"} hover:text-gray-900 px-4 py-2`}
            >
                جميع المنتجات
            </button>
            <button 
              onClick={() => setSelectedCategory("clothing")}
              className={`hidden lg:block text-sm ${selectedCategory === "clothing" ? "text-black font-medium" : "text-gray-600"} hover:text-gray-900 px-4 py-2`}
            >
              سويشرت
            </button>
            <button 
              onClick={() => setSelectedCategory("bags")}
              className={`hidden lg:block text-sm ${selectedCategory === "bags" ? "text-black font-medium" : "text-gray-600"} hover:text-gray-900 px-4 py-2`}
            >
              بنطلون
            </button>
            <button 
              onClick={() => setSelectedCategory("shoes")}
              className={`hidden lg:block text-sm ${selectedCategory === "shoes" ? "text-black font-medium" : "text-gray-600"} hover:text-gray-900 px-4 py-2`}
            >
              فانيلات 
            </button>
            <button 
              onClick={() => setSelectedCategory("accessories")}
              className={`hidden lg:block text-sm ${selectedCategory === "accessories" ? "text-black font-medium" : "text-gray-600"} hover:text-gray-900 px-4 py-2`}
            >
              ملابس داخلية قطن
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;