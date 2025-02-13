import {Menubar} from "primereact/menubar";
import {Outlet, useNavigate} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons/faHouse";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {classNames} from "primereact/utils";

const MainLayout = ({}) => {
    const navigate = useNavigate();
    return (
        <>
            <div className={"fixed top-0 w-full z-1"}>
                <Menubar className={"p-2 max-w-300 mx-auto"}
                         model={[
                             {
                                 label: 'SaunaSim',
                                 icon: (options) => <FontAwesomeIcon icon={faHouse} {...options?.iconProps} />,
                                 command: () => navigate("/")
                             },
                             {
                                 label: 'About',
                                 command: () => navigate("/about")
                             },
                             {
                                 label: 'Download',
                                 command: () => navigate("/downloads")
                             },
                             {
                                 label: 'Documentation',
                                 command: () => navigate("/docs")
                             }
                         ]}
                         end={<>
                             <div
                                 className={classNames("sm:relative sm:w-auto w-full static transition-shadow duration-200",
                                     "rounded-md text-gray-700 dark:text-white/80 hover:text-gray-700 dark:hover:text-white/80",
                                     "hover:bg-gray-200 dark:hover:bg-gray-800/80")}>
                                 <a href={"https://github.com/sauna-sim/sauna-ui"} aria-label={"SaunaSim GitHub"}
                                    className={"select-none cursor-pointer flex items-center no-underline overflow-hidden relative py-3 px-3"}>
                                     <FontAwesomeIcon icon={faGithub}/>
                                 </a>
                             </div>
                         </>}
                />
            </div>
            <div className={"max-w-300 mx-auto mt-20 z-0"}>
                <Outlet/>
            </div>
        </>
    )
}

export default MainLayout;