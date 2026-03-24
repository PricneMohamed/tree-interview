"use client";
import style from "@/app/css/modules/home/home.module.css";
import CustomBtn from "../CustomBtn/CustomBtn";
import { dount_data } from "@/app/utils/data";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Banner() {
  const dounts = ["strawberry", "blueberry", "chocolate"];
  type DonutType = "strawberry" | "blueberry" | "chocolate";

  const [mydount, setMyDount] = useState<{ index: number; type: DonutType }>({
    index: 0,
    type: "strawberry",
  });


  useEffect(() => {
    const currentColor =
      dount_data[mydount.index]?.[mydount.type]?.bodyColor ?? "#FDDBE4";
    document.body.style.backgroundColor = currentColor;
    console.log("mydount => ", mydount);
  }, [mydount]);

  useLayoutEffect(() => {
    gsap.fromTo(
      '.myele',
      { y: 30, autoAlpha: 1 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 4,
        stagger: 3,
        repeat: -1, 
        yoyo: true,
        ease: "none",
      },
    );
  }, []);

  return (
    <div className={style.dad}>
      <div className={style.content_text}>
        {dount_data[mydount.index]?.[mydount.type]?.name ?? ""}
        {dount_data[mydount.index]?.[mydount.type]?.description ?? ""}

        <div className={style.btn_box}>
          <CustomBtn
            title={"Order Now"}
            className={"bg-mypink cursor-pointer hover:bg-pink-900"}
          />
          <CustomBtn
            title={"View Menu"}
            className={`${dount_data[mydount.index]?.[mydount.type]?.classess ?? ""}`}
          />
        </div>
        <div className={style.image_container}>
          {dounts.map((ele, index) => (
            <button
              className={style.item_btn}
              onClick={() => {
                setMyDount((prv) => {
                  return {
                    type: ele,
                    index: index,
                  };
                });
                document.body.style.backgroundColor =
                  dount_data[mydount.index]?.[mydount.type]?.bodyColor ??
                  "#FDDBE4";
                console.log(index);
              }}
              key={index}
            >
              <Image
                src={`/images/home/dount-${index + 1}.png`}
                className={`${style.image_items} ${index === mydount.index ? style.Imageselector : ""}`}
                height={2000}
                width={2000}
                alt={ele}
              />
            </button>
          ))}
        </div>
      </div>
      <div className={style.image_Box}>
        <div className={style.image_Box_style}>
          <div className="myele">
            <Image
              src={dount_data[mydount.index]?.[mydount.type]?.subImage ?? ""}
              className={style.image_style}
              height={2000}
              width={2000}
              alt={dount_data[mydount.index]?.[mydount.type]?.item ?? ""}
            />{" "}
          </div>
          <div className="myele">
            <Image
              src={`/images/home/leaf.png`}
              className={style.image_style}
              height={2000}
              width={2000}
              alt={dount_data[mydount.index]?.[mydount.type]?.item ?? ""}
            />{" "}
          </div>
        </div>{" "}
        <div className={""}>
          <Image
            src={dount_data[mydount.index]?.[mydount.type]?.image ?? ""}
            className={`${style.full_width} ${style.cover} ${dount_data[mydount.index]?.[mydount.type]?.shadow ?? ""}`}
            height={2000}
            width={2000}
            alt={dount_data[mydount.index]?.[mydount.type]?.item ?? ""}
          />{" "}
        </div>
        <div className={style.image_Box_style} >
          <div className="myele">
            <Image
              src={"/images/home/leaf.png"}
              className={`${style.image_style} ${style.cover} ${style.rotate_leaf}`}
              height={2000}
              width={2000}
              alt={dount_data[mydount.index]?.[mydount.type]?.item ?? ""}
            />{" "}
          </div>
          <div className="myele">
            <Image
              src={dount_data[mydount.index]?.[mydount.type]?.subImage ?? ""}
              className={`${style.image_style} ${style.cover}`}
              height={2000}
              width={2000}
              alt={dount_data[mydount.index]?.[mydount.type]?.item ?? ""}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
