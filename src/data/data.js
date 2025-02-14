const product = {
  name: "Box",
  title: "Leader's Luxury",
  subtitle: "Crafted for the iconic",
  displayImage: "../assets/products/BOX.jpg",
  price: 1299,
  about: {
    desc: "",
    ingredients: "",
    howToUse: "",
  },
  images: [
    "../assets/singleProduct/image1.jpg",
    "../assets/singleProduct/image2.jpg",
    "../assets/singleProduct/image3.jpg",
    "../assets/singleProduct/main.jpg",
  ],
};

const blogs = [
  {
    id: 1,
    title: "The Art of Perfumery",
    image: "../assets/singleProduct/image1.jpg",
    content: [
      `<a href='/products'>Perfumery</a> is an art that has been practiced for centuries. It is the art of creating fragrances that are designed to evoke emotions and memories. Perfumery is a complex and intricate art that requires skill, creativity, and patience. Perfumers use a variety of ingredients to create fragrances that are unique and captivating. The art of perfumery has a long and rich history that dates back to ancient times. Perfumery has been practiced in many cultures and has been an important part of human history. Perfumery is an art that is still practiced today and continues to evolve and grow.`,
    ],
    timestamp: "12-02-2025",
  },
];

export { product, blogs };
