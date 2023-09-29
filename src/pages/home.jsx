// import { Calender } from "../components/calender/calender";
import {MultipleSelectCheckmarks} from "../components/multiselect" 
// import DataGridDemo from "../components/grid/grid";
export default function Home(){

    return(
        <div>
            <MultipleSelectCheckmarks data={names} isChipStyle={false} label="Tags"/>
        </div>
    )
}