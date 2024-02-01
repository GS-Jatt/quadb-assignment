"use client";

import { useRef, useState } from "react";

function Form({ name }) {
    const [show, setShow] = useState(false);
    const userRef = useRef({name:'',email:''})
 
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('Ticket booked successfully')
        localStorage.setItem("userData", JSON.stringify(userRef.current));
        userRef.current ={ name: "", email: "" };
        e.target.reset()
        setShow(!show)
    };
    return (
        <>
            <button
                className=" font-bold bg-yellow-600 rounded-full w-48 mt-6 float-right p-4"
                onClick={() => setShow(!show)}>
                Get Ticket
            </button>
            <div
                className={`${
                    show ? "absolute left-0 top-0" : "hidden"
                } flex justify-center items-center min-w-full min-h-full`}>
                <div className="relative max-w-[40rem] w-[70%] bg-gray-800 p-8 rounded-2xl shadow-xl shadow-gray-900  text-slate-300">
                    <button
                        onClick={() => setShow(!show)}
                        className="absolute right-2 top-2 text-[2rem]">
                        ✕
                    </button>
                    <h3 className="font-bold text-2xl mb-4">
                        Movie: {name && name}
                    </h3>

                    <form onSubmit={onSubmit} className="flex flex-col gap-2">
                        <label className="mt-2">Name</label>
                        <input
                            className="p-2 px-6 bg-gray-700 rounded-xl"
                            type="text"
                            required
                            placeholder="write your name"
                            onChange={(e) =>
                                (userRef.current.name = e.target.value)
                            }
                        />

                        <label className="mt-2">Email</label>
                        <input
                            className="p-2 px-6 bg-gray-700 rounded-xl"
                            type="email"
                            required
                            placeholder="write your email address"
                            onChange={(e) =>
                                (userRef.current.email = e.target.value)
                            }
                        />
                        <button
                            className="ml-auto w-24 mt-6 float-right p-2 font-bold bg-yellow-600 rounded-full  hover:text-white cursor-pointer"
                            type="submit">
                            Pay
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Form;
