'use client';

export default function ErrorPage({ error }: { error: Error }) {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl font-bold">{error.name}</h1>
            <p className="text-2xl">{error.message}</p>
            <p className="text-lg">
                {error.stack
                    ?.split('\n')
                    .map((line, index) => <span key={index}>{line}</span>)}
            </p>
        </div>
    );
}
