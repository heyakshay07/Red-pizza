import React from 'react'
import img from "../assets/navbar/pizza1.jpg";
import blog1 from "../assets/blog/blog1.jpg";
import blog2 from "../assets/blog/blog2.jpg";
import blog3 from "../assets/blog/blog3.jpg";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      image: blog1,
      title:
        "Working With A Charleston Caterer: Essential Questions and Expert Insights",
      description:
        "As Charleston continues to shine as one of North America’s premier destinations for weddings and events, choosing the right catering partner becomes increasingly important. Before diving into planning, here are the key questions every client should ask their caterer...",
      link: "#",
    },
    {
      id: 2,
      image: blog2,
      title:
        "Festive Holiday Decor: DIY Ideas for Your Winter Celebrations",
      description:
        "As the holiday season approaches, transform your space with elegant, eco-friendly decorations that won’t break the bank. Whether you’re hosting an intimate family gathering or a grand holiday party, these creative DIY ideas will make your celebration memorable...",
      link: "#",
    },
    {
      id: 3,
      image: blog3,
      title:
        "7 Christmas Party Catering Ideas to Elevate Your Festive Fête",
      description:
        "The Yuletide season is about spending quality time with loved ones, but hosting a crowd can be stressful. These creative catering ideas will help you impress your guests with minimal hassle and maximum style...",
      link: "#",
    },
    {
      id: 4,
      image: blog1,
      title:
        "Working With A Charleston Caterer: Essential Questions and Expert Insights",
      description:
        "As Charleston continues to shine as one of North America’s premier destinations for weddings and events, choosing the right catering partner becomes increasingly important. Before diving into planning, here are the key questions every client should ask their caterer...",
      link: "#",
    },
    {
      id: 5,
      image: blog2,
      title:
        "Festive Holiday Decor: DIY Ideas for Your Winter Celebrations",
      description:
        "As the holiday season approaches, transform your space with elegant, eco-friendly decorations that won’t break the bank. Whether you’re hosting an intimate family gathering or a grand holiday party, these creative DIY ideas will make your celebration memorable...",
      link: "#",
    },
    {
      id: 6,
      image: blog3,
      title:
        "7 Christmas Party Catering Ideas to Elevate Your Festive Fête",
      description:
        "The Yuletide season is about spending quality time with loved ones, but hosting a crowd can be stressful. These creative catering ideas will help you impress your guests with minimal hassle and maximum style...",
      link: "#",
    },
  ];

  return (
    <div>
      <div className="relative w-full h-[250px] md:h-[400px] mb-10">
        <img
          src={img}
          alt="pizza"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Blog
          </h1>
        </div>
      </div>
      <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Latest Blog Posts
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 leading-snug">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {blog.description}
              </p>
              <a
                href={blog.link}
                className="inline-flex items-center text-sm font-medium text-gray-800 hover:text-red-600 transition"
              >
                <span className="mr-1">📄</span> Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default Blog
