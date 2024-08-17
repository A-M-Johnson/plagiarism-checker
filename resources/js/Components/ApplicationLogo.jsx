export default function ApplicationLogo(props) {
    return (
        <div {...props} className="h-[80px] w-[80px] rounded-full overflow-hidden">
            <img src="/images/logo.jpg" alt="" className="object-cover h-full w-full" />
        </div>
    );
}
