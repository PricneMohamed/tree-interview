import style from "@/app/css/modules/home/home.module.css";
import Banner from "./_components/home/Banner";


export default function Home() {

  return (
    <div className={style.container}>
     <Banner />
    </div>
  );
}
