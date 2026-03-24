import "@/app/css/modules/mybtn.css";

export default function CustomBtn({title,className}) {
    return (
        <button className={`order-now-navbar ${className} currentBtn`}>
            {title}
        </button>
    )
}
