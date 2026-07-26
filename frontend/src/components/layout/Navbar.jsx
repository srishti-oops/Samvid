import { ArrowRight } from "lucide-react";

const links = [
  {
    label: "How It Works",
    href: "#how-it-works",
  },
  {
    label: "Why Samvid",
    href: "#why-samvid",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#DCE3EB]/80 bg-[#F5F7FA]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <a
          href="#hero"
          className="
            font-['Kameron']
            text-[38px]
            font-bold
            tracking-[-0.03em]
            text-[#384B8F]
            transition-opacity
            duration-200
            hover:opacity-80
          "
        >
          Samvid
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-12 lg:flex">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                relative
                font-['Karla']
                text-[16px]
                font-semibold
                tracking-[0.02em]
                text-[#384553]
                transition-colors
                duration-200
                hover:text-[#384B8F]

                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[2px]
                after:w-0
                after:bg-[#384B8F]
                after:transition-all
                after:duration-300

                hover:after:w-full
              "
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#cta"
          className="
            inline-flex
            items-center
            gap-2
            rounded-lg
            bg-[#384B8F]
            px-6
            py-3.5
            font-['Karla']
            text-[15px]
            font-semibold
            tracking-[0.01em]
            text-white
            transition-all
            duration-200
            hover:-translate-y-[1px]
            hover:bg-[#2F417F]
            hover:shadow-lg
          "
        >
          Analyze Agreement

          <ArrowRight
            size={17}
            strokeWidth={2.2}
          />
        </a>

      </div>
    </header>
  );
}