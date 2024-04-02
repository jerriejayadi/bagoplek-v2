import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div
      className={`flex items-center justify-between fixed  top-0 px-14 py-5 bg-transparent w-full`}
    >
      {/* Hamburger Toggle */}
      <div className={`sm:hidden`}></div>

      {/* Bagoplek Logo */}
      <div className={``}>
        <Image src={`/logo-bagoplek.png`} alt="" width={100} height={70} />
      </div>

      {/* Menu */}
      <div className={` flex-col md:flex-row gap-10 font-bold hidden sm:flex`}>
        <Link href="#">Beranda</Link>
        <Link href="#">Produk</Link>
        <Link href="#">Lokasi</Link>
        <Link href="#">Partnership</Link>
        <Link href="#">FAQ</Link>
      </div>

      {/* Empty Column */}
      <div></div>
    </div>
  );
};
export default Navbar;
