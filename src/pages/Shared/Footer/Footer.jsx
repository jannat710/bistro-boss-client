import fbimg from '../../../../src/assets/contact/fb.svg'
import insta from '../../../../src/assets/contact/insta.svg'
import twitter from '../../../../src/assets/contact/twitter.svg'

const Footer = () => {
    return (
        <div className='pt-10'>
            <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center">
                <div className='bg-[#1F2937] w-full mx-auto text-white h-[40vh] md:w-1/2 lg:w-1/2  pt-10'>
                    <h1 className='text-3xl text-center md:pr-10 md:text-right lg:pr-20 lg:text-right font-bold'>CONTACT US</h1>
                    <p className='text-base text-center md:pr-10 md:text-right lg:pr-20 lg:text-right font-medium pt-4'>123 ABS Street, Uni 21, Bangladesh<br /> +88 123456789<br /> Mon - Fri: 08:00 - 22:00<br /> Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className='bg-[#111827] w-full mx-auto h-[40vh] md:w-1/2  lg:w-1/2 text-white pt-10'>
                    <h1 className='text-3xl text-center md:pl-10 md:text-left lg:pl-20 lg:text-left font-bold'>Follow Us</h1>
                    <p className='text-base text-center md:pl-10 md:text-left lg:pl-20 lg:text-left font-medium pt-4 pb-2'>Join us on social media</p>
                    <div className="flex gap-3 md:pl:10 lg:pl-20 justify-center md:justify-start lg:justify-start items-center">
                        <a><img src={fbimg} alt="" /></a>
                        <a><img src={twitter} alt="" /></a>
                        <a><img src={insta} alt="" /></a>
                    </div>
                </div>
                
            </div>
            <div className='text-white bg-black text-center py-5'>
                    <h1>Copyright © CulinaryCloud. All rights reserved.</h1>
                </div>
            </div>


    );
};

export default Footer;