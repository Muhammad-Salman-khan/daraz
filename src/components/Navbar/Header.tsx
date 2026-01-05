import { useState } from 'react'
import { LogIn, Menu, X } from 'lucide-react'
import { Button } from '../button'
import Login from '../Login/Login'
import SignUp from '../Signup/SignUp'

export default function Header() {
  const [menuState, setMenuState] = useState(false)

  return (
    <>
      <div className="w-full  bg-primary font-bol text-primary-foreground">
        <nav
          className="mx-auto  lg:flex max-w-7xl flex-col items-center gap-3 px-4 py-2 text-sm
                  sm:flex-row sm:justify-center
                  lg:justify-end lg:gap-6"
        >
          <span className="cursor-pointer hover:underline">
            Save More on App
          </span>
          <span className="cursor-pointer hover:underline">Sell On Daraz</span>
          <span className="cursor-pointer hover:underline">Help & Support</span>
          <Login />
          <SignUp />
          <span className="cursor-pointer hover:underline">
            زبان تبدیل کریں
          </span>
        </nav>
      </div>
    </>
  )
}
