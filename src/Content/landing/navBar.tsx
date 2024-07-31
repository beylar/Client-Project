export default function NavBar(){
    return(
        <>
        <div className="flex justify-between px-16 py-6 border-b shadow-2xl items-center">
            <p className="text-2xl font-semibold font-custom">REACT LANDING PAGE</p>
            <div className="flex gap-12 text-md text-gray-600">
                <a href="#Features">FEATURES</a>
                <a href="#About">ABOUT</a>
                <a href="#Services">SERVICES</a>
                <a href="#Gallery">GALLERY</a>
                <a href="#Testimonials">TESTIMONIALS</a>
                <a href="#Team">TEAM</a>
                <a href="#Contact">CONTACT</a>

                
            </div>
        </div>
        </>
    )
}