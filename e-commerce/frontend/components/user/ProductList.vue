<template>
  <nav>
    <router-link to="/userview">Home for User</router-link> |
    <router-link to="/userview/mycard">MyCard</router-link> |
    <router-link to="/userview/productlist">ProductList</router-link> |
    <router-link to="/userview/userprofile">UserProfile</router-link> |
    <a @click="logout">Logout</a>
  </nav>
  <div>
    <h2>Product List</h2>
    <div class="product-list">
      <ProductItem v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import ProductItem from "@/components/user/ProductItem.vue";
import { useRouter } from 'vue-router';

export default {
  name: "ProductList",
  components: {
    ProductItem,
  },
  setup() {
    const router = useRouter();

    const logout = () => {
      router.push("/");
    };

    return { logout };
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Beginner's Guide to Digital Painting in Procreate: Characters",
          price: "$33.00",
          image: "https://store.3dtotal.com/cdn/shop/products/9781912843350_FC.jpg?v=1631700742&width=1100",
          author: "Publishing 3dtotal",
          releaseDate: "14/08/2021",
          pages: 33,
          isbn: "978-1-912843-35-0",
          description: "Bring characters to life on your iPad with creativity and ease, using Procreate to conceptualize, sketch, and paint directly onto the screen...",
        },
        {
          id: 2,
          name: "The Art Journey of Lord Gris",
          price: "$38.00",
          image: "https://store.3dtotal.com/cdn/shop/products/TAJLG_BOOKPLATE.png?v=1680170221",
          author: "Lord Gris",
          releaseDate: "15/11/2022",
          pages: 38,
          isbn: "978-1-912843-53-4",
          description: "The Art Journey of Lord Gris is brimming with creative inspiration and professional advice from this highly successful artist...",
        },
        {
          id: 3,
          name: "The Art of Simz",
          price: "$38.00",
          image: "https://store.3dtotal.com/cdn/shop/products/978-1-912843-72-5.jpg?v=1675331867&width=1100",
          author: "Simz",
          releaseDate: "12/09/2023",
          pages: 38,
          isbn: "978-1-912843-72-5",
          description: "In this beautiful hardback book, discover the enchanting world of Simone Simz Ferriero, an Italian artist who creates compelling images...",
        },
        {
          id: 4,
          name: "The Art of Sam Yang",
          price: "$38.00",
          image: "https://store.3dtotal.com/cdn/shop/files/978-1-912843-68-8_SMALLER.jpg?v=1700471003",
          author: "Sam Yang",
          releaseDate: "11/06/2024",
          pages: 38,
          isbn: "978-1-912843-68-8",
          description: "The Art of Sam Yang is the debut art book from the popular digital illustrator, showcasing his love for portraits and lighting techniques...",
        },
        {
          id: 5,
          name: "Cozy Days: The Art of Iraville",
          price: "$29.00",
          image: "https://store.3dtotal.com/cdn/shop/products/COZY_BOOKPLATE_NEW.png?v=1666102142",
          author: "Iraville",
          releaseDate: "06/08/2018",
          pages: 29,
          isbn: "978-1-909414-63-1",
          description: "Cozy Days: The Art of Iraville is a collection of the best work by popular illustrator Ira Sluyterman van Langeweyde, also known as Iraville...",
        },
        {
          id: 6,
          name: "The Art of Heikala: Works and Thoughts",
          price: "$30.00",
          image: "https://store.3dtotal.com/cdn/shop/products/HEIK_BOOKPLATE_NEW.png?v=1666102365",
          author: "Heikala",
          releaseDate: "31/01/2019",
          pages: 30,
          isbn: "978-1-909414-81-5",
          description: "The Art of Heikala: Works and Thoughts is a comprehensive collection of the best work by popular illustrator Heikala...",
        },
        {
          id: 7,
          name: "Sketch with Asia",
          price: "$31.00",
          image: "https://store.3dtotal.com/cdn/shop/products/asia_01_1.png?v=1607528285",
          author: "Asia Ladowska",
          releaseDate: "02/03/2019",
          pages: 31,
          isbn: "978-1-909414-66-2",
          description: "Sketch with Asia is the first publication from web sensation and well-known manga-inspired artist Asia Ladowska...",
        },
        {
          id: 8,
          name: "Creating Stylized Characters",
          price: "$32.00",
          image: "https://store.3dtotal.com/cdn/shop/products/csc_01.png?v=1607528157",
          author: "Publishing 3dtotal",
          releaseDate: "21/06/2018",
          pages: 32,
          isbn: "978-1-909414-74-7",
          description: "Delve into the vibrant, exciting world of character design with Creating Stylized Characters!...",
        },
        {
          id: 9,
          name: "Sketching from the Imagination: Characters",
          price: "$23.00",
          image: "https://store.3dtotal.com/cdn/shop/products/SFTIC_01_2.png?v=1607528000",
          author: "Publishing 3dtotal",
          releaseDate: "06/06/2023",
          pages: 23,
          isbn: "978-1-909414-39-6",
          description: "In Sketching from the Imagination: Characters, fifty exceptional traditional and digital artists have been chosen to share their sketches..."
        },
        {
          id: 10,
          name: "Beginner's Guide to Digital Painting in Procreate",
          price: "$28.00",
          image: "https://store.3dtotal.com/cdn/shop/products/proc_01.png?v=1607533538",
          author: "Publishing 3dtotal",
          releaseDate: "28/04/2020",
          pages: 28,
          isbn: "978-1-912843-14-5",
          description: "Tap into the world of Procreate, the groundbreaking app for the iPad that brings unbounded creativity into the hands of digital artists of all levels!..."
        },
        {
          id: 11,
          name: "Beginner's Guide to Digital Painting in Photoshop: Characters",
          price: "$38.00",
          image: "https://store.3dtotal.com/cdn/shop/products/BGDPC_01_4.png?v=1607527714&width=1100",
          author: "Publishing 3dtotal",
          releaseDate: "17/03/2015",
          pages: 38,
          isbn: "978-1-909414-14-3",
          description: "Beginner's Guide to Digital Painting: Characters is a comprehensive guide for artists wishing to create convincing and detailed characters..."
        },
        {
          id: 12,
          name: "Wonder: The Art and Practice of Beatrice Blue",
          price: "$31.00",
          image: "https://store.3dtotal.com/cdn/shop/products/WON_BOOKPLATE_NEW.png?v=1666103355",
          author: "Beatrice Blue",
          releaseDate: "21/01/2020",
          pages: 31,
          isbn: "978-0-9551530-9-9",
          description: "Follow illustrator Beatrice Blue on a journey of discovery through her whimsical world of quirky creatures, engaging characters, and immersive scenery..."
        },
        {
          id: 13,
          name: "Beyond Art Fundamentals",
          price: "$33.00",
          image: "https://store.3dtotal.com/cdn/shop/products/BAF_01_2.png?v=1607527975&width=1100",
          author: "Publishing 3dtotal",
          releaseDate: "13/08/2016",
          pages: 33,
          isbn: "978-1-909414-36-5",
          description: "Building on the foundations set by the popular Art Fundamentals, Beyond Art Fundamentals shows artists how to take their work a step beyond techniques and mechanics..."
        },
        {
          id: 14,
          name: "Windows to Worlds: The Art of Devin Elle Kurtz",
          price: "$36.00",
          image: "https://store.3dtotal.com/cdn/shop/products/WTW_BOOKPLATE.png?v=1669629785",
          author: "Devin Elle Kurtz",
          releaseDate: "23/09/2021",
          pages: 36,
          isbn: "978-1-912843-46-6",
          description: "Industry professional Devin Elle Kurtz inspires and instructs in her debut artbook. In addition to sharing how she has navigated the various paths of education, work, and personal struggles..."
        },
        {
          id: 15,
          name: "How to Be a Children's Book Illustrator",
          price: "$39.00",
          image: "https://store.3dtotal.com/cdn/shop/products/hci_01.png?v=1607529960",
          author: "Publishing 3dtotal",
          releaseDate: "05/01/2021",
          pages: 39,
          isbn: "978-1-912843-19-0",
          description: "Discover how top children's illustrators portray characters, narratives, and themes through the art of visual storytelling in this uniquely practical and inspirational handbook..."
        },
        {
          id: 16,
          name: "Sketching from the Imagination: Creatures & Monsters",
          price: "$26.00",
          image: "https://store.3dtotal.com/cdn/shop/products/sfticm_01_1.png?v=1607533451",
          author: "Allen Williams",
          releaseDate: "04/04/2019",
          pages: 26,
          isbn: "978-1-909414-87-7",
          description: "Explore this volume in the popular Sketching from the Imagination series, dedicated to the fascinating field of creature design. Fictional beasts are an endless source of fuel for entertainment and the imagination..."
        },
        {
          id: 17,
          name: "Komorebi: The Art of Djamila Knopf",
          price: "$36.00",
          image: "https://store.3dtotal.com/cdn/shop/products/KOM_BOOKPLATE_NEW.png?v=1679926490",
          author: "Djamila Knopf",
          releaseDate: "15/08/2020",
          pages: 36,
          isbn: "978-1-912843-21-3",
          description: "Travel through the world of Djamila Knopf, an artist and teacher whose Japanese-influenced characters and settings enchant fans worldwide..."
        },
        {
          id: 18,
          name: "Art Fundamentals 2nd edition",
          price: "$38.00",
          image: "https://store.3dtotal.com/cdn/shop/products/afun2_01.png?v=1607533554",
          author: "Publishing 3dtotal",
          releaseDate: "01/03/2020",
          pages: 38,
          isbn: "978-1-912843-07-7",
          description: "Even more expert advice, key techniques, and illuminating artwork upgrades 3dtotal's bestselling Art Fundamentals, the cornerstone of every artist's bookshelf..."
        },
        {
          id: 19,
          name: "Fundamentals of Character Design",
          price: "$41.00",
          image: "https://store.3dtotal.com/cdn/shop/products/funcha_01.png?v=1607529952",
          author: "Publishing 3dtotal",
          releaseDate: "01/08/2020",
          pages: 41,
          isbn: "978-1-912843-18-3",
          description: "Why do the characters in our favorite books, animations, and games stay with us long after the final scene? The heroic protagonist, evil villain, comedic sidekick..."
        },
        {
          id: 20,
          name: "Artists' Master Series: Color & Light",
          price: "$39.00",
          image: "https://store.3dtotal.com/cdn/shop/products/AMS_color_and_light_FRONT_COVER_01.jpg?v=1631525486&width=1100",
          author: "Charlie Pickard",
          releaseDate: "05/04/2022",
          pages: 39,
          isbn: "978-1-912843-41-1",
          description: "If you're an artist who takes their work seriously, whether as an enthusiast, student, or budding professional, then you're ready to step up to the NEW Artists Master Series..."
        },
        {
          id: 21,
          name: "Beginner's Guide to Digital Painting in Photoshop 2nd Edition",
          price: "$41.00",
          image: "https://store.3dtotal.com/cdn/shop/products/bgdp2_01.png?v=1607533528",
          author: "Publishing 3dtotal",
          releaseDate: "11/02/2020",
          pages: 41,
          isbn: "978-1-909414-94-5",
          description: "Brand new tutorials and artwork reboot 3dtotal's essential guide as the go-to resource for any aspiring digital painter..."
        },
        {
          id: 22,
          name: "Guweiz: The Art of Gu Zheng Wei",
          price: "$36.00",
          image: "https://store.3dtotal.com/cdn/shop/products/GUW_BOOKPLATE_NEW.png?v=1666102334",
          author: "Guweiz",
          releaseDate: "01/08/2020",
          pages: 36,
          isbn: "978-1-912843-16-9",
          description: "Digital artist Gu Zheng Wei, AKA Guweiz, shares his anime-inspired world in this captivating book. His unique urban take on the popular manga and anime styles..."
        },
        {
          id: 23,
          name: "The World of Guweiz: The Art of Gu Zheng Wei",
          price: "$38.00",
          image: "https://store.3dtotal.com/cdn/shop/files/TWOG_BOOKPLATE.png?v=1696936001",
          author: "Guweiz",
          releaseDate: "08/08/2023",
          pages: 38,
          isbn: "978-1-912843-67-1",
          description: "The World of Guweiz: The Art of Gu Zheng Wei follows the digital artist as he explores the new narrative focus of his most recent works..."
        },
        {
          id: 24,
          name: "Digital Painting in Photoshop: Industry Techniques for Beginners",
          price: "$39.00",
          image: "https://store.3dtotal.com/cdn/shop/products/dpip_01.png?v=1607528275",
          author: "Publishing 3dtotal",
          releaseDate: "18/12/2018",
          pages: 39,
          isbn: "978-1-909414-76-1",
          description: "Inside this comprehensive manual is everything the budding digital painter needs to know about the customizable Photoshop interface, its efficient tools, essential painting brushes..."
        },
        {
          id: 25,
          name: "Creating Stylized Animals",
          price: "$39.00",
          image: "https://store.3dtotal.com/cdn/shop/products/csa_01.png?v=1620240908",
          author: "Publishing 3dtotal",
          releaseDate: "27/04/2021",
          pages: 39,
          isbn: "978-1-912843-25-1",
          description: "Almost everybody, artist or not, can think of a beloved animal character whether from a cartoon, a movie, a picture book, a comic strip, or even a cereal box! From the dawn of art to the latest feature-length animation, animals never fail to engage us..."
        },
        {
          id: 26,
          name: "Sketch Every Day - Simone Grünwal",
          price: "$29.00",
          image: "https://store.3dtotal.com/cdn/shop/products/SED_BOOKPLATE_NEW.png?v=1666102436",
          author: "Simone Grunewal",
          releaseDate: "12/11/2019",
          pages: 29,
          isbn: "978-1-909414-90-7",
          description: "Known for her humorous characters and relatable narratives, Simone Grunewald offers creatives the opportunity to delve into her engaging illustrative practice..."
        },
        {
          id: 27,
          name: "Draw What You Love: The Art of Simone Grünwal",
          price: "$33.00",
          image: "https://store.3dtotal.com/cdn/shop/products/DWYL_BOOKPLATE_NEW.png?v=1666102221",
          author: "Simone Grunewal",
          releaseDate: "03/08/2021",
          pages: 33,
          isbn: "978-1-912843-30-5",
          description: "Discover the enchanting work of popular German artist Simone Grunewald, whose personal designs feature characters, scenes, and narratives inspired by her everyday-life experiences and passion for the arts..."
        },
        {
          id: 28,
          name: "The Sketchbook of Loish : Art in progress",
          price: "$29.00",
          image: "https://store.3dtotal.com/cdn/shop/products/TSOL_BOOKPLATE_NEW.png?v=1666102826",
          author: "Loish",
          releaseDate: "10/04/2018",
          pages: 29,
          isbn: "978-1-909414-54-9",
          description: "The Sketchbook of Loish is the second book by digital artist Loish (Lois van Baarle) following on from the hugely popular. The Art of Loish. This book focuses on showcasing a wide range of her traditional and digital sketches and exclusive artwork..."
        },
        {
          id: 29,
          name: "The Style of Loish : Finding an Artistic Voice",
          price: "$29.00",
          image: "https://store.3dtotal.com/cdn/shop/products/TSTOL_BOOKPLATE_NEW.png?v=1666103314",
          author: "Loish",
          releaseDate: "09/08/2022",
          pages: 29,
          isbn: "978-1-912843-43-5",
          description: "Throughout her career, Loish has developed to become known for her instantly recognizable style. In this unique book, she not only takes a deep dive into the various aspects of her art that combine to produce this style, but also helps readers identify and nurture their own individual style..."
        },
        {
          id: 30,
          name: "The Art of Loish : A Look Behind the Scenes",
          price: "$30.00",
          image: "https://store.3dtotal.com/cdn/shop/products/TAOL_BOOKPLATE_NEW.png?v=1666102693",
          author: "Loish",
          releaseDate: "21/04/2016",
          pages: 30,
          isbn: "978-1-909414-28-0",
          description: "The Art of Loish is the first published compendium of the works of digital artist and animator Lois Van Baarle, AKA Loish, offering inspiration, insight, and exclusive artwork..."
        }
      ],
    };
  },
};
</script>

<style>
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>