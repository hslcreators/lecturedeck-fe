type Props = {
    imageUrl : string;
    alt: string;
    children: React.ReactNode;
}
function FormLayout({imageUrl, alt, children}: Props){
    return (
        <main className="flex lg:flex-row flex-col gap-10 h-screen lg:gap-[8rem] bg-white ">
        <aside className="lg:w-[400px] h-[180px]  lg:mt-0 w-full overflow-hidden lg:h-full flex-shrink-0">
        <img src={imageUrl} alt={alt} id="auth-image" className="object-cover scale-[1.5] md:scale-x[1.2] lg:scale-[1] object-center w-full h-full" />
        </aside>
        {children}
        </main>
    )
}
export default FormLayout;