"use client";

import { redirect } from "next/navigation";

interface ErrorProps {
    statusCode?: number;
}

export default function Error({ statusCode }: ErrorProps) {
    if (statusCode === 404) {
        redirect("/not-found");
    } else {
        redirect("/");
    }

    return null;
}
