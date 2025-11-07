import React from "react";
import fries from "../../assets/quickies/fries.jpg";
import friesPeri from "../../assets/quickies/friesPeri.jpg";
import popcorn from "../../assets/quickies/popcorn.jpg";
import nuggets from "../../assets/quickies/nuggets.jpg";
import cheeseBalls from "../../assets/quickies/cheeseBalls.jpg";
import chickenFinger from "../../assets/quickies/chickenFinger.jpg";
import kababRoll from "../../assets/quickies/kababRoll.jpg";
import kabab from "../../assets/quickies/kabab.jpg";
import placeholder from "../../assets/quickies/pizza.jpg"; 

const items = [
  {
    id: "fries-99",
    name: "French Fries",
    price: 99,
    desc: "Crispy golden fries, lightly salted — classic & comforting.",
    img: fries || placeholder,
  },
  {
    id: "fries-peri-119",
    name: "French Fries — Peri Peri",
    price: 119,
    desc: "Spicy peri-peri seasoning for a bold, zesty bite.",
    img: friesPeri || placeholder,
  },
  {
    id: "popcorn-139",
    name: "Chicken Popcorn",
    price: 139,
    desc: "Tender bite-sized chicken pieces, fried to crunchy perfection.",
    img: popcorn || placeholder,
  },
  {
    id: "nuggets-139",
    name: "Chicken Nuggets",
    price: 139,
    desc: "Classic golden nuggets — great with dips.",
    img: nuggets || placeholder,
  },
  {
    id: "cheeseballs-139",
    name: "Red Cheese Balls",
    price: 139,
    desc: "Crispy shell, melty cheesy core — crowd favorite.",
    img: cheeseBalls || placeholder,
  },
  {
    id: "finger-149",
    name: "Red Chicken Finger",
    price: 149,
    desc: "Spiced chicken fingers, crunchy outside, juicy inside.",
    img: chickenFinger || placeholder,
  },
  {
    id: "kabab-roll-99",
    name: "Red Chicken Kabab Roll (2 pcs)",
    price: 99,
    desc: "Two rolls filled with spiced chicken kabab — quick & filling.",
    img: kababRoll || placeholder,
  },
  {
    id: "kabab-119",
    name: "Red Chicken Kabab (5 pcs)",
    price: 119,
    desc:
      "minced chicken, garlic, onion, tomato, coriander, spices — juicy kebabs (5 pcs).",
    img: kabab || placeholder,
  },
];

const Quickies = () => {
  const handleAdd = (item) => {
    // Hook this into your cart logic. For now, just log.
    console.log("Add to cart:", item);
    // Example: addToCart(item)
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Quickies
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Bite-sized delights — perfect to pair with your pizza. Tasty, quick,
            and made fresh.
          </p>
        </header>

        {/* Grid */}
        <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-200"
            >
              {/* Image area */}
              <div className="aspect-w-16 aspect-h-11 sm:aspect-h-9">
                {/* Using object-cover makes images fill area. aspect-w/h requires Tailwind's aspect-ratio plugin or custom CSS;
                    if not available, replace with a fixed h-48 and w-full. */}
                <img
                  src={it.img}
                  alt={it.name}
                  className="w-full h-full object-cover rounded-t-2xl"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {it.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{it.desc}</p>
                  </div>

                  <div className="text-right">
                    <div className="text-xl font-extrabold text-amber-600">
                      ₹{it.price}
                    </div>
                    <div className="text-xs text-gray-400">Inclusive of taxes</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-4 flex items-center justify-between gap-3">
                  <button
                    onClick={() => handleAdd(it)}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-full shadow-sm transition"
                    aria-label={`Add ${it.name} to cart`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M16 11V3a1 1 0 00-1-1H6a1 1 0 00-1 1v8H2v2h1a3 3 0 106 0h4a3 3 0 106 0h1v-2h-4zM7 3h6v8H7V3z" />
                    </svg>
                    Add
                  </button>

                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <div className="px-3 py-1 bg-gray-100 rounded-lg">Spicy</div>
                    <div className="px-3 py-1 bg-gray-100 rounded-lg">Crispy</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Footer call-to-action */}
        <div className="mt-10 text-center">
          <p className="text-gray-700">
            Want these with a pizza combo? Add your favorites and check our
            combo offers at checkout.
          </p>
        </div>
      </div>
    </div>
  );
};


export default Quickies;




