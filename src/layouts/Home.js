import { Link } from "react-router-dom";

export const Home = () => {

    return (
        <div>
            <h2 className="text-center text-white text-6xl p-2">Coffe67 Developer</h2>        
            <div className="flex w-full justify-center">            
                <Link to='projects' className="text-white self-center bg-gold-100 p-2 w-1/5 rounded-lg text-center" >Projects</Link>                
                <Link to='blog' className="text-white self-center bg-gold-100 p-2 w-1/5 rounded-lg text-center" >Blog</Link>
            </div>
            
        </div>
    )
}