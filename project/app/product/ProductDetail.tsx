import React from "react";
import { Product } from "@/app/data/products";
import { X } from "lucide-react";

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose }) => {
  const [quantity, setQuantity] = React.useState(1);

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12" style={{ direction: 'rtl' }}> 
    <X className="flex justify-start top-4 text-gray-600 hover:text-gray-900 transition-colors" style={{ fontSize: '1.5rem', position: 'absolute', left: '1rem' }} onClick={onClose} /> 
      <h1 className="  text-4xl font-bold mb-4 text-black text-right" style={{ direction: 'rtl' }}>{product.name }</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        <div className="relative">
          <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-lg" />
          <X className="absolute top-4 left-4 text-gray-600 hover:text-gray-900 transition-colors" style={{ fontSize: '1.5rem' }} onClick={onClose} /> 
        </div>
        <div>
          <p className="text-xl font-semibold text-gray-900 text-right">{product.price}</p>
          <div className="mt-4">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-800 text-center">الكمية</label>
            <div className="flex items-center mt-1 justify-center">
              <button onClick={decreaseQuantity} className="px-4 py-2 border border-gray-400 rounded-l-md bg-gray-200 hover:bg-gray-300">-</button>
              <span className="px-4 text-lg font-medium text-gray-800">{quantity}</span>
              <button onClick={increaseQuantity} className="px-4 py-2 border border-gray-400 rounded-r-md bg-gray-200 hover:bg-gray-300">+</button>
            </div>
            <p className="mt-1 text-lg font-semibold text-gray-600 text-right" style={{ direction: 'rtl' }}>
                        المقاسات المتاحة: <br />
                        {product.size?.join(' - ')}
            </p>    
            </div>
          <button
            onClick={() => (window.open(`https://wa.me/1224900205?text=السلام عليكم و رحمة الله و بركاته ، أود الاستفسار عن : ${product.name} و سعره: ${product.price}`, '_blank'))} // سطر جديد
            className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            اطلبه عبر الواتساب
          </button>
          <button  onClick={onClose} className=" mt-4 w-full text-gray-600 hover:text-gray-900 transition-colors">
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 