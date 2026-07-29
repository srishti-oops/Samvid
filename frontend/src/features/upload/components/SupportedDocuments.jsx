export default function SupportedDocuments() {
  const documents = [
    "Rental Agreements",
    "Employment Contracts",
    "Freelance Agreements",
    "Service Agreements",
    "NDAs",
    "Lease Agreements",
  ];

  return (
    <section>

      <h2 className="font-[Kameron] text-3xl text-[#18202A]">
        Supported Documents
      </h2>

      <p className="mt-3 text-[#5E6773]">
        Samvid works best with these legal document types.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mt-5">

        {documents.map((doc) => (

          <div
            key={doc}
            className="
              bg-white
              border
              border-[#DCE3EB]
              rounded-xl
              p-3
              hover:border-[#384B8F]
              transition
            "
          >
            <h3 className="font-medium text-[#18202A]">
              {doc}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}