import 'react-pro-sidebar/dist/css/styles.css';
import { SidebarData } from './SidebarData';
import { Link } from 'react-router-dom';

function PTsidebar(props) {
    return (
        <div className="Sidebar">
            <ul className="SidebarList">
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}
                            onClick={() => window.location.pathname = item.path}>
                            <div>
                                <span>{item.title}</span>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default PTsidebar;