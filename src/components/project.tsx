
import ProjectCom from "./projectCom";



export default function Project(){
    
    const projects = [{
        title: "E-Shagun",
        description: "• Developed an on-chain Envelope Lottery game, boosting user participation by 25% and driving 15% growth in platform transactions.",
        tech: [ "Solidity", "Next.js", "Ethers.js","Tailwind CSS", "Remix (IDE)","Docker"],
        github: "https://github.com/AadiNir/unfoldhack",
        link: "https://unfoldhack-o6e1h6mil-aadinirs-projects.vercel.app/"
    },{
        title: "Medimorph",
        description: "Developed a medical imaging platform enabling DICOM file uploads and advanced image adjustments using TypeScript and Lunit InsightViewe",
        tech: [ "React", "TypeScript", "TailwindCSS", "Docker","Lunit InsightViewer" ],
        github: "https://github.com/AadiNir/Health-saas",
        link: "https://health-saas.vercel.app/"
    },{
        title: "AgroChain",
        description: "Welcome To Retaurant-website, Your Go-To Platform for food order,dining booking and party boookings",
        tech: ["React.js", "Solidity", "Tailwind CSS", "Express.js", "MongoDB", "JWT auth"],
        github: ": https://github.com/AadiNir/SIH-project",
        link: "/"
    }]
    

    const theme = localStorage.getItem("modes")
    return <div className={`${theme == "dark"? "bg-bgds text-white": "bg-white text-bgds"} font-chill py-32`}>
        <h1 className="text-center text-4xl font-semibold font-chill mb-24 ">Projects</h1>
        <div className=" flex flex-wrap justify-center gap-8 ">
            {
                projects.map((item,index)=>(
                    <ProjectCom key={index} title={item.title} description={item.description} tech={item.tech} github={item.github} link={item.link} />
                ))
            }
        </div>
        {/* <div className="flex justify-center mt-10">
            <Link to="/projects"><button className={` px-5 py-3 font-chill font-semibold rounded-md uppercase transition-all ease-in-out duration-500 ${theme == "dark"? "bg-white text-bgds hover:bg-forHover hover:text-white":"bg-bgds text-white hover:bg-red-300 hover"}`} >More Projects</button></Link>
        </div> */}
    </div>
}