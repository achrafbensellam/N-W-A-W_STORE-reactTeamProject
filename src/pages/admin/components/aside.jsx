import "./aside.css";
import { RiDashboardLine } from "react-icons/ri";



function Aside() {
    return (
        <div className="box-aside-icoun">

            <button className="btn-icoun-dashbord">
                <RiDashboardLine
                    className="icoun-dashbord" />
            </button>

        </div>
    )
}
export default Aside;