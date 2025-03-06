"use client";

import { ShoppingBag, Search, Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Product, products } from "@/app/data/products";
import Navbar from "./navbar/Navbar";
import { useRouter } from "next/navigation";
import ProductDetail from "./product/ProductDetail";
import Footer from "./footer/Footer";

export default function Home() {
  const [cartCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showDetail, setShowDetail] = useState(false);
  const router = useRouter();

  const getFilteredProducts = () => {
    if (selectedCategory === "all") {
      return Object.values(products).flat();
    }
    return products[selectedCategory as keyof typeof products] || [];
  };

  const filteredProducts = getFilteredProducts();

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setShowDetail(true);
  };

  return (
    <div className="min-h-screen bg-white" style={{ direction: 'rtl' }}>
      <Navbar setSelectedCategory={setSelectedCategory} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {showDetail && selectedProduct ? (
          <ProductDetail product={selectedProduct} onClose={() => setShowDetail(false)} />
        ) : (
          <>
            <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
              {selectedCategory === "all" ? "جميع المنتجات" : selectedCategory === "clothing" ? "سويشرتات" : selectedCategory === "bags" ? "بنطلونات" : selectedCategory === "shoes" ? "فانيلات" : selectedCategory === "accessories" ? "ملابس داخلية قطنية" : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group cursor-pointer transition-transform transform hover:scale-105" onClick={() => handleProductClick(product as Product)}>
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 shadow-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover object-center group-hover:opacity-80 transition-opacity"
                    />
                    <div className="absolute bottom-2 left-2 flex gap-1">
                      {product.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-4 h-4 rounded-full border border-white"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-md font-medium text-gray-800" style={{ direction: 'rtl' }}>{product.name}</h3>
                      <p className="mt-1 text-lg font-semibold text-gray-600 text-right" style={{ direction: 'rtl' }}>{product.price}</p>
                      <p className="mt-1 text-lg font-semibold text-gray-600 text-right" style={{ direction: 'rtl' }}>
                        المقاسات المتاحة: <br />
                        {product.size?.join(' - ')}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

