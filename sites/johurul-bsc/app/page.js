import Link from "next/link";
import { Tiro_Bangla, Hind_Siliguri } from "next/font/google";

const displayFont = Tiro_Bangla({
  subsets: ["bengali"],
  weight: ["400"],
  variable: "--font-display",
});

const bodyFont = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const divisions = [
  {
    title: "Aqua",
    subtitle: "মাছ উৎপাদন",
    body: "পরিষ্কার পানি, নিয়মিত পরিচর্যা আর সঠিক খাদ্য দিয়ে আমরা পুকুর থেকে বাজার পর্যন্ত মাছের মান বজায় রাখি।",
    href: "/aqua",
    accent: "#2C6E63",
    accentSoft: "#E4EEEC",
  },
  {
    title: "Poultry",
    subtitle: "ডিম উৎপাদন",
    body: "লেয়ার ফার্ম থেকে প্রতিদিন সংগ্রহ করা তাজা ডিম, যাচাই করা মান নিয়ে নির্দিষ্ট সময়ে বাজারে পৌঁছে যায়।",
    href: "/poultry",
    accent: "#B5822C",
    accentSoft: "#F1E9D8",
  },
  {
    title: "Agro-Vet",
    subtitle: "ফিড ও ভেটেরিনারি",
    body: "ফিড, ভ্যাকসিন, ওষুধ আর মাঠপর্যায়ের পরামর্শ—খামারিদের জন্য একটি নির্ভরযোগ্য সরবরাহ নেটওয়ার্ক।",
    href: "/agro-vet",
    accent: "#8B4A34",
    accentSoft: "#EFE1DA",
  },
];

const signals = [
  ["৩", "ব্যবসায়িক ইউনিট"],
  ["৮", "বছরের অভিজ্ঞতা"],
  ["১", "সমন্বিত সাপ্লাই চেইন"],
];

export default function Home() {
  return (
    <main className={`${displayFont.variable} ${bodyFont.variable} font-[family-name:var(--font-body)] bg-[#F5F3EA] text-[#1C2B22]`}>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 pt-20 pb-16 md:grid-cols-[1.05fr_.95fr] md:gap-14 md:pt-28 md:pb-24">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-medium text-[#5C6B5F]">
              রাজশাহী থেকে, ২০১৮ সাল থেকে
            </p>
            <h1 className="mt-5 font-[family-name:var(--font-display)] text-[2.6rem] leading-[1.15] tracking-tight text-[#16241C] md:text-[3.4rem]">
              মাছ, ডিম আর খামারের
              <br />
              যত্ন—এক জায়গায়।
            </h1>
            <p className="mt-6 max-w-md text-[1.05rem] leading-8 text-[#3C463E]">
              M/S Agro Valley Co. তিনটি ইউনিট নিয়ে কাজ করে: মাছ চাষ, ডিম উৎপাদন আর
              ফিড-ভেটেরিনারি সরবরাহ। লক্ষ্য একটাই—প্রতিদিন আপনার কাছে যেন
              তাজা আর নির্ভরযোগ্য পণ্য পৌঁছায়।
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#16241C] px-7 py-3.5 text-sm font-semibold text-[#F5F3EA] transition-colors hover:bg-[#2C6E63]"
              >
                ব্যবসায়িক যোগাযোগ
              </Link>
              <Link
                href="#divisions"
                className="text-sm font-semibold text-[#16241C] underline decoration-[#B5822C] decoration-2 underline-offset-4"
              >
                আমাদের ইউনিট দেখুন
              </Link>
            </div>
            <div className="mt-14 grid max-w-md grid-cols-3 gap-4 border-t border-[#16241C]/12 pt-6">
              {signals.map(([value, label]) => (
                <div key={label}>
                  <div className="font-[family-name:var(--font-display)] text-3xl text-[#16241C]">
                    {value}
                  </div>
                  <div className="mt-1 text-xs leading-5 text-[#5C6B5F]">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-3xl md:min-h-full">
            <img
              src="/images/aqua-harvest.jpg"
              alt="M/S Agro Valley Co.-র পুকুরে মাছ ধরার দৃশ্য"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#16241C]/80 to-transparent px-6 pb-6 pt-16 text-[#F5F3EA]">
              <p className="text-sm">
                একটি পূর্ণাঙ্গ চক্র—উৎপাদন থেকে সরবরাহ পর্যন্ত।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="border-t border-[#16241C]/10 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[.34fr_1fr] md:gap-16">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-[#16241C] md:text-3xl">
            আমরা কেন আলাদা
          </h2>
          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-[#2B342D]">
              আমরা শুধু আলাদা আলাদা পণ্য বিক্রি করি না। মাছ, প্রাণী আর
              মানুষ—তিনটে বিষয় মিলিয়ে একটা কাজের পদ্ধতি তৈরি করেছি, যেখানে
              এক ইউনিটের ফলাফল আরেক ইউনিটের ভিত্তি হয়ে ওঠে।
            </p>
            <div className="mt-10 grid gap-8 border-t border-[#16241C]/10 pt-7 sm:grid-cols-2">
              <div>
                <div className="text-sm font-semibold text-[#2C6E63]">
                  যত্ন
                </div>
                <p className="mt-2 text-sm leading-7 text-[#5C6B5F]">
                  প্রতিটি ইউনিটে স্বাস্থ্য, নিরাপত্তা আর দীর্ঘমেয়াদি
                  স্থায়িত্বকে সবার আগে রাখা হয়।
                </p>
              </div>
              <div>
                <div className="text-sm font-semibold text-[#B5822C]">
                  ধারাবাহিকতা
                </div>
                <p className="mt-2 text-sm leading-7 text-[#5C6B5F]">
                  উৎপাদন থেকে সরবরাহ পর্যন্ত—একটি টিম, একটি মান, একটি
                  নির্ভরযোগ্য প্রতিশ্রুতি।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVISIONS */}
      <section id="divisions" className="bg-[#EFEBDD] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[#16241C] md:text-3xl">
              আমাদের তিনটি ইউনিট
            </h2>
            <p className="max-w-xs text-sm leading-7 text-[#5C6B5F]">
              এক ইউনিটের উপজাত অন্যটির ইনপুট হয়ে ওঠে—এটাই আমাদের কাজের মূল
              নকশা।
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {divisions.map((division) => (
              <Link
                key={division.title}
                href={division.href}
                className="group rounded-2xl bg-[#F5F3EA] p-7 transition-shadow hover:shadow-lg"
                style={{ borderTop: `4px solid ${division.accent}` }}
              >
                <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: division.accent }}>
                  {division.subtitle}
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl text-[#16241C]">
                  {division.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#4A554C]">
                  {division.body}
                </p>
                <span className="mt-6 inline-block text-sm font-semibold text-[#16241C] group-hover:underline">
                  বিস্তারিত দেখুন
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FIELD */}
      <section className="bg-[#16241C] py-16 text-[#F5F3EA] md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center md:gap-16">
          <div className="overflow-hidden rounded-3xl">
            <img
              src="/images/poultry-farm.jpg"
              alt="M/S Agro Valley Co.-র পোলট্রি খামার"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl leading-tight md:text-3xl">
              মাঠে যা করি,
              <br />
              বাজারে তার প্রতিফলন থাকে।
            </h2>
            <p className="mt-5 max-w-md text-[1.05rem] leading-8 text-[#D8DBD3]">
              আমাদের প্রতিটি সিদ্ধান্ত শুরু হয় খামার থেকে। সঠিক খাদ্য,
              নিয়মিত পরিচর্যা আর অভিজ্ঞ মানুষের হাতে তৈরি হওয়া পণ্য নিয়ে
              আমরা আপনার আস্থা অর্জন করতে চাই।
            </p>
            <Link
              href="/about"
              className="mt-7 inline-block rounded-full border border-[#F5F3EA]/40 px-6 py-3 text-sm font-semibold transition-colors hover:bg-[#F5F3EA] hover:text-[#16241C]"
            >
              আমাদের গল্প
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-16 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-[family-name:var(--font-display)] text-2xl leading-tight text-[#16241C] md:text-3xl">
            আপনার পরের ভালো
            <br />
            সিদ্ধান্তটি কোথায়?
          </h2>
          <div className="md:text-right">
            <p className="mb-4 max-w-xs text-sm leading-7 text-[#5C6B5F] md:ml-auto">
              পাইকারি সরবরাহ, খামার-পরামর্শ অথবা অংশীদারিত্ব নিয়ে কথা বলতে
              চাইলে যোগাযোগ করুন।
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-[#16241C] px-7 py-3.5 text-sm font-semibold text-[#F5F3EA] transition-colors hover:bg-[#2C6E63]"
            >
              যোগাযোগ করুন
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
