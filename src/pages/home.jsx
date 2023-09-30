<<<<<<< Updated upstream
import { TestInput } from "../component/input"
import { PasswordIcon } from "../component/passwordIcon"
=======
<<<<<<< Updated upstream
import { TestCombo } from "../components/autocomplete"
=======
<<<<<<< Updated upstream
// import { Calender } from "../components/calender/calender";
import CustomCheckbox from "../components/checkbox";
// import DataGridDemo from "../components/grid/grid";
=======
import { TestDynamicForm } from "../components/dynamicForm"
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
export default function Home(){
    return(
        <div>
<<<<<<< Updated upstream
            I am Home
<<<<<<< Updated upstream
            <TestInput/>
            <PasswordIcon/>
=======
            <TestCombo/>
=======
<<<<<<< Updated upstream
            {/* <Calender maxwidth="maxx-width"  dateCount={10}/> */}
            {/* <DataGridDemo/> */}
            <CustomCheckbox 
                defaultChecked={true}
                disabled={false}
                lable="Test"
                required={true}
                color="success"
                colorbeforeChecked="red"
                colorafterChecked="yellow"
                indeterminate={true}
                method={()=>console.log('Clicked')}
                // icon={<BookmarkBorderIcon />}
                // checkedIcon={<BookmarkIcon />}
            />
=======
            I am Home
            <TestDynamicForm/>
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
        </div>
    )
}