import { Link } from '@tanstack/react-router';
import { Button } from '../button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../dialog';
import { Input } from '../input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../tabs';

const SignUp = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <span className="text-foreground ">Sign Up</span>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form>
            <Tabs defaultValue="account">
              <TabsList className="grid w-full grid-cols-1">
                <TabsTrigger value="Account">Sign up</TabsTrigger>
              </TabsList>
              <DialogTitle className="flex justify-center align-middle items-center m-3 font-bold ">
                Create An Account
              </DialogTitle>
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
            </Tabs>
          </form>
          <DialogDescription className="flex gap-2 justify-center align-middle items-center">
            already have a account?
            <Link to="/"> Login </Link>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SignUp;
