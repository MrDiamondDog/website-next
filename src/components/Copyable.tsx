"use client";

export default function Copyable({ text, children }: { text: string, children: React.ReactNode }) {
    return (
        <div onClick={() => navigator.clipboard.writeText(text)}>
            {children}
        </div>
    );
}
