import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/dialog';
import { Input } from '@/components/input';
import { Button } from '../button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../tabs';
import { Link } from '@tanstack/react-router';
import { useForm } from '@tanstack/react-form';
import { LoginValidation, type LoginValidationType } from '@/lib/Schemas/Login';
import SignUp from '../Signup/SignUp';
const Login = () => {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    } as LoginValidationType,
    onSubmit: ({ value }) => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) {
        form.setFieldMeta('email', (meta) => ({
          ...meta,
          error: 'No account Found please Login first',
        }));
        return;
      }
    },
    validators: {
      onChange: LoginValidation,
    },
  });

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <span className="text-foreground">login</span>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <Tabs defaultValue="account">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>

            <TabsContent value="account" className="mt-6">
              <DialogHeader className="text-center">
                <DialogTitle>Enter Email and Password</DialogTitle>
              </DialogHeader>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  form.handleSubmit();
                }}
              >
                <div className="grid gap-6 py-4">
                  <div className="grid gap-3">
                    <form.Field name="email">
                      {(field) => (
                        <>
                          <Input
                            id="email"
                            type="email"
                            required
                            placeholder="Enter Email"
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                          />
                          {field.state.meta.errors.map((e) => (
                            <span className="text-destructive" key={e?.message}>
                              {e?.message}
                            </span>
                          ))}
                        </>
                      )}
                    </form.Field>
                  </div>
                  <div className="grid gap-3">
                    <form.Field name="password">
                      {(field) => (
                        <>
                          <Input
                            id="password"
                            type="password"
                            placeholder="Enter Password"
                            required
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                          />
                          {field.state.meta.errors.map((e) => (
                            <span className="text-destructive" key={e?.message}>
                              {e?.message}
                            </span>
                          ))}
                        </>
                      )}
                    </form.Field>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Login</Button>
                </DialogFooter>
              </form>
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
          <DialogDescription className="flex gap-2 justify-center align-middle items-center">
            Dont have a account?
            <Link to="/">
              {' '}
              <SignUp />{' '}
            </Link>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Login;
