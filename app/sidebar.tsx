import prisma from "@/prisma";
import CreateProject from "./components/client/CreateProject";

const fetchProjects = async () => {
    const projects = await prisma.project.findMany();
    return projects;
};

export default async function(){
    const projects = await fetchProjects();
    return (
        <nav className="flex p-[1rem] min-h-screen flex-col w-1/4 bg-slate-100"> 
        <div className="flex flex-row border-b flex-wrap items-center py-[0.5rem] border-slate-500 justify-between">
            <h2 className="font-semibold  ">Projects</h2>
            <CreateProject />
        </div>
            <ul> 
                {projects.map((p) => (
                    <li className="px-[1rem] bg-slate-50" key={p.id}>
                        {p.title}
                    </li>
                    ))}
            </ul>
        </nav>
    )
}