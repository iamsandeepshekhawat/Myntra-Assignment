import Breadcrumbs from "@/components/Breadcrumbs"
import Header from "@/components/Header"
import Main from "@/components/Main"
import SearchBash from "@/components/Search/Search.bash"
import { AppContext } from "@/components/Search/AppContext"
import { useState } from "react"

export default function Home() {
  const items = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Clothing",
      href: "/clothing",
    },
    {
      title: "T-Shirts",
      href: "/clothing/t-shirts",
    },
  ]
  const [query, setQuery] = useState('');

  return (
    <AppContext.Provider value={{ query, setQuery }}>
      <div>
        <Header />
        <Breadcrumbs items={items} />
        <SearchBash />
        <Main />
      </div>
    </AppContext.Provider>
  )
}