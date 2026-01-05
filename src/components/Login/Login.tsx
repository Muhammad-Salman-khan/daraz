import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/dialog'
import { Input } from '@/components/input'
import { Button } from '../button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../tabs'
import { Link } from '@tanstack/react-router'

const Login = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="link" className="text-white">
            login
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form>
            <Tabs defaultValue="account">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>

              <TabsContent value="account" className="mt-6">
                <DialogHeader className="text-center">
                  <DialogTitle>Enter Email and Password</DialogTitle>
                </DialogHeader>
                <div className="grid gap-6 py-4">
                  <div className="grid gap-3">
                    <Input placeholder="Enter Username" />
                  </div>
                  <div className="grid gap-3">
                    <Input placeholder="Enter Password" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Login</Button>
                </DialogFooter>
              </TabsContent>

              <TabsContent value="password" className="mt-6">
                <DialogHeader>
                  <DialogTitle>Enter Phone Number</DialogTitle>
                </DialogHeader>
                <div className="grid gap-6 py-4">
                  <div className="grid gap-3">
                    <Input placeholder="Enter your phone Number" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Login</Button>
                </DialogFooter>
              </TabsContent>
            </Tabs>
          </form>
          <DialogDescription className="flex gap-2 justify-center align-middle items-center">
            Dont have a account?
            <Link to="/"> Singup </Link>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Login
