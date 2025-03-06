export interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  colors: string[];
  sizes?: string[];
  details: string[];
  size?: [string];
}

export const products = {
    clothing: [
      {
        id: 1,
        name: "سويشرت",
        price: "     450   جنيه",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkjY828EVXlopFBFZuz1QXHrnv7-x6Nq0hY-hlghN6FkoRgS55xsQquh8JYk9UZAUIVtU&usqp=CAU",
        colors: ["red", "blue"],
        details: ["100% cotton", "Machine washable"],
        size: ["S", "M", "L", "XL"],
      },
      {
        id: 2,
        name: "سويشرت",
        price: "     430   جنيه",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmdXOFIGYSgxYc78MTbqmV_VfacclWz-SBKcBpWJFRDWn-sk_7ABgysSEGl_iATVz6Pf8&usqp=CAU",
        colors: ["gray", "black"],
        description: "Luxurious knit vest with a contemporary design. Perfect for layering in any season.",
        sizes: ["XS", "S", "M", "L", "XL"],
        details: [
          "100% Premium Wool",
          "Ribbed V-neckline",
          "Relaxed fit",
          "Dry clean only"
        ],
        size: ["S", "M", "L", "XL"]
      },
      {
        id: 3,
        name: "سويشرت",
          price: "   جنيه 630",
        image: "https://images.unsplash.com/photo-1551799517-eb8f03cb5e6a?w=500&q=80",
        colors: ["black"],
        description: "Elegant blouse with delicate details. A versatile piece for your wardrobe.",
        sizes: ["XS", "S", "M", "L"],
        details: [
          "100% Silk",
          "Button closure",
          "Regular fit",
          "Hand wash cold"
        ],
        size: ["S", "M", "L", "XL"]
      },
      {
        id: 4,
        name: "سويشرت",
        price: "     670   جنيه",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_SIXS15qHTZwT_E9HUP9Au4hv8NIO13MEQ&s",
        colors: ["gray"],
        description: "Stylish knit sweater with fringe details. Perfect for a cozy yet fashionable look.",
        sizes: ["S", "M", "L"],
        details: [
          "Wool blend",
          "Fringe detail",
          "Oversized fit",
          "Dry clean recommended"
        ],
        size: ["S", "M", "L", "XL"]
      },
      {
        id: 5,
        name: "سويشرت",
        price: "     420   جنيه",
        image: "https://cdn.salla.sa/qQKeoY/15551f94-f4e0-4ead-91e7-44514c8b6cf5-1000x1000-WqZETsiSZp2JeiiFTfMEGcRubHb79a4pDyB1RRvH.jpg",
        colors: ["blue"],
        description: "Elegant dress with modern silhouette. Perfect for special occasions.",
        sizes: ["XS", "S", "M", "L"],
        details: [
          "Premium fabric blend",
          "Hidden zip closure",
          "Lined",
          "Dry clean only"
        ],
        size: ["S", "M", "L", "XL"]
      },
      {
        id: 6,
        name: "سويشرت",
        price: "     580   جنيه",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC0BLFABDxbsrcZ5PXVEwAFC8mhgFWQ6kIyA&s",
        colors: ["beige"],
        description: "Classic tweed jacket with modern details. A timeless addition to your wardrobe.",
        sizes: ["XS", "S", "M", "L", "XL"],
        details: [
          "Cotton-wool blend",
          "Front button closure",
          "Multiple pockets",
          "Dry clean only"
        ],
        size: ["S", "M", "L", "XL"]
      }
    ],
    bags: [
      {
        id: 7,
        name: "بنطلون",
        price: "     300   جنيه",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPxOKIhpPhcEzqor5XUGEMgxU_XlMYRr4IqIRnEaqPS8PuBWAeawKJJ6FnvzbTqfI0sk&usqp=CAU",
        colors: ["black", "brown"],
        description: "Spacious leather tote perfect for daily use. Features premium materials and craftsmanship.",
        details: [
          "Genuine leather",
          "Cotton lining",
          "Interior zip pocket",
          "Magnetic closure"
        ],
        size: ["S", "M", "L", "XL"]
      },
      {
        id: 8,
        name: "بنطلون",
        price: "     350   جنيه",
        image: "https://m.media-amazon.com/images/I/511ml-aWYaL._AC_SL1500_.jpg",
        colors: ["beige"],
        description: "Compact crossbody bag perfect for essentials. Elegant and practical design.",
        details: [
          "Premium leather",
          "Adjustable strap",
          "Multiple compartments",
          "Zip closure"
        ],
        size: ["S", "M", "L", "XL"]
      },
      {
        id: 9,
        name: "بنطلون",
        price: "     350   جنيه",
        image: "https://m.media-amazon.com/images/I/41qaOrvoR4L._AC_SY350_.jpg",
        colors: ["black", "navy"],
        description: "Modern bucket bag with structured design. Perfect blend of style and functionality.",
        details: [
          "Smooth leather",
          "Drawstring closure",
          "Interior pockets",
          "Protective feet"
        ],
        size: ["S", "M", "L", "XL"]
      },
      {
        id: 10,
        name: "بنطلون",
        price: "     370   جنيه",
        image: "https://api.cezma.cloud/storage/thumbnails/products/web/1719406456tsmym-bdon-aanoan-20240626-155331-0000.png",
        colors: ["natural"],
        description: "Artisanal woven bag with leather details. Perfect for casual outings.",
        details: [
          "Woven straw",
          "Leather trim",
          "Cotton lining",
          "Magnetic snap"
        ],
        size: ["S", "M", "L", "XL"]
      }
    ],
    shoes: [
      {
        id: 11,
        name: "فانلة قطن ",
        price: "     120   جنيه",
        image: "https://www.raneen.com/media/catalog/product/1/1/1136_vgvllg53z29gztnn.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=1000&width=1000&canvas=1000:1000",
        colors: ["black", "brown"],
        description: "Timeless loafers crafted from premium leather. Perfect for any occasion.",
        sizes: ["35", "36", "37", "38", "39", "40"],
        details: [
          "Calfskin leather",
          "Leather sole",
          "Padded insole",
          "Made in Italy"
        ],
        size: ["S", "M", "L", "XL"]
      },
      {
        id: 12,
        name: "فانلة قطن ",
        price: "     120   جنيه",
        image: "https://images-eu.ssl-images-amazon.com/images/I/319HpbkeJfL._AC_SR462,693_.jpg",
        colors: ["black"],
        description: "Sophisticated ankle boots with modern design. Perfect for day to night wear.",
        sizes: ["35", "36", "37", "38", "39", "40"],
        details: [
          "Premium leather",
          "Side zip closure",
          "Stacked heel",
          "Leather lined"
        ],
        size: ["S", "M", "L", "XL"]
      },
      {
        id: 13,
        name: "فانلة قطن ",
        price: "   جنيه  150",
        image: "https://m.media-amazon.com/images/I/31iGwmpq6mL._AC_SY580_.jpg",
        colors: ["beige", "black"],
        description: "Classic ballet flats with modern comfort features. Perfect for everyday wear.",
        sizes: ["35", "36", "37", "38", "39", "40"],
        details: [
          "Soft leather",
          "Cushioned insole",
          "Flexible sole",
          "Made in Italy"
        ],
        size: ["S", "M", "L", "XL"]
      },
      {
        id: 14,
        name: "فانلة قطن ",
        price: "     150   جنيه",
        image: "https://m.media-amazon.com/images/I/31H-KWZD+ZL._AC_SY580_.jpg",
        colors: ["tan", "black"],
        description: "Minimalist leather sandals perfect for warm weather. Comfortable and stylish.",
        sizes: ["35", "36", "37", "38", "39", "40"],
        details: [
          "Genuine leather",
          "Adjustable straps",
          "Rubber sole",
          "Anatomical footbed"
        ],
        size: ["S", "M", "L", "XL"]
      }
    ],
    accessories: [
      {
        id: 15,
        name: "بوكسر قطن",
        price: "     80   جنيه",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Dc6tFfDSmZ8YM2CYaI92Daor9qSzyzCxvw5CNyF-uksVzx93z_MUAsqDXwWs4G0UWoI&usqp=CAU",
        colors: ["pearl"],
        description: "Elegant pearl necklace with modern design. Perfect for special occasions.",
        details: [
          "Freshwater pearls",
          "Sterling silver clasp",
          "Adjustable length",
          "Gift box included"
        ],
        size: ["S", "M", "L", "XL"]
      },
      {
        id: 16,
        name: "بوكسر قطن",
        price: "     80   جنيه",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSvHiMHo2IciNNGxMp4wy_5EFKU79PvJCxWUTu3o25UboBSKsTZdqJtCvTZELIsrLMxvw&usqp=CAU",
        colors: ["black", "brown"],
        description: "Classic leather belt with timeless design. Perfect for everyday wear.",
        details: [
          "Full-grain leather",
          "Brass buckle",
          "Hand-stitched",
          "Made in Japan"
        ],
        size: ["S", "M", "L", "XL"]
      },
      {
        id: 17,
        name: "بوكسر قطن",
        price: "     80   جنيه",
        image: "https://mihyar.com/media/catalog/product/cache/147723b50cdce8520bd498b19f48aa62/3/2/322543148_1.jpg",
        colors: ["multicolor"],
        description: "Luxurious silk scarf with artistic print. Versatile accessory for any outfit.",
        details: [
          "100% silk",
          "Hand-rolled edges",
          "Original print",
          "Made in Italy"
        ],
        size: ["S", "M", "L", "XL"]
      },
      {
        id: 18,
        name: "بوكسر قطن",
        price: "     80   جنيه",
        image: "https://mihyar.com/media/catalog/product/cache/147723b50cdce8520bd498b19f48aa62/2/1/215415303_1.jpg",
        colors: ["gold"],
        description: "Delicate gold earrings with modern design. Perfect for everyday elegance.",
        details: [
          "18k gold plated",
          "Nickel-free",
          "Butterfly closure",
          "Gift box included"
          ],
        size: ["S", "M"]
      }
    ]
  };