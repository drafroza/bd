# M/S Agro Valley Co. — ওয়েবসাইট

Next.js (App Router) + Tailwind CSS দিয়ে তৈরি একটি আধুনিক, মোবাইল ও ল্যাপটপ —
উভয়ের জন্য রেস্পন্সিভ, **মাল্টি-পেজ** ব্র্যান্ড সাইট। হোম, About, তিনটি ইউনিট
(Aqua/Poultry/Agro-Vet) এবং Contact — প্রতিটি আলাদা পেজ/রুট হিসেবে তৈরি। ব্র্যান্ড
রং: সবুজ (`#16A34A`) প্রধান রং হিসেবে, সাদা ব্যাকগ্রাউন্ডের সাথে।

## লোকালি চালানো (ঐচ্ছিক, টেস্ট করার জন্য)

```bash
npm install
npm run dev
```

তারপর ব্রাউজারে `http://localhost:3000` খুলুন। মোবাইল ভিউ টেস্ট করতে ব্রাউজারের
DevTools-এ device toolbar (Ctrl+Shift+M / Cmd+Shift+M) ব্যবহার করুন।

## GitHub-এ পুশ করা

```bash
cd agro-valley
git init
git add .
git commit -m "M/S Agro Valley Co. — multi-page website"
git branch -M main
git remote add origin https://github.com/<আপনার-ইউজারনেম>/agro-valley.git
git push -u origin main
```

> GitHub-এ আগে থেকে একটি খালি রিপোজিটরি তৈরি করে নিন (README/gitignore ছাড়া —
> কারণ সেগুলো এই প্রজেক্টে আগে থেকেই আছে)।

## Vercel-এ ডিপ্লয় করা

1. https://vercel.com -এ লগইন করুন (GitHub অ্যাকাউন্ট দিয়ে)।
2. **Add New → Project** এ ক্লিক করুন।
3. GitHub থেকে রিপোজিটরিটি সিলেক্ট করুন।
4. Framework Preset স্বয়ংক্রিয়ভাবে **Next.js** সনাক্ত হবে — কোনো সেটিংস পরিবর্তনের
   দরকার নেই।
5. **Deploy** চাপুন।

### ডোমেইন/অ্যালিয়াস — `agrovalley-co.vercel.app`

ডিপ্লয়ের পর Vercel প্রজেক্টের **Settings → Domains** এ গিয়ে `agrovalley-co.vercel.app`
অ্যালিয়াসটি যোগ করুন। এটি ইতিমধ্যে অন্য কোনো Vercel অ্যাকাউন্টে ব্যবহৃত না থাকলে
সরাসরি যুক্ত হয়ে যাবে; যদি "already in use" দেখায়, তাহলে ভিন্ন কোনো Vercel
অ্যাকাউন্ট/প্রজেক্ট আগে থেকেই এই নামটি ব্যবহার করছে — সেক্ষেত্রে যাচাই করে নিন।

`main` ব্রাঞ্চে যেকোনো পুশ করলেই Vercel স্বয়ংক্রিয়ভাবে নতুন ভার্সন ডিপ্লয় করবে।

## পেজ/রুট স্ট্রাকচার

| রুট | বিষয়বস্তু |
|---|---|
| `/` | হোম — হিরো, উৎপাদন চক্র, তিনটি ইউনিটের প্রিভিউ কার্ড, Why Us, About টিজার |
| `/about` | পূর্ণ প্রতিষ্ঠান পরিচিতি ও সমন্বিত মডেল |
| `/aqua` | Agro Valley Aqua — বিস্তারিত পণ্য ও সরবরাহ প্রক্রিয়া |
| `/poultry` | Agro Valley Poultry — বিস্তারিত পণ্য ও ব্যবস্থাপনা |
| `/agro-vet` | Agro Valley Agro-Vet — বিস্তারিত পণ্য ও সরবরাহ পরিধি |
| `/contact` | যোগাযোগের তথ্য ও ফর্ম |

নেভিগেশন বার (`Nav.jsx`) ও ফুটার (`Footer.jsx`) সব পেজে সাধারণ লেআউট
(`app/layout.js`) থেকে স্বয়ংক্রিয়ভাবে যুক্ত থাকে।

## রেস্পন্সিভনেস

- মোবাইল: `lg` ব্রেকপয়েন্টের নিচে কমপ্যাক্ট হ্যামবার্গার মেনু।
- ট্যাবলেট/ল্যাপটপ: গ্রিড লেআউট ২ থেকে ৩ কলামে প্রসারিত হয়।
- ডেস্কটপ: সর্বোচ্চ কন্টেন্ট প্রস্থ ১১৮০px, তার বেশি জায়গায় সমান মার্জিন।
- সব বাটন, ফর্ম-ফিল্ড ও টাইপোগ্রাফি ছোট স্ক্রিনেও টেস্ট করে ডিজাইন করা হয়েছে।

## যোগাযোগের তথ্য (ইতিমধ্যে সাইটে বসানো আছে)

- ফোন / WhatsApp: +৮৮০ ১৩০৭-০৮৫১৫৪
- ইমেইল: johurul.bsc@gmail.com
- ঠিকানা: ঝালুকা, আমগাছী হাট-৬২৪০, দুর্গাপুর, রাজশাহী
- Google Maps লিংক: ফুটার ও Contact পেজে যুক্ত আছে

এগুলো পরিবর্তনের প্রয়োজন হলে `components/Footer.jsx`, `app/contact/page.js` ও
`components/ContactCTA.jsx`-এ হালনাগাদ করুন।

## পরবর্তী ধাপে যা করা যেতে পারে (ঐচ্ছিক)

- কনট্যাক্ট ফর্মটি এখন `mailto:` ও WhatsApp লিংক ভিত্তিক (ব্যাকএন্ড ছাড়াই কাজ
  করে)। প্রোডাকশন-গ্রেড ফর্ম চাইলে Vercel-compatible ফর্ম সার্ভিস বা সার্ভার-সাইড
  API রুট যোগ করা যায়।
- বর্তমানে JavaScript (.jsx) ব্যবহার করা হয়েছে; TypeScript-এ রূপান্তর চাইলে পরে
  করা সম্ভব।
- এখনকার ইলাস্ট্রেশনগুলো abstract/geometric — আসল ছবি (পুকুর, খামার) সরবরাহ করলে
  প্রতিস্থাপন করে দেওয়া যাবে।
- বাংলা/ইংরেজি ভাষা টগল, প্রোডাক্ট ক্যাটালগ, সোশ্যাল মিডিয়া লিংক ইত্যাদি পরবর্তী
  ফেজে যোগ করা যেতে পারে।

## প্রজেক্ট স্ট্রাকচার

```
app/
  layout.js         -> ফন্ট, মেটাডাটা (agrovalley-co.vercel.app), Nav+Footer wrapping
  page.js           -> হোমপেজ
  about/page.js     -> পরিচিতি পেজ
  aqua/page.js      -> Agro Valley Aqua পেজ
  poultry/page.js   -> Agro Valley Poultry পেজ
  agro-vet/page.js  -> Agro Valley Agro-Vet পেজ
  contact/page.js   -> যোগাযোগ পেজ
  globals.css       -> ডিজাইন টোকেন ও বেস স্টাইল
components/
  Nav.jsx             -> হেডার/নেভিগেশন (৬টি রুট লিংক, মোবাইলে হ্যামবার্গার)
  Footer.jsx          -> যোগাযোগ, WhatsApp, Google Maps লিংকসহ
  CycleDiagram.jsx    -> উৎপাদন চক্রের অ্যানিমেটেড ডায়াগ্রাম
  DivisionBand.jsx    -> প্রতিটি ইউনিট পেজের মূল বিস্তারিত সেকশন
  UnitPreviewCard.jsx -> হোমপেজের ইউনিট প্রিভিউ কার্ড
  OtherUnitsLinks.jsx -> ইউনিট পেজের নিচে অন্য দুটি ইউনিটের লিংক
  ContactCTA.jsx      -> পুনঃব্যবহারযোগ্য যোগাযোগ ব্যানার
  Illustrations.jsx
  ContactForm.jsx     -> mailto + WhatsApp ভিত্তিক ফর্ম
```
