import bootstrap from '../assets/svg/skills/bootstrap.svg'
import c from '../assets/svg/skills/c.svg'
import cplusplus from '../assets/svg/skills/cplusplus.svg'
import csharp from '../assets/svg/skills/csharp.svg'
import css from '../assets/svg/skills/css.svg'
import docker from '../assets/svg/skills/docker.svg'
import gcp from '../assets/svg/skills/gcp.svg'
import git from '../assets/svg/skills/git.svg'
import html from '../assets/svg/skills/html.svg'
import java from '../assets/svg/skills/java.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import matlab from '../assets/svg/skills/matlab.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import python from '../assets/svg/skills/python.svg'
import github from '../assets/svg/skills/github.svg'
import react from '../assets/svg/skills/react.svg'
import ubuntu from '../assets/svg/skills/ubuntu.svg'
import rust from '../assets/svg/skills/rust.svg'
import codeforces from '../assets/svg/skills/codeforces.svg'

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'codeforces':
            return codeforces;
        case 'github':
            return github;
        case 'rust':
            return rust;
        case 'bootstrap':
            return bootstrap;
        case 'docker':
            return docker;
        case 'ubuntu':
            return ubuntu;
        case 'gcp':
            return gcp;
        case 'html':
            return html;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'react':
            return react;
        case 'mysql':
            return mysql;
        case 'c':
            return c;
        case 'c++':
            return cplusplus;
        case 'c#':
            return csharp;
        case 'java':
            return java;
        case 'matlab':
            return matlab;
        case 'python':
            return python;
        case 'git':
            return git;
        default:
            break;
    }
}
