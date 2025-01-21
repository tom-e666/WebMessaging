'use client'
import {useEffect, useRef, useState} from "react";
import {signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth"
import {auth} from "@/lib/firebase"
export default function Page (){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isVisible, setIsVisible] = useState(true);
    const formRef= useRef<HTMLDivElement>(null);

    const handleLogin = async () => {
        try
        {

            await signInWithEmailAndPassword(auth,email,password);
            console.log("Successfully logged in");
            //what should we do next? store confidential info and reroute?


        }
        catch(e){
            console.log("login failed",e);
        }
    }
    const handleSignUp = async () => {
        try {
            await createUserWithEmailAndPassword (auth,email,password);
            console.log("Successfully sign up");
        } catch(e)
        {
            console.log("error sign up");
        }
    }
    useEffect(() => {
        const handleClickOutside= (e:MouseEvent)=>
        {
            if(formRef.current && !formRef.current.contains(e.target as Node))
            {
                setIsVisible(false);
            }
        }
        document.addEventListener("mousedown",handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown",handleClickOutside);
        }
    }, []);
    if(!isVisible) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div ref={formRef}
                 className="bg-purple-700 w-fit p-10 h-fit rounded-lg flex flex-col gap-1">
                <div className="font-bold text-xl text-pink-500 cursor-pointer">Log in</div>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="1@gmail.com"
                    className=" rounded bg-white border w-96 font-semibold text-pink-500"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="123456"
                    className=" rounded bg-white border w-96 font-semibold text-pink-500"
                />
                <div className="w-full h-fit  flex flex-row gap-2">
                    <button
                        type="submit"
                        onClick={handleLogin}
                        className="bg-blue-400 rounded border w-24 h-8 hover:bg-pink-600">Log in
                    </button>
                    <button
                        type="submit"
                        onClick={handleSignUp}
                        className="bg-blue-400 rounded border w-24 h-8 hover:bg-pink-600">Sign up
                    </button>
                </div>
                <p>* Login in or sign up means you have accepted our terms</p>
            </div>
        </div>
    )
}
