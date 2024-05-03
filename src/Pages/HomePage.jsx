import myImage from '../assets/family.jpg';

import Footer from "../Component/Footer";
import Header from "../Component/Header"


const HomePage = ()=>{
    return (
        <>
        <Header/>
       <div className="m-5 flex flex-col gap-4">
        
        <center className="bg-gray-200 p-4">
        <img className="w-3/5" src={myImage} alt="pic"/>
        </center>

        <center className=""> 
            <div className="w-4/5 bg-pink-400 p-10 space-y-5 ">
                <h1 className="text-3xl text-white font-semibold">Think Health. Think Massage</h1>
                <p className="text-md text-wrap  text-white">We are open 9am to 6pm, Monday through Sunday. if you would like to schedule an appointment with us,
                    please call us at 987-854-3210 today!
                </p>
                <div>
                    <button className="hover:bg-blue-300 w-52 p-2 border mx-1  text-white">LEARN MORE ABOUT US</button>
                    <button className="hover:bg-blue-300 w-52 p-2 border mx-1  text-white">CONTACT US TODAY</button>
                    
                </div>
            </div>
        </center>
        <center className=""> 
            <div className="w-4/5 text-pink-400 p-10 space-y-5">
                <p className="text-md text-wrap">
                    Are you looking for professional, registered message therapist ? Sample Massage Therapy has 4
                    registered massage therapist who can provide clinical massage.
                    </p>
                <p className="text-black">
                    We are committed to your long term health and well-being. Our multi-dispciplinary clinic provide 
                    a balanced approach to healthy lifestyle.
                    Enhance your health and improve your performance which out treatements.

                </p>
                <p className="text-black">
                    We welcome you to come explore all the benifits you'll enjoy as one of our valued guests.
                    Our professional staff is commited to offering the best massage therapy in Mainland.
                </p>
            </div>
        </center>
       <hr/>
       <center className=""> 
            <div className="w-4/5  p-10 space-y-5">
                <h1 className="text-2xl text-pink-500 font-semibold" >Family Wellness Massage Therapy</h1>    
                <p>9858 Main Street ,Suite 123 , Mailland, ML123456 <br />
                Phone:9523655884</p>
             </div>
        </center>
       </div>
       <Footer/>
        </>
    );
}
export default HomePage;