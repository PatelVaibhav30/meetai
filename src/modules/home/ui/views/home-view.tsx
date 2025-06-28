"use client";

import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

export const HomeView = () => {
    const router = useRouter();
    const { data: session } = authClient.useSession();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <p>Logged In as {session?.user?.name}</p>
            <Button
                onClick={() => authClient.signOut({
                    fetchOptions: {
                        onSuccess: () => router.push('/sign-in')
                    }
                })}
                className="mt-4">
                Sign out
            </Button>
        </div>
    );
}
