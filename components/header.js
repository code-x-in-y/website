import Link from 'next/link'
export function Header() {

  const Y = () => <span className="text-rose-800">{"Y"}</span>
  const X = () => <span className="text-sky-800">{"X"}</span>
  
    return (
    <div className="flex items-center justify-between max-w-3xl px-8 mx-auto py-4">
      <Link href="/">
        <a className="block font-bold text-lg">Code(<Y/>)(<X/>)</a>
      </Link>
    </div>
  )
}
