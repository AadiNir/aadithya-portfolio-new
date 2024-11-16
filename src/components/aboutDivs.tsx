


export default function AboutDivs(){
    const theme = localStorage.getItem("modes")
    const cards = [{
        title: "About Me",
        description: "Hello! I am Aadithya Niranjan, a final-year B.Tech student in Electronics and Computer Engineering at VIT Chennai with a passion for backend development and problem-solving. I enjoy building scalable and efficient digital solutions."
    }, {
        title: "Professional Background",
        description: "I have experience as a Web Developer Intern at Mustard Pvt. Ltd., where I developed robust RESTful APIs using Express.js and MongoDB and built dynamic user interfaces with ReactJS. My expertise spans technologies such as Node.js, React, Solidity, and Docker."
    }, {
        title: "Current Focus",
        description: "Currently, I am enhancing my skills in backend development and exploring advanced topics like blockchain integration and DevOps practices. I aim to leverage tools like Next.js and Kubernetes to build scalable and efficient applications."
    }];
    
    const education = [{
        degree: "B.Tech in Electronics and Computer Engineering",
        year: "2021 – 2025",
        college: "Vellore Institute of Technology, Chennai",
        cgpa: "CGPA: 8.9"
    }, {
        degree: "Senior Secondary",
        year: "2018 – 2020",
        college: "Narayana Junior College"
    }, {
        degree: "Matriculation",
        year: "2017 – 2018",
        college: "Modern Public School"
    }];
    
    // const experience = [{
    //     role: "Web Developer Intern",
    //     duration: "August 2023 – October 2023",
    //     company: "Mustard Pvt. Ltd, Chennai",
    //     responsibilities: [
    //         "Developed RESTful APIs using Express.js and MongoDB for efficient data management.",
    //         "Architected a ReactJS-based user portal for managing and displaying user profiles."
    //     ]
    // }];
    return <div className={` font-chill flex flex-col pt-64 pb-10   items-center justify-center ${theme == "dark"? "bg-bgds":"bg-white"} gap-10`}>
            <div className={`flex flex-wrap gap-8  items-center justify-center  text-texts ` }>
                {cards.map((card)=>(
                    <div className={` w-[350px] h-[400px] border-2 rounded-lg p-10 ${theme == "dark"? "border-brdr": "border-red-300"} transition-all ease-in-out duration-500 hover:translate-y-[-7px]`}>
                        <h1 className="text-2xl font-semibold mb-6">{card.title}</h1>
                         <p>{card.description}</p>
                    </div>
                ))}
            </div>
            <div className={`border-2 w-[74%] rounded-lg ${theme == "dark"? "border-brdr": "border-red-300" } p-8`}  >
                <h1 className={` text-3xl mb-8  ${theme == "dark"? "text-white":"text-bgds"} font-bold`}>Education</h1>
                {education.map((edu)=>(
                    <div className="text-spcl mb-5">
                        <div className="flex justify-between">
                            <h1 className="text-xl text-texts text-semibold " >{edu.degree}</h1>
                            <h2>{edu.year}</h2>
                        </div>
                        <h3>{edu.college}</h3>
                    </div>
                ))}
            </div>
        </div>
}