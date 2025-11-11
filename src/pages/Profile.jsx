// // RedPizzaProfile.jsx
// // React + Tailwind profile page component with animated slide-out panel
// // Requirements: Tailwind CSS and framer-motion installed
// // Install: npm install framer-motion
// // Usage: import RedPizzaProfile from './RedPizzaProfile'; <RedPizzaProfile />

// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function RedPizzaProfile() {
//   const [open, setOpen] = useState(false);
//   const [profile, setProfile] = useState({
//     firstName: 'Dipti',
//     lastName: 'Gujar',
//     mobile: '+91 98765 43210',
//     email: 'dipti@example.com',
//     address: '123, Pizza Lane, Mumbai',
//     rewardPoints: 120,
//   });

//   // avatar (base64 or external url) stored separately so we can manage preview/upload
//   const [avatar, setAvatar] = useState(null);
//   const fileInputRef = useRef(null);

//   // persist to localStorage so the demo feels interactive
//   useEffect(() => {
//     const saved = localStorage.getItem('redPizzaProfile');
//     const savedAvatar = localStorage.getItem('redPizzaProfile_avatar');
//     if (saved) setProfile(JSON.parse(saved));
//     if (savedAvatar) setAvatar(savedAvatar);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('redPizzaProfile', JSON.stringify(profile));
//   }, [profile]);

//   useEffect(() => {
//     if (avatar) localStorage.setItem('redPizzaProfile_avatar', avatar);
//     else localStorage.removeItem('redPizzaProfile_avatar');
//   }, [avatar]);

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setProfile((prev) => ({ ...prev, [name]: value }));
//   }

//   function incrementRewards(amount = 10) {
//     setProfile((prev) => ({ ...prev, rewardPoints: Number(prev.rewardPoints) + amount }));
//   }

//   // handle image file selection and convert to base64 for preview/storage
//   function handleImageFile(file) {
//     if (!file) return;
//     const allowed = ['image/jpeg', 'image/png', 'image/webp'];
//     if (!allowed.includes(file.type)) {
//       alert('Please upload a JPG/PNG/WEBP image');
//       return;
//     }
//     const reader = new FileReader();
//     reader.onload = (ev) => {
//       setAvatar(ev.target.result);
//     };
//     reader.readAsDataURL(file);
//   }

//   function onSelectImageClick() {
//     if (fileInputRef.current) fileInputRef.current.click();
//   }

//   function removeAvatar() {
//     if (window.confirm('Remove profile photo?')) setAvatar(null);
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center p-6">
//       <div className="relative w-full max-w-4xl">
//         {/* Main card */}
//         <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Left: avatar + brief */}
//           <div className="flex flex-col items-center md:items-start justify-center gap-4">
//             <div className="relative">
//               <button
//                 aria-label="Open profile"
//                 onClick={() => setOpen(true)}
//                 className="group w-40 h-40 rounded-full overflow-hidden ring-2 ring-offset-2 ring-red-200 hover:scale-105 transition-transform duration-300 shadow-md"
//               >
//                 {avatar ? (
//                   <img src={avatar} alt="avatar" className="w-full h-full object-cover" />
//                 ) : (
//                   <img
//                     src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder"
//                     alt="avatar"
//                     className="w-full h-full object-cover"
//                   />
//                 )}
//               </button>

//               {/* edit icon overlay on avatar */}
//               <div className="absolute right-1 bottom-1">
//                 <button
//                   onClick={onSelectImageClick}
//                   className="bg-white p-2 rounded-full shadow-md border hover:scale-105 transition"
//                   title="Edit profile photo"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 11l6 6L21 11l-6-6-6 6z" />
//                   </svg>
//                 </button>
//               </div>
//             </div>

//             <input
//               type="file"
//               accept="image/*"
//               className="hidden"
//               ref={fileInputRef}
//               onChange={(e) => {
//                 const f = e.target.files && e.target.files[0];
//                 handleImageFile(f);
//               }}
//             />

//             <div className="text-center md:text-left">
//               <h3 className="text-2xl font-semibold">
//                 {profile.firstName} {profile.lastName}
//               </h3>
//               <p className="text-sm text-gray-500">Red-Pizza Loyal Customer</p>
//             </div>

//             <div className="mt-3 inline-flex items-center gap-3 bg-red-50 rounded-full px-4 py-2">
//               <div className="text-sm">Reward Points</div>
//               <div className="text-lg font-bold text-red-600">{profile.rewardPoints}</div>
//               <button
//                 onClick={() => incrementRewards(25)}
//                 className="ml-2 text-xs px-3 py-1 rounded-full bg-red-600 text-white hover:bg-red-700 transition"
//               >
//                 +25
//               </button>
//             </div>
//           </div>

//           {/* Middle: details summary */}
//           <div className="col-span-2 md:col-span-1 flex flex-col justify-center gap-4">
//             <div className="flex flex-col gap-1">
//               <label className="text-xs text-gray-500">Mobile</label>
//               <div className="text-lg font-medium">{profile.mobile}</div>
//             </div>

//             <div className="flex flex-col gap-1">
//               <label className="text-xs text-gray-500">Email</label>
//               <div className="text-lg font-medium">{profile.email}</div>
//             </div>

//             <div className="flex flex-col gap-1">
//               <label className="text-xs text-gray-500">Address</label>
//               <div className="text-lg font-medium">{profile.address}</div>
//             </div>

//             <div className="mt-4 flex items-center gap-3">
//               <button
//                 onClick={() => setOpen(true)}
//                 className="px-4 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition"
//               >
//                 Edit Profile
//               </button>

//               <button
//                 onClick={onSelectImageClick}
//                 className="px-3 py-2 rounded-lg bg-white border font-medium hover:bg-gray-50 transition"
//               >
//                 Edit Photo
//               </button>

//               {avatar && (
//                 <button onClick={removeAvatar} className="px-3 py-2 rounded-lg bg-gray-200 font-medium hover:bg-gray-300 transition">
//                   Remove Photo
//                 </button>
//               )}
//             </div>
//           </div>

//           {/* Right: promotional area */}
//           <div className="hidden md:flex flex-col items-end justify-between gap-4">
//             <div className="text-right">
//               <h4 className="text-lg font-semibold">Special for you</h4>
//               <p className="text-sm text-gray-500">Use your points to get discounts on your next pizza order.</p>
//             </div>

//             <div>
//               <button
//                 onClick={() => incrementRewards(50)}
//                 className="px-4 py-2 rounded-lg bg-yellow-400 text-gray-900 font-medium hover:brightness-95 transition"
//               >
//                 Earn +50 Points
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Slide-out panel (animated) */}
//         <AnimatePresence>
//           {open && (
//             <motion.aside
//               initial={{ x: '100%' }}
//               animate={{ x: 0 }}
//               exit={{ x: '100%' }}
//               transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//               className="fixed top-0 right-0 h-full max-w-md w-full md:w-96 bg-white shadow-2xl z-50 p-6 overflow-auto"
//               role="dialog"
//               aria-modal="true"
//             >
//               <div className="flex items-center justify-between">
//                 <h3 className="text-xl font-semibold">Edit Profile</h3>
//                 <div className="flex items-center gap-2">
//                   <button onClick={onSelectImageClick} className="px-3 py-2 rounded-lg bg-white border font-medium hover:bg-gray-50 transition">
//                     Upload Photo
//                   </button>

//                   {avatar && (
//                     <button onClick={removeAvatar} className="px-3 py-2 rounded-lg bg-gray-200 font-medium hover:bg-gray-300 transition">
//                       Remove Photo
//                     </button>
//                   )}

//                   <button onClick={() => setOpen(false)} className="rounded-full p-2 hover:bg-gray-100 transition" aria-label="Close">
//                     ✕
//                   </button>
//                 </div>
//               </div>

//               <div className="mt-6 space-y-4">
//                 <div className="grid grid-cols-2 gap-3">
//                   <div>
//                     <label className="block text-xs text-gray-500">First name</label>
//                     <input
//                       name="firstName"
//                       value={profile.firstName}
//                       onChange={handleChange}
//                       className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-300"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-xs text-gray-500">Last name</label>
//                     <input
//                       name="lastName"
//                       value={profile.lastName}
//                       onChange={handleChange}
//                       className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-300"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-xs text-gray-500">Mobile</label>
//                   <input
//                     name="mobile"
//                     value={profile.mobile}
//                     onChange={handleChange}
//                     type="tel"
//                     className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-300"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-xs text-gray-500">Email</label>
//                   <input
//                     name="email"
//                     value={profile.email}
//                     onChange={handleChange}
//                     type="email"
//                     className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-300"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-xs text-gray-500">Address</label>
//                   <textarea
//                     name="address"
//                     value={profile.address}
//                     onChange={handleChange}
//                     rows="3"
//                     className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-300"
//                   />
//                 </div>

//                 <div className="flex items-center justify-between gap-4">
//                   <div>
//                     <label className="block text-xs text-gray-500">Reward Points</label>
//                     <input
//                       name="rewardPoints"
//                       value={profile.rewardPoints}
//                       onChange={handleChange}
//                       type="number"
//                       className="mt-1 w-32 rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-300"
//                     />
//                   </div>

//                   <div className="ml-auto flex gap-2">
//                     <button onClick={() => incrementRewards(10)} className="px-3 py-2 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600 transition">
//                       +10
//                     </button>

//                     <button
//                       onClick={() =>
//                         setProfile({
//                           firstName: '',
//                           lastName: '',
//                           mobile: '',
//                           email: '',
//                           address: '',
//                           rewardPoints: 0,
//                         })
//                       }
//                       className="px-3 py-2 rounded-lg bg-gray-200 font-medium hover:bg-gray-300 transition"
//                     >
//                       Reset
//                     </button>
//                   </div>
//                 </div>

//                 <div className="pt-3 border-t mt-2 flex items-center gap-3">
//                   <button onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition">
//                     Save & Close
//                   </button>

//                   <button onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg bg-transparent border font-medium hover:bg-gray-50 transition">
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             </motion.aside>
//           )}
//         </AnimatePresence>

//         {/* backdrop */}
//         <AnimatePresence>
//           {open && (
//             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} className="fixed inset-0 bg-black z-40" />
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }

// RedPizzaProfile.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function readableBytes(bytes) {
  if (!bytes && bytes !== 0) return '';
  const units = ['B', 'KB', 'MB', 'GB'];
  let i = 0;
  let num = bytes;
  while (num >= 1024 && i < units.length - 1) {
    num /= 1024;
    i++;
  }
  return `${num.toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
}

export default function RedPizzaProfile() {
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState({
    firstName: 'Dipti',
    lastName: 'Gujar',
    mobile: '+91 98765 43210',
    email: 'dipti@example.com',
    address: '123, Pizza Lane, Mumbai',
    rewardPoints: 120,
  });

  const [avatar, setAvatar] = useState(null); // base64 or URL
  const [avatarMeta, setAvatarMeta] = useState(null); // {name, size}
  const fileInputRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem('redPizzaProfile');
    const savedAvatar = localStorage.getItem('redPizzaProfile_avatar');
    const savedMeta = localStorage.getItem('redPizzaProfile_avatar_meta');
    if (saved) setProfile(JSON.parse(saved));
    if (savedAvatar) setAvatar(savedAvatar);
    if (savedMeta) setAvatarMeta(JSON.parse(savedMeta));
  }, []);

  useEffect(() => {
    localStorage.setItem('redPizzaProfile', JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    if (avatar) localStorage.setItem('redPizzaProfile_avatar', avatar);
    else localStorage.removeItem('redPizzaProfile_avatar');

    if (avatarMeta) localStorage.setItem('redPizzaProfile_avatar_meta', JSON.stringify(avatarMeta));
    else localStorage.removeItem('redPizzaProfile_avatar_meta');
  }, [avatar, avatarMeta]);

  function handleChange(e) {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  }

  function incrementRewards(amount = 10) {
    setProfile((prev) => ({ ...prev, rewardPoints: Number(prev.rewardPoints) + amount }));
  }

  function handleImageFile(file) {
    if (!file) return;
    const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowed.includes(file.type)) {
      alert('Please upload a JPG/PNG/WEBP/GIF image');
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      setAvatar(ev.target.result);
      setAvatarMeta({ name: file.name, size: file.size });
    };
    reader.readAsDataURL(file);
  }

  function onSelectImageClick() {
    if (fileInputRef.current) fileInputRef.current.click();
  }

  function removeAvatar() {
    if (window.confirm('Remove profile photo?')) {
      setAvatar(null);
      setAvatarMeta(null);
    }
  }

  // compute initials for fallback avatar
  const initials = `${(profile.firstName || '').trim().charAt(0) || ''}${(profile.lastName || '').trim().charAt(0) || ''}`.toUpperCase();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center p-6">
      <div className="relative w-full max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center md:items-start justify-center gap-4">
            <div className="relative">
              <button
                aria-label="Open profile"
                onClick={() => setOpen(true)}
                className="group w-40 h-40 rounded-full overflow-hidden ring-2 ring-offset-2 ring-red-200 hover:scale-105 transition-transform duration-300 shadow-md bg-gray-50"
                title="Open profile"
              >
                {avatar ? (
                  <img src={avatar} alt="avatar" className="w-full h-full object-cover" />
                ) : (
                  // initials avatar (device-like)
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-500 to-yellow-400 text-white text-3xl font-semibold">
                    {initials || 'U'}
                  </div>
                )}
              </button>

              <div className="absolute right-1 bottom-1 flex gap-2">
                <button
                  onClick={onSelectImageClick}
                  className="bg-white p-2 rounded-full shadow-md border hover:scale-105 transition"
                  title="Edit profile photo"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 11l6 6L21 11l-6-6-6 6z" />
                  </svg>
                </button>

                {avatar && (
                  <button onClick={removeAvatar} className="bg-white p-2 rounded-full shadow-md border hover:scale-105 transition" title="Remove photo">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 3a1 1 0 00-1 1v1H3a1 1 0 100 2h14a1 1 0 100-2h-2V4a1 1 0 00-1-1H6zm2 7a1 1 0 012 0v4a1 1 0 11-2 0v-4zm4 0a1 1 0 012 0v4a1 1 0 11-2 0v-4z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            <input
              type="file"
              accept="image/*"
              capture="environment"
              className="hidden"
              ref={fileInputRef}
              onChange={(e) => {
                const f = e.target.files && e.target.files[0];
                handleImageFile(f);
              }}
            />

            {/* file metadata */}
            {avatarMeta && (
              <div className="text-xs text-gray-500 mt-1">
                {avatarMeta.name} · {readableBytes(avatarMeta.size)}
              </div>
            )}

            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold">
                {profile.firstName} {profile.lastName}
              </h3>
              <p className="text-sm text-gray-500">Red-Pizza Loyal Customer</p>
            </div>

            <div className="mt-3 inline-flex items-center gap-3 bg-red-50 rounded-full px-4 py-2">
              <div className="text-sm">Reward Points</div>
              <div className="text-lg font-bold text-red-600">{profile.rewardPoints}</div>
              <button
                onClick={() => incrementRewards(25)}
                className="ml-2 text-xs px-3 py-1 rounded-full bg-red-600 text-white hover:bg-red-700 transition"
                title="Add 25 points"
              >
                +25
              </button>
            </div>
          </div>

          {/* middle & right sections unchanged (kept for brevity) */}
          <div className="col-span-2 md:col-span-1 flex flex-col justify-center gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-500">Mobile</label>
              <div className="text-lg font-medium">{profile.mobile}</div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-500">Email</label>
              <div className="text-lg font-medium">{profile.email}</div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-500">Address</label>
              <div className="text-lg font-medium">{profile.address}</div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <button onClick={() => setOpen(true)} className="px-4 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition">
                Edit Profile
              </button>

              <button onClick={onSelectImageClick} className="px-3 py-2 rounded-lg bg-white border font-medium hover:bg-gray-50 transition">
                Edit Photo
              </button>

              {avatar && (
                <button onClick={removeAvatar} className="px-3 py-2 rounded-lg bg-gray-200 font-medium hover:bg-gray-300 transition">
                  Remove Photo
                </button>
              )}
            </div>
          </div>

          <div className="hidden md:flex flex-col items-end justify-between gap-4">
            <div className="text-right">
              <h4 className="text-lg font-semibold">Special for you</h4>
              <p className="text-sm text-gray-500">Use your points to get discounts on your next pizza order.</p>
            </div>

            <div>
              <button onClick={() => incrementRewards(50)} className="px-4 py-2 rounded-lg bg-yellow-400 text-gray-900 font-medium hover:brightness-95 transition">
                Earn +50 Points
              </button>
            </div>
          </div>
        </div>

        {/* slide-out panel and rest of UI (unchanged) */}
        <AnimatePresence>
          {open && (
            <motion.aside initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} className="fixed top-0 right-0 h-full max-w-md w-full md:w-96 bg-white shadow-2xl z-50 p-6 overflow-auto" role="dialog" aria-modal="true">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Edit Profile</h3>
                <div className="flex items-center gap-2">
                  <button onClick={onSelectImageClick} className="px-3 py-2 rounded-lg bg-white border font-medium hover:bg-gray-50 transition">
                    Upload Photo
                  </button>

                  {avatar && <button onClick={removeAvatar} className="px-3 py-2 rounded-lg bg-gray-200 font-medium hover:bg-gray-300 transition">Remove Photo</button>}

                  <button onClick={() => setOpen(false)} className="rounded-full p-2 hover:bg-gray-100 transition" aria-label="Close">
                    ✕
                  </button>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-gray-500">First name</label>
                    <input name="firstName" value={profile.firstName} onChange={handleChange} className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-300" />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500">Last name</label>
                    <input name="lastName" value={profile.lastName} onChange={handleChange} className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-300" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-500">Mobile</label>
                  <input name="mobile" value={profile.mobile} onChange={handleChange} type="tel" className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-300" />
                </div>

                <div>
                  <label className="block text-xs text-gray-500">Email</label>
                  <input name="email" value={profile.email} onChange={handleChange} type="email" className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-300" />
                </div>

                <div>
                  <label className="block text-xs text-gray-500">Address</label>
                  <textarea name="address" value={profile.address} onChange={handleChange} rows="3" className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-300" />
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div>
                    <label className="block text-xs text-gray-500">Reward Points</label>
                    <input name="rewardPoints" value={profile.rewardPoints} onChange={handleChange} type="number" className="mt-1 w-32 rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-300" />
                  </div>

                  <div className="ml-auto flex gap-2">
                    <button onClick={() => incrementRewards(10)} className="px-3 py-2 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600 transition">
                      +10
                    </button>

                    <button onClick={() => setProfile({ firstName: '', lastName: '', mobile: '', email: '', address: '', rewardPoints: 0 })} className="px-3 py-2 rounded-lg bg-gray-200 font-medium hover:bg-gray-300 transition">
                      Reset
                    </button>
                  </div>
                </div>

                <div className="pt-3 border-t mt-2 flex items-center gap-3">
                  <button onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition">
                    Save & Close
                  </button>

                  <button onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg bg-transparent border font-medium hover:bg-gray-50 transition">
                    Cancel
                  </button>
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {open && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} className="fixed inset-0 bg-black z-40" />}
        </AnimatePresence>
      </div>
    </div>
  );
}
