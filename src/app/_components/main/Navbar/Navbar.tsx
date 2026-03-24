import { web } from "@/app/utils/constant";
import { navbarRoute } from "@/app/utils/route/navbar";
import Image from "next/image";
import Link from "next/link";
import CustomBtn from "@/app/_components/CustomBtn/CustomBtn";
import style from '@/app/_components/main/Navbar/Navbar.module.css'
export default function Navbar() {
  return (
<header className={style.header}>
  <div className={style.container}>
    <div className={style.header_inner}>
      <div className={`${style.flex1_md} ${style.md_flex_items}`}>
        <Link className={style.logo_link} href="#">
          <span className="sr-only">Home</span>
          <Image
            className={style.logo_image}
            src={"/images/main/logo.png"}
            height={2000}
            width={2000}
            alt="dount logo"
          />
          <span className={style.logo_text}>{web}</span>
        </Link>
      </div>

      <div className={style.md_flex_items}>
        <nav aria-label="Global" className={style.nav}>
          <ul className={style.nav_list}>
            {navbarRoute?.map((route, index) => (
              <li className={style.nav_item} key={index}>
                <Link className="" href={route.href}>
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={style.btn_wrapper}>
          <CustomBtn title={"Order Now"} className={"bg-mypink cursor-pointer"} />
        </div>
      </div>
    </div>
  </div>
</header>
  );
}
