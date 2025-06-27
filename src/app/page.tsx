"use client";

import { useState } from "react";


import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {{
    authClient.signUp.email({
      email,
      password,
      name,
    },{
      onError: (error) => {
        window.alert("something went wrong: ");
      },
      onSuccess: () => {
        window.alert("user created successfully");
      }
    })
  }}
  return (
    <div>
      <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <Button onClick={onSubmit} className="mt-4">
        create user
      </Button>
    </div>
  );
}
