import DashboardHeader from "../dashboard/components/DashboardHeader";
import UploadHero from "./components/UploadHero";
import UploadDropzone from "./components/UploadDropzone";
import SupportedDocuments from "./components/SupportedDocuments";

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <DashboardHeader />

      <main className="mx-auto max-w-6xl px-8 py-10">
        <UploadHero />

        <section className="mt-10">
          <UploadDropzone />
        </section>

        <section className="mt-10">
          <SupportedDocuments />
        </section>
      </main>
    </div>
  );
}