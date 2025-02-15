const product = {
  name: "Box",
  title: "Leader's Luxury",
  subtitle: "Crafted for the iconic",
  displayImage: "../assets/products/BOX.jpg",
  price: 1299,
  quantity: 10,
  about: {
    desc: `
                      <article>
                        Uamore fragrances embody the highest standards of
                        luxury:
                      </article>
                      <article>
                        <b>Premium Ingredients </b>- Sourced from the finest
                        global origins.
                      </article>
                      <article>
                        <b>Chemical-Free Formula </b>- Pure, refined, and
                        meticulously crafted.
                      </article>
                      <article>
                        <b>Dermatologically Tested </b>- Gentle yet long-lasting
                        on the skin.
                      </article>
                      <article>
                        <b>Hypoallergenic & Cruelty-Free </b>- Ethical luxury
                        without compromise.
                      </article>
                      <article>
                        <b>FDA Approved & Non-Toxic </b>- Safe, skin-friendly
                        indulgence.
                      </article>
                      <article>
                        <b>Non-Greasy, Non-Sticky </b>- A luxurious feel with an
                        immaculate finish.
                      </article>
                      <article>
                        <b>Handcrafted Excellence </b>- Every fragrance, an art
                        form.
                      </article>
                    `,
    ingredients: `
    <h5>ADMIRAL – Command. Conquer. Captivate.</h5>
    <h6>A scent for the modern leader—bold, refined, and unforgettable.</h6>
    <h6>First Impression (Top Notes):</h6>
    <ul>
        <li><strong>Invigorating Citrus</strong> – An electrifying first impression that commands attention.</li>
    </ul>
    <h6>The Heart (Middle Notes):</h6>
    <ul>
        <li><strong>Aromatic Lavender & Musky Warmth</strong> – A sophisticated blend exuding effortless confidence.</li>
    </ul>
    <h6>Lasting Presence (Base Notes):</h6>
    <ul>
        <li><strong>White Florals & Earthy Patchouli</strong> – A lingering depth, a signature of quiet power.</li>
    </ul>
    <h6><strong>Sillage:</strong> Strong, authoritative, and captivating.</h6>
    <h6><strong>Longevity:</strong> 10–12 hours of unwavering presence.</h6>
    <br>
    <br>
    <br>
    <h5>EXUDE – The Essence of Effortless Charisma</h5>
    <h6>Fresh. Invigorating. Addictive.</h6>
    <h6>First Impression (Top Notes):</h6>
    <ul>
        <li><strong>Citrus Zest & Oceanic Energy</strong> – A vibrant burst that captures unshakable confidence.</li>
    </ul>
    <h6>The Heart (Middle Notes):</h6>
    <ul>
        <li><strong>Spicy Warmth & Delicate Florals</strong> – A dynamic contrast creating magnetic allure.</li>
    </ul>
    <h6>Lasting Presence (Base Notes):</h6>
    <ul>
        <li><strong>Woody & Crisp Clean Notes</strong> – A refined, enduring trail.</li>
    </ul>
    <h6><strong>Sillage:</strong> Crisp, radiant, and undeniably fresh.</h6>
    <h6><strong>Longevity:</strong> 10–12 hours of invigorating energy.</h6>
    <br>
    <br>
    <br>
    <h5>REIGN – Power in Every Presence</h5>
    <h6>A fragrance that rules with quiet dominance.</h6>
    <h6>First Impression (Top Notes):</h6>
    <ul>
        <li><strong>Citrus & Warm Woods</strong> – Exuding effortless strength from the first spritz.</li>
    </ul>
    <h6>The Heart (Middle Notes):</h6>
    <ul>
        <li><strong>Fresh Spice & Aromatic Depth</strong> – A scent that evolves with the rhythm of the night.</li>
    </ul>
    <h6>Lasting Presence (Base Notes):</h6>
    <ul>
        <li><strong>Earthy Warmth & Deep Spice</strong> – Leaving behind an aura of sophistication and allure.</li>
    </ul>
    <h6><strong>Sillage:</strong> Potent, elegant, and impossible to ignore.</h6>
    <h6><strong>Longevity:</strong> 10–12 hours of commanding presence.</h6>
    <br>
    <br>
    <br>
    <h5>LEO – The Unmistakable Aura of Royalty</h5>
    <h6>Magnetic. Opulent. Regal.</h6>
    <h6>First Impression (Top Notes):</h6>
    <ul>
        <li><strong>Rose, Exotic Oud & Spicy Musk</strong> – An intoxicating combination of power and seduction.</li>
    </ul>
    <h6>The Heart (Middle Notes):</h6>
    <ul>
        <li><strong>Amber & Velvety Florals</strong> – An ode to timeless sophistication.</li>
    </ul>
    <h6>Lasting Presence (Base Notes):</h6>
    <ul>
        <li><strong>Leather & White Florals with a Metallic Edge</strong> – A signature as unforgettable as the man who wears it.</li>
    </ul>
    <h6><strong>Sillage:</strong> Intense, commanding, and irresistibly bold.</h6>
    <h6><strong>Longevity:</strong> 10–12 hours of pure luxury, from dusk till dawn.</h6>`,
    howToUse: `
    <article>
                        To enhance the longevity and sillage of your Uamore
                        fragrance:
                      </article>
                      <article>
                        Apply on Pulse Points – Lightly spray on your wrists,
                        neck, and behind your ears for the best diffusion.
                      </article>
                      <article>
                        Layer for Depth – Mist it onto your clothing and hair
                        for a more enduring scent.
                      </article>
                      <article>
                        Avoid Rubbing – Allow the fragrance to settle naturally
                        on your skin to keep its original composition intact.
                      </article>
                      <article>
                        Store with Care – Keep your fragrance in a cool, dry
                        area, away from direct sunlight, to maintain its
                        essence.
                      </article>`,
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
