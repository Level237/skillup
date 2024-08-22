import React from 'react'
import HeaderSticky from '../components/HeaderSticky'
import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "../components/ui/select"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
export default function Login() {
  return (
    <>
    <section className='h-screen  overflow-hidden bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-800 to-slate-900'>
      <HeaderSticky/>
      <section className='flex justify-center items-center mt-24'>
      <Card className="w-[350px]  border-none bg-black text-white rounded-xl">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-6">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Numero de telephone</Label>
              <Input id="name" className="rounded-sm" placeholder="Numero de telephone" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Mot de passe</Label>
              <Input id="name" className="rounded-sm" type="password" placeholder="password" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <button className='bg-[#f6ea0b] text-black px-4 py-2 rounded font-bold' onClick={() => console.log("Primary")}>
          Login
        </button>
      </CardFooter>
    </Card>
      </section>
      
    </section>
    </>
    
  )
}
