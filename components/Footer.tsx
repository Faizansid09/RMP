export default function Footer() {
  return (
    <footer className="relative z-10 flex min-h-14 items-center justify-between border-t border-[#dedede] text-[10px] text-[#999]">
      <span>
        AWS LPU Recruitment Management Portal
      </span>

      <div className="hidden items-center gap-5 sm:flex">
        <span>Identity Services</span>
        <span>Recruitment</span>
        <span>© AWS LPU</span>
      </div>
    </footer>
  );
}
