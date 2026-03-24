import Link from "next/link";
import '@/app/css/modules/notFount.css'
export default function NotFound() {
  return (
    <div id='oopss'>
    <div id='error-text'>
        <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404" />
        <span>404 PAGE</span>
        <p className="p-a">
           . بتدور علي ايه يعم انت؟</p>
        <p className="p-b">
            ... Back to previous page
        </p>
        <Link href='/' className="back">... Back to previous page</Link>
    </div>
</div>
  )
}
