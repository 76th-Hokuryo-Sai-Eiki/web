export function TailwindIndicator() {
    if (!import.meta.env.DEV) return null;

    return (
        <div className="fixed right-1 top-[70px] z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-lg text-white">
            <div className="hidden" />
            <div className="hidden xs:block sm:hidden">xs</div>
            <div className="hidden sm:block md:hidden">sm</div>
            <div className="hidden md:block lg:hidden">md</div>
            <div className="hidden lg:block xl:hidden">lg</div>
            <div className="hidden xl:block 2xl:hidden">xl</div>
            <div className="hidden 2xl:block">2xl</div>
        </div>
    );
}
