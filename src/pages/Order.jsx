


// src/pages/Order.jsx
import React, { useMemo, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
export default function RedPizzaOrderPage() {
  const SAMPLE_MENU = [
    { id: 1, name: "Margherita Classic", desc: "Tomato sauce, fresh mozzarella, basil", price: 249, veg: true },
    { id: 2, name: "Spicy Pepperoni", desc: "Pepperoni, mozzarella, chili oil", price: 299, veg: false },
    { id: 3, name: "Truffle Alfredo", desc: "Creamy sauce, mushrooms, truffle oil", price: 349, veg: true },
    { id: 4, name: "BBQ Chicken", desc: "BBQ glaze, roasted chicken, onions", price: 329, veg: false },
  ];
    const location = useLocation();
 const { order } = location.state || {};  

  console.log("Received order:", order);

  const [cart, setCart] = useState([]);
  const [selected, setSelected] = useState(SAMPLE_MENU[0]);
  const [notes, setNotes] = useState("");
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", address: "", payment: "cod" });

  // Example effect (kept but no undefined variable)
  useEffect(() => {
    // run once on mount — placeholder for future preselect logic
  }, []);

  const addToCart = (item) => {
    setCart((c) => {
      const found = c.find((x) => x.id === item.id);
      if (found) return c.map((x) => (x.id === item.id ? { ...x, qty: x.qty + 1 } : x));
      return [...c, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (id) => setCart((c) => c.filter((x) => x.id !== id));
  const changeQty = (id, delta) => setCart((c) => c.map((x) => (x.id === id ? { ...x, qty: Math.max(1, x.qty + delta) } : x)));

  const subtotal = useMemo(() => cart.reduce((s, i) => s + i.price * i.qty, 0), [cart]);
  const delivery = subtotal > 499 || subtotal === 0 ? 0 : 49;
  const tax = +(subtotal * 0.05).toFixed(2);
  const total = subtotal + delivery + tax;

  const placeOrder = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address) {
      alert("Please fill name, phone and address to place order.");
      return;
    }
    setCheckoutOpen(false);
    setCart([]);
    setForm({ name: "", phone: "", address: "", payment: "cod" });
    setNotes("");
    alert("Order placed! Thank you for choosing Red Pizza 🍕");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white p-6 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left / Main: Menu + Large Visual */}
        <section className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Visual & Selected Pizza */}
            <div className="w-full md:w-1/2 p-6 bg-gradient-to-br from-red-600 to-red-400 text-white flex flex-col gap-4">
              <h2 className="text-3xl font-extrabold tracking-tight">Red Pizza — Order Online</h2>
              <p className="opacity-90">Hot. Fresh. Fast. Choose your pizza and customize — we animate every step ❤️‍🔥</p>

              <div className="mt-4 flex items-start gap-4">
                <div className="w-36 h-36 rounded-xl bg-white/20 flex items-center justify-center shadow-inner">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-b from-yellow-200 to-yellow-400 flex items-center justify-center text-red-700 font-bold text-sm">
                    {selected.name.split(" ")[0]}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{selected.name}</h3>
                  <p className="text-sm opacity-90">{selected.desc}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="text-2xl font-bold">₹{selected.price}</div>
                    <button
                      onClick={() => addToCart(selected)}
                      className="px-4 py-2 rounded-lg bg-white text-red-600 font-semibold shadow hover:scale-[1.02] transform transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <label className="text-sm">Special notes</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Extra cheese, no onion, etc..."
                  className="w-full mt-2 p-3 rounded-lg text-black/80"
                />
              </div>
            </div>

            {/* Menu list */}
            <div className="w-full md:w-1/2 p-6">
              <h4 className="text-lg font-semibold">Menu</h4>
              <div className="mt-4 grid grid-cols-1 gap-4">
                {order.map((m) => (
                  <motion.div
                    key={m.id}
                    layout
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="flex items-center justify-between p-4 rounded-xl border hover:shadow-md transition cursor-pointer"
                    onClick={() => setSelected(m)}
                  >
                    <div className="flex items-center gap-4">
                      {/* <div className={`w-14 h-14 rounded-lg flex items-center justify-center text-sm font-semibold ${m.veg ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                        {m.veg ? 'VEG' : 'NON-VEG'}
                      </div> */}
                      <div>
                        <div className="font-medium">{m.name}</div>
                        <div className="">
                          <img src={m.img} className="w-20 h-10" alt="" />
                        </div>
                        <div className="text-sm opacity-80">{m.desc}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="font-bold">₹{m.price}</div>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(m);
                        }}
                        className="px-3 py-1 rounded-md bg-red-600 text-white font-semibold"
                      >
                        Add
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Right: Cart & Checkout */}
        <aside className="bg-white rounded-2xl shadow-lg p-4 sticky top-6 h-fit">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-lg">Your Order</h4>
            <div className="text-sm opacity-80">{cart.reduce((a, b) => a + (b.qty || 0), 0)} items</div>
          </div>

          <div className="mt-4 space-y-3">
            <AnimatePresence>
              {cart.length === 0 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-sm opacity-80">
                  Your cart is empty — add something delicious 🍕
                </motion.div>
              )}

              {cart.map((it) => (
                <motion.div
                  key={it.id}
                  layout
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex items-center justify-between gap-3 p-3 rounded-lg border"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-md bg-yellow-200 flex items-center justify-center font-semibold text-sm">{it.name.split(' ')[0]}</div>
                    <div>
                      <div className="font-medium">{it.name}</div>
                      <div className="text-sm opacity-80">₹{it.price} each</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button onClick={() => changeQty(it.id, -1)} className="px-2 py-1 rounded border">-</button>
                    <div className="w-6 text-center">{it.qty}</div>
                    <button onClick={() => changeQty(it.id, 1)} className="px-2 py-1 rounded border">+</button>
                    <button onClick={() => removeFromCart(it.id)} className="ml-2 text-sm text-red-600">Remove</button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-4 border-t pt-4 space-y-2">
            <div className="flex justify-between text-sm opacity-80"><span>Subtotal</span><span>₹{subtotal}</span></div>
            <div className="flex justify-between text-sm opacity-80"><span>Delivery</span><span>{delivery === 0 ? 'Free' : `₹${delivery}`}</span></div>
            <div className="flex justify-between text-sm opacity-80"><span>Tax</span><span>₹{tax}</span></div>
            <div className="flex justify-between text-lg font-bold"><span>Total</span><span>₹{total.toFixed(2)}</span></div>
          </div>

          <div className="mt-4">
            <button
              disabled={cart.length === 0}
              onClick={() => setCheckoutOpen(true)}
              className={`w-full py-3 rounded-lg font-bold ${cart.length === 0 ? 'bg-gray-300 text-gray-700' : 'bg-red-600 text-white'} transition`}
            >
              Checkout
            </button>
          </div>

          <div className="mt-3 text-xs opacity-80 flex justify-between">
            <button onClick={() => setCart(SAMPLE_MENU.map((m) => ({ ...m, qty: 1 })))}>Add 1 of every pizza</button>
            <button onClick={() => setCart([])} className="text-red-600">Clear</button>
          </div>
        </aside>
      </div>

      {/* Checkout modal */}
      <AnimatePresence>
        {checkoutOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-end md:items-center justify-center px-4">
            <motion.div initial={{ y: 30 }} animate={{ y: 0 }} exit={{ y: 30 }} className="w-full md:w-96 bg-white rounded-2xl shadow-2xl p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Checkout</h3>
                <button onClick={() => setCheckoutOpen(false)} className="text-sm opacity-80">Close</button>
              </div>

              <form onSubmit={placeOrder} className="mt-4 space-y-3">
                <div>
                  <label className="text-sm">Name</label>
                  <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full mt-1 p-2 border rounded-lg" />
                </div>
                <div>
                  <label className="text-sm">Phone</label>
                  <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full mt-1 p-2 border rounded-lg" />
                </div>
                <div>
                  <label className="text-sm">Address</label>
                  <textarea value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className="w-full mt-1 p-2 border rounded-lg" />
                </div>

                <div>
                  <label className="text-sm">Payment</label>
                  <select value={form.payment} onChange={(e) => setForm({ ...form, payment: e.target.value })} className="w-full mt-1 p-2 border rounded-lg">
                    <option value="cod">Cash on Delivery</option>
                    <option value="up">UPI</option>
                    <option value="card">Card</option>
                  </select>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <input type="checkbox" id="save" />
                  <label htmlFor="save" className="opacity-80">Save details for faster checkout</label>
                </div>

                <div className="mt-2">
                  <button type="submit" className="w-full py-3 rounded-lg bg-red-600 text-white font-bold">Place Order ₹{total.toFixed(2)}</button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="max-w-6xl mx-auto mt-8 text-center text-sm opacity-80">© Red Pizza — Quality you can taste</footer>
    </div>
  );
}
