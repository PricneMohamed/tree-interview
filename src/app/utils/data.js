import style from "@/app/css/modules/home/home.module.css";


export const dount_data = [
  {
    strawberry: {
      index: 0,
      image: "/images/home/dount-1.png",
      subImage: "/images/home/strawberry.png",
      color: "#F8506D",
      bodyColor: "#FDDBE4",
      shadow: "drop-shadow-[0_0_50px_#F8506D]",
      item: "starwberry",
      name: (
        <h1 className={`${style.title} split`}>
          Starwberry <br /> Donut
        </h1>
      ),
      description: (
        <p className={`${style.description}`}>
          Raised ring with strawberry frosting and <br /> round sprinkles
        </p>
      ),
      classess: "primary-btn",
    },
  },
  {
    blueberry: {
      index: 1,
      image: "/images/home/dount-2.png",
      subImage: "/images/home/blueberry.png",
      color: "#44AABBAF",
      bodyColor: "#DEF7FF",
      shadow: "drop-shadow-[0_0_50px_#44AABBAF]",
      item: "blueberry",
      name: (
        <h1 className={`${style.title}`}>
          Blueberry <br /> Donut
        </h1>
      ),
      description: (
        <p className={`${style.description}`}>
          Raised ring with strawberry frosting and <br /> round sprinkles
        </p>
      ),
      classess: "primary-btn",
    },
  },
  {
    chocolate: {
      index: 2,
      image: "/images/home/dount-3.png",
      subImage: "/images/home/chocolate.png",
      color: "#974F2DAF",
      bodyColor: "#FFF2E3",
      shadow: "drop-shadow-[0_0_50px_#974F2DAF]",
      item: "chocolate",
      name: (
        <h1 className={`${style.title}`}>
          Chocolate <br /> Donut
        </h1>
      ),
      description: (
        <p className={`${style.description}`}>
          Raised ring with strawberry frosting and <br /> round sprinkles
        </p>
      ),
      classess: "primary-btn",
    },
  },
];
