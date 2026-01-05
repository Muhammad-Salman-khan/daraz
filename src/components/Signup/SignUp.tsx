import { Link } from '@tanstack/react-router'
import { Button } from '../button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../dialog'
import { Input } from '../input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../tabs'

const SignUp = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="link" className="text-white">
            Sign Up
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form>
            <Tabs defaultValue="account">
              <TabsList className="grid w-full grid-cols-1">
                <TabsTrigger value="Account">Create An Account</TabsTrigger>
              </TabsList>

              <TabsContent value="Account" className="mt-6">
                <DialogHeader className="text-center"></DialogHeader>
                <div className="grid  gap-6 py-4">
                  <div className="grid grid-cols-2 gap-3">
                    <Input placeholder="Enter first name" />
                    <Input placeholder="Enter last name" />
                  </div>
                  <div className="grid gap-3">
                    <Input placeholder="Enter your Email" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Input placeholder="Password" />
                    <Input placeholder="Confirm Password" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Sign Up</Button>
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
            already have a account?
            <Link to="/"> Login </Link>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default SignUp
