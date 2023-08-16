import macbook1 from "../assets/images/macair-m1.webp";
import macbook2 from "../assets/images/mac.webp";
import macbook3 from "../assets/images/mini.webp";
import ipad1 from "../assets/images/ipadair.webp";
import ipad2 from "../assets/images/ipadpro-12.webp";
import ipad3 from "../assets/images/ipadpro-11.webp";
import watch1 from "../assets/images/serielblack.webp";
import watch2 from "../assets/images/purple.webp";
import watch3 from "../assets/images/watch1.webp";
const NEW_PRODUCT_DUMMY = [
  {
    id: '1',
    category: "macbook",
    items: [
      {
        id: '1',
        title: 'MacBook Pro 16 inch',
        thumbnail: macbook1,
        price: 1999
      },
      {
        id: '2',
        title: 'MacBook Pro 13 inch with M1',
        thumbnail: macbook2,
        price: 1200
      },
      {
        id: '3',
        title: 'MacBook Air with M1',
        thumbnail: macbook3,
        price: 1999
      },
    ]
  },
  {
    id: '2',
    category: "ipad",
    items: [
      {
        id: '1',
        title: 'iPhone 13 Pro',
        thumbnail: ipad1,
        price: 1200
      },
      {
        id: '2',
        title: 'iPhone 12 Pro',
        thumbnail: ipad2,
        price: 1200
      },
      {
        id: '3',
        title: 'iPhone 13 mini',
        thumbnail: ipad3,
        price: 1200
      },
    ]
  },
  {
    id: '3',
    category: "watch",
    items: [
      {
        id: '1',
        title: 'iPhone 13 Pro',
        thumbnail: watch1,
        price: 1200
      },
      {
        id: '2',
        title: 'iPhone 12 Pro',
        thumbnail: watch2,
        price: 1200
      },
      {
        id: '3',
        title: 'iPhone 13 mini',
        thumbnail: watch3,
        price: 1200
      },
    ]
  }
]

export default NEW_PRODUCT_DUMMY;