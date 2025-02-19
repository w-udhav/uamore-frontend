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
                      <br/>
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
    title:
      "The Art of Luxury Perfumery: How a Signature Scent Defines Your Personality and Style ",
    image: "../assets/singleProduct/image1.jpg",
    content: [
      `Luxury is not just about what you wear; it is that which lingers long after you are gone. The delicate stroke of silk around your skin, the sheen of the snugly-fitted suit, the quiet authority of a meticulously engineered timepiece—each of these elements defines sophistication. But the truest luxury is invisible. It is the lingering trail of a luxury perfume bottle with exquisite craftsmanship, an olfactory signature that tells your story without words. `,
      `At Uamore, we believe that scent isn't merely the updated version of luxury; it is a revelation about your existence. The right scent doesn't merely follow your capacities-it brands it, indelible by years. Luxury fragrances are not merely accessories; they are statements, crafted for those who understand the power of refinement and distinction. `,
      `<br/>`,
      `<h3>The Science of First Impressions </h3>`,
      `A signature scent is more than just a fragrance—it is an invisible signature, an essence that leaves your mark. The right luxury signature fragrance is the first thing people notice about you and the last thing they remember. It's part of you, leaving a lasting impression wherever you are. `,
      `<li>Instant Recognition - Scent is directly processed by the brain's limbic system, which is at the heart of memory and emotion, making it one of the strongest triggers of recall. This is why certain fragrances instantly transport you to a specific moment, place, or person. Studies from <a href="https://hms.harvard.edu/">Harvard Medical School</a> confirm that scent is one of the strongest memory triggers. </li>`,
      `<li>Emotional Impact - Choosing the right scent is not a matter of taste. It creates an aura of confidence, allure, and sophistication, and can impact the way others perceive you.</li>`,
      `<li>The Unseen Mark - Unlike clothing or accessories, which are visible and often forgotten, scent is invisible yet unforgettable. A well-crafted fragrance, like those by Uamore, remains long after you leave the room. </li>`,
      `Your scent is a silent introduction and a lingering farewell. It's an unspoken signature where essence is in a breath. `,
      `<br/>`,
      `<h3>A Symphony of Luxury - The Art of a Signature Scent </h3>`,
      `Luxury fragrance is a composition; a masterwork of orthology done with intention, precision, and great art. Uamore’s luxury perfumes redefine elegance, capturing the essence of sophistication in every note. `,
      `<h4>1. Top Notes: The Introduction</h4>`,
      `The first feature on a perfume is the elegant entrance-a love potion cast into a rich leathery base. `,
      `<li>The bright citrus zest brings life and is fresh, charismatic, and energetic. </li>`,
      `<li>A whisper of marine accords embodies crisp sophistication and an airy confidence. </li>`,
      `<li>Spicy warmth immediately indicates depth, intrigue, and an edge of refinement. </li>`,
      `<h4>2. Heart notes: The Unveiling of Character </h4>`,
      `The heart of a fragrance reveals itself slowly, just like a deeper conversation into the depths of the psyche. `,
      `<li>Lavender and musky blends embody subtle elegance and timeless beauty. </li>`,
      `<li>The floral heart of rose, jasmine, and neroli provides coup de grace with the twists of a mysterious air and aristocratic panache. </li>`,
      `<li>Spicy and aromatic blend brings a pompous and self-confident vibe that does not burn out. </li>`,
      `<h4>3. Base notes: the Lasting Inner Impression </h4>`,
      `And as the bouquet mellows down, it leaves behind a signature that reveals its wearer. `,
      `<li>And as the bouquet mellows down, it leaves behind a signature that reveals its wearer. </li>`,
      `<li>Ayurette velvet-like fusion of amber, leather and woods renders forth confidence and legacy. </li>`,
      `<li>Powdered and metallic notes lend a modern twist to a classical refinement. </li>`,
      `An authentic signature perfume stays beyond the moment to imprint on one's mind. Uamore makes perfumes that do not just accompany you—they become you. `,
      `<h3>Choosing Your Signature Scent – The Art of Self-Expression  </h3>`,
      `Fragrance is very personal; it is what defines who you are and how you would like to be perceived.`,
      `<h4>The Confident Leader- audacious, alluring, and commanding. </h3>`,
      `<li>With alluring notes of oud, spicy nuances, and a leathery depth, a magnetic presence unfolds.  </li>`,
      `<li>The walk is often accompanied by poise, with an aftertaste that lingers long enough to capture attention. </li>`,
      `<li>Uamore’s Leo embodies power and grandeur with a magnetic depth. </li>`,
    ],
    timestamp: "12-02-2025",
  },
];

export { product, blogs };
