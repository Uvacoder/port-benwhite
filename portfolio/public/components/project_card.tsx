import { PinnedRepo } from "./github"
import * as SiIcon from "react-icons/si"
import { FiChevronRight, FiStar } from 'react-icons/fi'
import { useRouter } from "next/router";

export const ProjectCard: React.FC<{ project: PinnedRepo }> = ({ project }) => {
    let type = project.primaryLanguage.name.toLowerCase();
    type = type.replace(/^\w/, (c) => c.toUpperCase());

    const parsed = `Si${type}`;
    const router = useRouter();

    return ( 
        <div onClick={() => {
            window.location.href = `./study/${project.name}`;
            router.push(`./study/${project.name}`);
        }}>
            <span>
                { project.name }

                {/* <div style={{ opacity: 0.2 }}>
                {
                    SiIcon[parsed] ?
                    SiIcon[parsed]?.({
                        style: {
                            height: '1.5rem',
                            width: '1.5rem'
                        }
                    })
                    :
                    <></>
                }
                </div> */}
            </span>

            <div>
                <span>
                    <p>
                    {
                        project.stargazers.totalCount
                    }
                    </p>                    
                    {
                        FiStar({
                            style: {
                                height: '.75rem',
                                width: '.75rem',
                                opacity: 0.8
                            }
                        })
                    }
                </span>
                
                
                <div>
                    {
                        FiChevronRight({
                            style: {
                                height: '1rem',
                                width: '1rem',
                                marginLeft: '2px'
                            }
                        })
                    }
                </div>
                
            </div>
        </div>
    )
}