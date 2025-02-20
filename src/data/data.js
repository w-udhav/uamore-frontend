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
    image: "perfume1.jpg",
    author: "Kartik",
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
      `<br/>`,
      `<h4>2. Heart notes: The Unveiling of Character </h4>`,
      `The heart of a fragrance reveals itself slowly, just like a deeper conversation into the depths of the psyche. `,
      `<li>Lavender and musky blends embody subtle elegance and timeless beauty. </li>`,
      `<li>The floral heart of rose, jasmine, and neroli provides coup de grace with the twists of a mysterious air and aristocratic panache. </li>`,
      `<li>Spicy and aromatic blend brings a pompous and self-confident vibe that does not burn out. </li>`,
      `<br/>`,
      `<h4>3. Base notes: the Lasting Inner Impression </h4>`,
      `And as the bouquet mellows down, it leaves behind a signature that reveals its wearer. `,
      `<li>And as the bouquet mellows down, it leaves behind a signature that reveals its wearer. </li>`,
      `<li>Ayurette velvet-like fusion of amber, leather and woods renders forth confidence and legacy. </li>`,
      `<li>Powdered and metallic notes lend a modern twist to a classical refinement. </li>`,
      `An authentic signature perfume stays beyond the moment to imprint on one's mind. Uamore makes perfumes that do not just accompany you—they become you. `,
      `<br/>`,
      `<h3>Choosing Your Signature Scent – The Art of Self-Expression  </h3>`,
      `Fragrance is very personal; it is what defines who you are and how you would like to be perceived.`,
      `<h4>The Confident Leader- audacious, alluring, and commanding. </h3>`,
      `<li>With alluring notes of oud, spicy nuances, and a leathery depth, a magnetic presence unfolds.  </li>`,
      `<li>The walk is often accompanied by poise, with an aftertaste that lingers long enough to capture attention. </li>`,
      `<li>Uamore’s Leo embodies power and grandeur with a magnetic depth. </li>`,
      `<br/>`,
      `<h4>Agents of the Timeless Sophisticate-Refined, Elegant, and Understated.</h4>`,
      `<li>Woody, floral, and powdery notes come together in refining sophistication with restraint.</li>`,
      `<li>For palettes appreciative of a classic luxury with a contemporary twist.</li>`,
      `<li>Reserved for those whose power springs from an awareness of self-Uamore's Reign.</li>`,
      `<br/>`,
      `<h4>The Modern Visionary- zesty, vibrant, and offbeat.</h4>`,
      `<li>Marine, citrus, and aromatic notes remind us of the cross-express of freedom, zest, and creativity.</li>`,
      `<li>A scent crafted for those who embrace change, foster burning febrility, and sparkle with exuberance.</li>`,
      `<li>Uamore's Exude blends revitalization with soft elegance</li>`,
      `A signature scent is the finishing luxury that heralds you before you even step into the room. It is the mark of confidence, class, and identity that speaks in hushed tones. `,
      `<br/>`,
      `<h3>The Uamore Experience – Where Luxury Becomes a Legacy</h3>`,
      `At Uamore, scent is not just made; it's narrated. Each perfume tells an intricate story, spun with top-quality materials and consummately perfected. `,
      `<li>Premium Ingredients (B) - Sourced from the finest of the perfume capitals globally, blended for depth and longevity.</li>`,
      `<li>Timeless Craftsmanship - Join excellence and innovation for a scent that stays longer than a moment.</li>`,
      `<li>Sustainability & Ethics - Free from chemicals, cruelty, and designed for conscious luxury.</li>`,
      `<br/>`,
      `Sustainability & Ethics - Free from chemicals, cruelty, and designed for conscious luxury.`,
      `<br/>`,
      `Experience the luxury of art. Experience Uamore. `,
    ],
  },
  {
    id: 2,
    title:
      "Perfume Etiquette: How to Apply, Store & Layer Your Fragrance Right",
    image: "perfume2.jpg",
    author: "Kartik",
    content: [
      `A high-end perfume is the invisible jewel that leaves a trail around it forever after you pass. At Uamore, we think about a premium perfume not just as a scent, but also as an art expression, personality reflection, and a ceremonial attainment of elegance. Yet, despite one is as good as it gets in the perfume world, perfume application, storage, and layering might be the final factor that contributes to its fragrance potency after the scent is blended. `,
      `Here we will dive into perfume etiquette-the art of how to apply, how to store, and how to layer your perfume, all uniquely stylized to add to your scent's statement. `,
      `<br/>`,
      `<h3>How to Apply Perfume the Right Way</h3>`,
      `Applying perfume is an art. The way you wear it will reflect its longevity, projection, and overall effect. Here's how to apply:`,
      `<br/>`,
      `<h4>Put It on the Pulse Points</h4>`,
      `Your pulse points are where blood vessels come closest to the skin, thus warming your fragrance and allowing for the best diffusion.`,
      `<li>Wrists – The classic application place; do not rub them against each other, as even minor friction will destroy some of the fragrance molecules.</li>`,
      `<li>Neck and Collarbone – This provides subtle scent diffusion and works well during close encounters.</li>`,
      `<li>Behind the ears – Best for an intimate scent trail.</li>`,
      `<li>Inner elbows – Helps in extending the longevity of the fragrance.</li>`,
      `<li>Behind the knees – Especially effective in summer scents as temperature rises.</li>`,
      `<br/>`,
      `<h4>Spray; Don't Rub</h4>`,
      `One of the most rudimentary perfume mistakes involves rubbing wrists together after application. Friction breaks down the top notes and causes the fragrance not to develop as intended. Instead, spray and let the perfume merge naturally into the skin.`,
      `<br/>`,
      `<h4>Apply at the Right Distance</h4>`,
      `Hold the bottle about 5 to 7 inches away from your skin and spray lightly. Too close, and this will over-concentrate the perfume in one spot; too far away, and it can dissipate before settling.`,
      `<br/>`,
      `<h4>Do Not Spray on Clothing</h4>`,
      `While some may like putting perfume on clothing, it does not afford the scent proper development. Besides, some ingredients in perfumes may stain delicate fabrics.`,
      `<br/>`,
      `<h3>Perfume Storage: How to Protect Your Fragrance’s Integrity</h3>`,
      `A high-quality perfume is a delicate composition of oils, alcohol, and fragrance compounds that can be unstable unless stored properly. Here are some best practices to help maintain the integrity of your Uamore fragrance:`,
      `<br/>`,
      `<h4>Keep Away from Direct Sunlight</h4>`,
      `<li>Sunshine's penetrative rays will break down the chemical construct of perfume, altering its scent and longevity.</li>`,
      `<li>Store perfume in a dark area such as a drawer or a cabinet.</li>`,
      `<br/>`,
      `<h4>Store in a Stable Temperature</h4>`,
      `<li>Unstable temperatures (such as huge swings between hot and cold) may eventually cause components in perfumes to deteriorate.</li>`,
      `<li>Do not keep perfumes in bathrooms where steam combined with humidity may affect the perfume.</li>`,
      `<br/>`,
      `<h4>Always Store in the Original Bottle</h4>`,
      `<li>Perfume bottles are designed to maintain the fragrance. Moving a fragrance to some other container may introduce air, causing undesirable oxidation and degradation.</li>`,
      `<br/>`,
      `<h4>Keep the Bottle Airtight</h4>`,
      `<li>Always make sure you close the cap tightly after using it so that you do not expose it to extra air and evaporation unnecessarily.</li>`,
      `<br/>`,
      `<h3>Mastering the Art of Fragrance Layering</h3>`,
      `Layering is a technique that allows you to develop a scent profile that expresses your individuality. At Uamore, we create our perfumes so well that they make a great base for layering.`,
      `<br/>`,
      `<h4>Teasing the Notes of Fragrance for Layering</h4>`,
      `To achieve proper layering, you must first understand how fragrance families work together.`,
      `<li>Citrus & Woody – Light and fresh top with deep, grounded base.</li>`,
      `<li>Floral & Spicy – A mix of daintiness and warmth to give a modern touch.</li>`,
      `<li>Oud & Musky – A luxurious, exotic pairing to leave an impression.</li>`,
      `<br/>`,
      `<h4>The Correct Way of Layering Perfumes</h4>`,
      `<li>The base note should be light (citrus or fresh floral).</li>`,
      `<li>Layer with a deeper, richer fragrance on top (oud, woody, or musky notes).</li>`,
      `<li>Allow each layer to dry before adding another layer, or you will drown the other fragrance.</li>`,
      `<br/>`,
      `<h4>Rule of Two</h4>`,
      `<li>Avoid pairing together an excessive scheme of fragrances.</li>`,
      `<li>Choose a combination of fragrances that harmoniously blend with one another.</li>`,
      `<br/>`,
      `<h4>Maximizing Scent Longevity through Layering</h4>`,
      `<li>Slather on a scented body lotion before applying perfume.</li>`,
      `<li>Add a fragrance mist or body oil with a similar composition.</li>`,
      `<li>Spray the main perfume on pulse points.</li>`,
      `<br/>`,
      `<h3>How to Wear Perfumes Appropriately for Different Events</h3>`,
      `Just like dressing up for an occasion, using the correct perfume to stand out is essential.`,
      `<br/>`,
      `<h4>Daytime/Work</h4>`,
      `<li>Wear light and airy aromas or fragrances with fresh or citrus notes.</li>`,
      `<br/>`,
      `<h4>Nighttime/Formal Events</h4>`,
      `<li>Wear warm, spicy, or woody fragrances for depth and a sophisticated aura.</li>`,
      `<br/>`,
      `<h4>Date & Cozy</h4>`,
      `<li>Opt for sensual and magnetic scents that enhance your appeal.</li>`,
      `<br/>`,
      `<h3>A Finale Touch: Common Perfume Mistakes</h3>`,
      `To ensure a perfect fragrance experience, avoid these typical mistakes:`,
      `<li>Over-application – Less is more; too much strong perfume can be overwhelming.</li>`,
      `<li>Mixing too many scents – Keep layering simple, ideally with just two fragrances.</li>`,
      `<li>Applying on dry skin – Moisturizing first will enhance longevity.</li>`,
      `<li>Ignoring fragrance evolution – Understand how your perfume develops over time.</li>`,
      `<br/>`,
      `Fragrance is an essential part of personal expression. When worn correctly, it adds an inexplicable glamour to your presence. Uamore encourages indulging in the high art of perfumery—applying, storing, and layering scents like a true professional. Whether for an invigorating day or a bold evening aura, mastering perfume etiquette elevates luxury to a whole new level.`,
      `<br/>`,
      `<h3>Find Your Signature Perfume with Uamore</h3>`,
      `Immerse yourself in the splendid world of perfume: elegantly formulated with the scent accords of timelessness. ✨`,
      `<br/>`,
      `______________________________________________`,
      `<br/>`,
      `<h4>FAQs Regarding Signature Scents & Luxury Perfumes</h4>`,
      `<h5>How do I extend the longevity of my signature scent?</h5>`,
      `<b>Apply perfume to pulse points such as wrists, neck, and behind the ears. For longer-lasting longevity, layer with a matching scented oil or lotion.</b>`,
      `<br/>`,
      `<h5>What makes a fragrance "luxury"?</h5>`,
      `<b>Perfumes such as those of Uamore employ high-quality, responsibly sourced materials and are subjected to rigorous craftsmanship for depth, longevity, and sophistication.</b>`,
      `<br/>`,
      `<h5>Can I use one perfume daily?</h5>`,
      `<b>You bet! A signature scent is to be your calling card. Choose versatile fragrances such as Exude for daytime and Leo or Reign for evening sophistication.</b>`,
      `<br/>`,
      `<h5>How do I store my perfume to preserve its quality?</h5>`,
      `<b>Store your perfume in the dark, in a cool location, without direct sunlight and humidity. Storing it in its original container ensures preservation.</b>`,
      `<br/>`,
      `<h5>What is the best fragrance for a confident, authoritative presence?</h5>`,
      `<b>For bold sophistication, Admiral and Reign by Uamore are the ideal choices, providing a strong aura with long-lasting sillage.</b>`,
      `<br/>`,
      `<h3>How to Apply Perfume the Right Way</h3>`,
      `Applying perfume is an art. The way you wear it will reflect its longevity, projection, and overall effect. Here's how to apply:`,
      `<br/>`,
      `<h4>Put It on the Pulse Points</h4>`,
      `Your pulse points are where blood vessels come closest to the skin, thus warming your fragrance and allowing for the best diffusion.`,
      `<li>Wrists – The classic application place; do not rub them against each other, as even minor friction will destroy some of the fragrance molecules.</li>`,
      `<li>Neck and Collarbone – This provides subtle scent diffusion and works well during close encounters.</li>`,
      `<li>Behind the ears – Best for an intimate scent trail.</li>`,
      `<li>Inner elbows – Helps in extending the longevity of the fragrance.</li>`,
      `<li>Behind the knees – Especially effective in summer scents as temperature rises.</li>`,
      `<br/>`,
      `<h4>Spray; Don't Rub</h4>`,
      `One of the most rudimentary perfume mistakes involves rubbing wrists together after application. Friction breaks down the top notes and causes the fragrance not to develop as intended. Instead, spray and let the perfume merge naturally into the skin.`,
      `<br/>`,
      `<h4>Apply at the Right Distance</h4>`,
      `Hold the bottle about 5 to 7 inches away from your skin and spray lightly. Too close, and this will over-concentrate the perfume in one spot; too far away, and it can dissipate before settling.`,
      `<br/>`,
      `<h4>Do Not Spray on Clothing</h4>`,
      `While some may like putting perfume on clothing, it does not afford the scent proper development. Besides, some ingredients in perfumes may stain delicate fabrics.`,
      `<br/>`,
      `<h3>Perfume Storage: How to Protect Your Fragrance’s Integrity</h3>`,
      `A high-quality perfume is a delicate composition of oils, alcohol, and fragrance compounds that can be unstable unless stored properly. Here are some best practices to help maintain the integrity of your Uamore fragrance:`,
      `<br/>`,
      `<h4>Keep Away from Direct Sunlight</h4>`,
      `<li>Sunshine's penetrative rays will break down the chemical construct of perfume, altering its scent and longevity.</li>`,
      `<li>Store perfume in a dark area such as a drawer or a cabinet.</li>`,
      `<br/>`,
      `<h4>Store in a Stable Temperature</h4>`,
      `<li>Unstable temperatures (such as huge swings between hot and cold) may eventually cause components in perfumes to deteriorate.</li>`,
      `<li>Do not keep perfumes in bathrooms where steam combined with humidity may affect the perfume.</li>`,
      `<br/>`,
      `<h4>Always Store in the Original Bottle</h4>`,
      `<li>Perfume bottles are designed to maintain the fragrance. Moving a fragrance to some other container may introduce air, causing undesirable oxidation and degradation.</li>`,
      `<br/>`,
      `<h4>Keep the Bottle Airtight</h4>`,
      `<li>Always make sure you close the cap tightly after using it so that you do not expose it to extra air and evaporation unnecessarily.</li>`,
      `<br/>`,
    ],
  },
  {
    id: 3,
    title: "House of UAmore",
    image: "",
    author: "Kartik",
    content: [
      `A luxury perfume is not just a high-end scent; it is a statement; a lingering impression that speaks before words do. At UAmore, every premium fragrance is designed to embody elegance, evoke deep emotions, and leave an unforgettable mark. Rooted in India's rich high-end perfumery heritage and elevated by cutting-edge techniques, each Uamore fragrance is the epitome of opulence, passion, and refinement. `,
      `<br/>`,
      `<h3>The Vision: The Renaissance of Luxury in India</h3>`,
      `Luxury has been identified with rarity, quality, and a good story. UAmore encapsulates these principles by infusing India’s premium olfactory culture into the modern world. Our goal is clear: to make India the new leader in luxury, creating fragrances that can compete with the best in the world and showcasing the best of our country.`,
      `<br/>`,
      `We establish the link between the traditional and the new, preserving the ancient high-end Indian perfumery traditions techniques of Indian royalty while integrating state-of-the-art innovations. Every UAmore creation is a testament to India’s premium ability to craft long-lasting fragrances for men and women that captivate, empower, and define the extraordinary.`,
      `<br/>`,
      `<h3>The Journey: A Vision for Global Luxury Perfumes</h3>`,
      `UAmore arose out of a singular question- why should luxury always come from outside India? World-class perfumes have always been the domain of European brands; however, India possesses one of the richest traditions in premium fragrance-making. From the lush fields of Kannauj, known as India's Grasse, to the sacred art of attar-making, our land has always been a treasure trove of exquisite luxury scents. `,
      `<br/>`,
      `With the drive to break conventions, we had envisioned a global Indian brand that spoke to the connoisseurs of high-end perfumery. UAmore is more than a brand, it is a cause-more a return to the domain of exclusivity, luxury and craftsmanship.`,
      `<br/>`,
      `<h3>The Craft: High-end Perfumery as an Art Form</h3>`,
      `The Devil’s in the details: precise craftsmanship, rare high-end ingredients, and the ability to create a perfect mix. All UAmore fragrances are created from the finest ingredients sourced with precision and blended to perfection.`,
      `<br/>`,
      `<h4><b>Inspired by Emotion</b></h4>`,
      `Each scent is a story, evoking emotions that linger long after the first spritz. Whether it’s the confident scent of Admiral, the refreshing scent of Exude, the bold sophistication of Reign, or the royal depth of Leo, each scent is meant to stay with you.`,
      `<br/>`,
      `<h4><b>Combined with Mastery</b></h4>`,
      `Our perfumers develop the traditional approach to creating fragrances paired with the latest technological approaches to produce scents that develop wonderfully on the skin.`,
      `<br/>`,
      `<h4><b>Longevity & Sillage</b></h4>`,
      `UAmore perfumes are not fast; they are declarations, lasting 10-12 hours with a strong presence.`,
      `<br/>`,
      `<h3>The Bottle: A Statement of Luxury and Elegance</h3>`,
      `A premium perfume bottle for collectors should be as beautiful, long-lasting, and luxurious as the fragrance it holds. The signature flacons of UAmore are created with the perfect blend of style and sophistication in mind:`,
      `<li>Premium weight and presence – Made from top-quality glass to be displayed on shelves.</li>`,
      `<li>A touch of understated luxury – Silver foiling and a minimalist cap that gives a modern sophisticated touch.</li>`,
      `<li>The Unboxing Experience – Packed in a sleek black carton with silver detailing, it’s the buildup to the indulgence within.</li>`,
      `<br/>`,
      `<h3>Heritage Meets Innovation: A New Era of Luxury Perfumery</h3>`,
      `At UAmore, we continue the legacy of India’s centuries-old fragrance tradition while incorporating the science of modern perfumery.`,
      `<br/>`,
      `<h4><b>Rare Ingredients, Reimagined</b></h4>`,
      `We procure India’s most valuable natural resources—including pure oud, luxury jasmine-infused fragrances, sandalwood-based perfumes, and saffron—and blend them with avant-garde formulations to create something truly timeless.`,
      `<br/>`,
      `<h4><b>Global Appeal, Indian Soul</b></h4>`,
      `Inspired by India’s legacy, our fragrances are created for the world, rivaling the best high-end niche perfume brands in terms of complexity, refinement, and prestige.`,
      `<br/>`,
      `<h3>Sustainability: Luxury without Compromise</h3>`,
      `Real indulgence should be responsible, sustainable, and empowering. UAmore’s eco-friendly luxury perfumes stand for responsible luxury, ensuring that every drop is guilt-free while maintaining the highest standards of craftsmanship.`,
      `<li>Recyclable Glass Bottles – Designed for longevity and sustainability.</li>`,
      `<li>Minimal Plastic Use – Eco-conscious packaging without compromising elegance.</li>`,
      `<li>Ethical Ingredient Sourcing – Partnering with sustainable farms for cruelty-free, responsibly harvested materials.</li>`,
      `<br/>`,
      `<h3>Future of UAmore</h3>`,
      `Luxury evolves, and so does UAmore. Our journey doesn’t stop at individual scents but extends to a world of experiences redefining fine artisanal perfumery.`,
      `<li>Personalized Fragrance Blending – Custom luxury perfumes tailored to your personality.</li>`,
      `<li>Limited Edition Collections – Rare, high-end artistic series for true connoisseurs.</li>`,
      `<li>Gift & Customize – Handcrafted bottles, premium gift boxes, and bespoke sets.</li>`,
      `<br/>`,
      `<h3>Welcome to the House of UAmore</h3>`,
      `Beyond the fragrance, UAmore is a movement—an embodiment of sophisticated niche perfumery, artistry, and personal freedom. Each perfume is an invitation to indulge in the extraordinary, to wear elegance, and to leave a lasting signature scent that captivates.`,
    ],
  },
];

export { product, blogs };
