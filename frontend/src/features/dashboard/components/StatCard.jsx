export default function StatCard({
  title,
  value,
  subtitle,
}) {
  return (
    <div
      className="
      bg-white
      border
      border-[#DCE3EB]
      rounded-xl
      p-6
      transition
      hover:border-[#384B8F]
    "
    >

      <p className="text-s font-medium text-[#5E6773]">
        {title}
      </p>

      <h3 className="mt-4 font-[Kameron] text-5xl text-[#384B8F]">
        {value}
      </h3>

      <p className="mt-4 text-s text-[#5E6773]">
        {subtitle}
      </p>

    </div>
  );
}