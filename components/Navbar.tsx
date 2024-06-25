import Link from "next/link"
import Image from "next/image"
const Navbar = () => {
  return (
    <nav className="py-6 mb-12 border-b bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
        <Image src='/' alt="logo" width={24} height={24}/>
        </Link>
        <div className=" flex items-center gap-6">
            <Link className=" hover:text-orange-500 transition" href='/login'>Log in</Link>
            <Link href='/signup' className=" bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-lg transition">Sign up</Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
